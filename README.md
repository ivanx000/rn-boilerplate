# React Native Boilerplate

A modern React Native starter template built with Expo, TypeScript, and best practices. It gives you a clean app shell, theme system, i18n support, state management setup, and EAS build configuration.

## What's Included

This boilerplate comes with:
- Generic starter screens for Home, Settings, and Error
- Reusable UI component library
- Light and dark theme system with custom colors and typography
- Multi-language i18n setup (EN, ES, FR, AR, HI, JA, KO)
- State management with Zustand and MMKV persistent storage
- Navigation setup with React Navigation (bottom-tabs)
- Environment variable setup with `.env.example`
- Pre-commit linting via Husky + lint-staged
- Local CI pipeline (typecheck, lint, test)
- Dev and production configuration management
- Debugging and testing infrastructure
- EAS build profiles for iOS and Android

## Tech Stack

| Category | Libraries |
|---|---|
| Framework | React Native 0.83.4, Expo 55, TypeScript 5.9 |
| Navigation | React Navigation 7 (native-stack, bottom-tabs) |
| State | Zustand + MMKV persistent storage |
| UI | react-native-reanimated, react-native-gesture-handler, react-native-heroicons |
| Fonts | Space Grotesk via `@expo-google-fonts/space-grotesk` |
| Networking | apisauce |
| i18n | i18next + react-i18next (EN, ES, FR, AR, HI, JA, KO) |
| Debugging | Reactotron + MMKV plugin |
| Testing | Jest, Maestro (E2E) |
| Build | EAS (Expo Application Services) |
| Git hooks | Husky + lint-staged |
| CI | pipeline.yaml (local runner) |

**JS Engine:** Hermes — **New Architecture:** Enabled

## Project Structure

```
app/
├── screens/          # Starter screens (Home, Settings, Error)
├── stores/           # Zustand stores (useAppStore as example)
├── context/          # React context providers (add yours here)
├── navigators/       # Navigation setup (App, Main navigators + types)
├── components/       # Reusable UI component library
├── theme/            # Colors, typography, spacing, dark/light theme system
├── hooks/            # Shared hooks for common patterns
├── models/           # TypeScript type definitions (define yours here)
├── services/api/     # apisauce API client + error handling
├── utils/            # Storage (MMKV wrapper), helpers, formatters
├── i18n/             # Translation files per language
├── config/           # Dev/prod configuration + base setup
└── devtools/         # Reactotron config
assets/
├── icons/
└── images/
docs/
└── architecture.md   # folder structure, theme, navigation, i18n patterns
```

## Included Screens

| Screen | Description |
|---|---|
| **Home** | Main entry point — customize with your app's primary content |
| **Settings** | Settings and user preferences — a generic place for support, version, and app options |
| **Error** | Error boundary screen — handles crashes gracefully |

## State Management

Global state uses [Zustand](https://github.com/pmndrs/zustand). `app/stores/useAppStore.ts` is a minimal example store — replace or extend it for your domain. For larger apps, split into focused stores (e.g. `useAuthStore`, `useSettingsStore`).

MMKV (`app/utils/storage/`) handles persistent local storage separately.

## Getting Started

```bash
npm install
cp .env.example .env   # set API_BASE_URL and any other vars
npm run start
```

The app uses a custom dev client. Build it first before running on a device or simulator:

```bash
# iOS
npm run build:ios:sim      # simulator
npm run build:ios:device   # physical device
npm run build:ios:preview  # TestFlight
npm run build:ios:prod     # App Store

# Android
npm run build:android:sim      # emulator
npm run build:android:device   # physical device
npm run build:android:preview  # Google Play internal track
npm run build:android:prod     # Play Store
```

**Prerequisites:** Node.js >= 20, Xcode (iOS), Android Studio (Android), EAS CLI (`npm i -g eas-cli`)

## Other Scripts

```bash
npm run compile         # TypeScript type check
npm run lint            # ESLint (auto-fix)
npm run lint:check      # ESLint (check only)
npm run test            # Jest unit tests
npm run test:watch      # Jest in watch mode
npm run test:maestro    # Maestro E2E tests
npm run depcruise:graph # Generate dependency graph SVG
npm run adb             # Android reverse port forwarding (dev)
pipeline                # Run full CI locally (typecheck → lint → test)
```

## Theme System

The boilerplate includes a custom theme system supporting light and dark modes, toggled automatically from system preference. Colors, spacing, typography, and timing values are centralized in `app/theme/` and provided via React Context for consumption across all screens and components.

Customize colors, fonts, and spacing in the theme files to match your brand.

## Configuration

| File | Purpose |
|---|---|
| `app/config/config.base.ts` | Base config (nav persistence, error catching, exit routes) |
| `app/config/appInfo.ts` | App name and support email placeholders |
| `app/config/config.dev.ts` | Dev API base URL and settings |
| `app/config/config.prod.ts` | Production API base URL and settings |
| `app.json` | Expo app config (name, bundle IDs, icons, plugins) |
| `app.config.ts` | Dynamic Expo config (iOS privacy manifests) |
| `eas.json` | EAS build profiles |
| `tsconfig.json` | TypeScript strict mode, path aliases (`@/*`, `@assets/*`) |

**App identifiers:** Customize in `app.json` (iOS bundle ID, Android package name, deep link scheme)
