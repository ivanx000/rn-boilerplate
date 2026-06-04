# rn-boilerplate

A general-purpose React Native starter built with Expo. Designed to be cloned and customized — not a framework, just a clean foundation.

## Tech Stack

- **Expo** ~55 with expo-dev-client
- **React Native** 0.83 / **React** 19
- **TypeScript** ~5.9
- **Navigation** — React Navigation v7, bottom tabs
- **Theming** — custom ThemeProvider with light/dark support
- **i18n** — i18next + react-i18next, 7 languages bootstrapped
- **Storage** — react-native-mmkv
- **API** — apisauce with typed error handling
- **Testing** — Jest + @testing-library/react-native
- **Dev tools** — Reactotron

## Commands

```bash
npm start                   # start Expo dev server (requires dev client)
npm run ios                 # run on iOS simulator
npm run android             # run on Android emulator
npm run compile             # TypeScript type check
npm run lint                # lint and auto-fix
npm test                    # run Jest tests
npm run test:watch          # Jest in watch mode
npm run prebuild:clean      # clean native prebuild
npm run build:ios:sim       # EAS local build for iOS simulator
npm run build:android:sim   # EAS local build for Android emulator
```

## Project Structure

```
app/
├── app.tsx                 # root component, providers
├── components/             # generic UI components (Button, Text, Screen, etc.)
├── config/                 # env config (dev/prod), appInfo
├── context/                # React context providers (add yours here)
├── data/                   # static data or seed files (add yours here)
├── devtools/               # Reactotron setup
├── hooks/                  # shared hooks
├── i18n/                   # translations (en, es, ar, fr, hi, ja, ko)
├── models/                 # domain types (empty — define yours here)
├── navigators/             # navigation setup
├── screens/                # HomeScreen, SettingsScreen, ErrorScreen
├── services/api/           # API client and error handling
├── theme/                  # colors, spacing, typography, dark mode
└── utils/                  # storage, crash reporting, date helpers, etc.
```

## Customising for a New App

1. **Rename the app** — update `app.json` (name, slug, scheme, package/bundleIdentifier) and `app/config/appInfo.ts`
2. **Define your domain** — add types to `app/models/types.ts`
3. **Add screens** — create files in `app/screens/`, register them in `app/navigators/MainNavigator.tsx`
4. **Adjust the theme** — edit `app/theme/colors.ts` (palette + semantic tokens) and `app/theme/colorsDark.ts`
5. **Add translations** — extend the JSON files in `app/i18n/`
6. **Wire up your API** — configure `API_BASE_URL` in `app/config/config.dev.ts` and `config.prod.ts`

## Conventions

- **No default exports** — all exports are named
- **Styles at the bottom** of each file as `const $name: ViewStyle | TextStyle`
- **Theme values via hook** — use `useAppTheme()` to access `colors`, `spacing`, `typography`
- **Path alias** — `@/` maps to `app/` (configured in `tsconfig.json` and `babel.config.js`)
- **Translations** — prefer `tx="key"` prop over hardcoded strings in components
