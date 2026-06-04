# Architecture

## Overview

The app entry point is `index.tsx`, which renders `app/app.tsx`. That file wraps the app in three providers before mounting the navigator:

```
SafeAreaProvider
  └── KeyboardProvider
        └── ThemeProvider
              └── AppNavigator (NavigationContainer)
                    └── MainNavigator (bottom tabs)
                          ├── HomeScreen
                          └── SettingsScreen
```

---

## Theme

`app/theme/` owns all design tokens.

| File | Purpose |
|------|---------|
| `colors.ts` | Light palette + semantic tokens (`text`, `background`, `border`, etc.) |
| `colorsDark.ts` | Dark palette overrides |
| `spacing.ts` / `spacingDark.ts` | Spacing scale |
| `typography.ts` | Font families and sizes |
| `context.tsx` | `ThemeProvider` + `useAppTheme()` hook |
| `types.ts` | `ThemedStyle<T>` utility type |

Access theme values in any component:

```ts
const { theme: { colors, spacing } } = useAppTheme()
```

For styles that need to react to theme changes, use `ThemedStyle` and the `themed()` helper:

```ts
const $container: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  backgroundColor: colors.background,
  padding: spacing.md,
})

// in component:
const { themed } = useAppTheme()
<View style={themed($container)} />
```

---

## Navigation

`app/navigators/` contains:

- **`AppNavigator.tsx`** — root `NavigationContainer` with error boundary and persistence
- **`MainNavigator.tsx`** — bottom tab navigator (Home, Settings)
- **`navigationTypes.ts`** — `MainTabParamList` and screen prop types
- **`navigationUtilities.ts`** — `navigationRef`, `useBackButtonHandler`, `useNavigationPersistence`

To add a new tab screen:

1. Create `app/screens/YourScreen.tsx`
2. Add `Your: undefined` to `MainTabParamList` in `navigationTypes.ts`
3. Add a `<Tab.Screen>` entry in `MainNavigator.tsx`

---

## i18n

Translations live in `app/i18n/`. Each language has its own JSON file (`en.ts`, `es.ts`, etc.). The shape is shared — add a key to all files when adding new text.

Use in components via the `tx` prop (on the boilerplate `Text` component) or the `useTranslation()` hook:

```tsx
<Text tx="common:ok" />

// or
const { t } = useTranslation()
t("common:ok")
```

---

## Storage

`app/utils/storage/` wraps MMKV with typed `save`, `load`, and `remove` helpers. Use this for any persistent local state.

```ts
import * as storage from "@/utils/storage"

await storage.save("user-prefs", { darkMode: true })
const prefs = await storage.load("user-prefs")
```

---

## API

`app/services/api/apiProblem.ts` maps HTTP status codes to typed `ApiProblem` results. Set your base URL in:

- `app/config/config.dev.ts` — development
- `app/config/config.prod.ts` — production

Both read from the `API_BASE_URL` environment variable with a fallback default.

---

## State Management

`app/stores/` contains Zustand stores. `useAppStore.ts` is a minimal example — replace or extend it for your domain.

```ts
import { useAppStore } from "@/stores/useAppStore"

const count = useAppStore((s) => s.count)
const increment = useAppStore((s) => s.increment)
```

For larger apps, split state into focused stores (e.g. `useAuthStore`, `useSettingsStore`) rather than growing one store.

---

## Environment Variables

Copy `.env.example` to `.env` and fill in values. The only variable wired up out of the box is:

| Variable | Used in |
|----------|---------|
| `API_BASE_URL` | `app/config/config.dev.ts`, `config.prod.ts` |

Variables are inlined at build time via `babel-plugin-transform-inline-environment-variables`. Never put secrets in `.env` — they end up in the JS bundle.

---

## Git Hooks

Husky runs `lint-staged` on every commit. lint-staged runs ESLint with auto-fix on all staged `.ts` / `.tsx` files. This keeps the diff clean without running the full lint suite on every save.

The pre-commit hook is at `.husky/pre-commit`. To skip it in an emergency: `git commit --no-verify`.

---

## CI (pipeline.yaml)

`pipeline.yaml` defines three stages for the local `pipeline` runner:

| Stage | Command |
|-------|---------|
| Type Check | `npm run compile` |
| Lint | `npm run lint:check` |
| Test | `npm test` |

Run with `pipeline` from the project root.

---

## Adding a Feature

A typical feature touches:

```
app/models/types.ts          ← add domain types
app/stores/                  ← add or extend Zustand store
app/services/api/            ← add API calls
app/screens/YourScreen.tsx   ← add screen
app/navigators/              ← register screen
app/i18n/                    ← add strings
```
