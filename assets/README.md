# Assets Directory

This directory contains static assets for your React Native application.

## Structure

### `icons/`
Generic UI icons in multiple densities (@1x, @2x, @3x for retina displays). These are commonly used icons for navigation, actions, and UI elements.

Add your app-specific icons here following the same naming and density convention.

### `images/`
Images used throughout the app (app icons, logos, illustrations, etc.).

Add your app-specific images here as needed.

## Guidelines

- **Icon Naming**: Use camelCase for icon names (e.g., `menuItem.png`, `menuItem@2x.png`)
- **Image Naming**: Use descriptive names for images (e.g., `appIcon.png`, `welcomeIllustration.png`)
- **Densities**: Provide assets in multiple densities for mobile apps:
  - `@1x` - Standard density
  - `@2x` - Retina/High density
  - `@3x` - Extra high density
- **Formats**: Use PNG format for lossless quality on icons and UI elements; use JPEG for photos

## App Icons & Branding

For app icons and branded assets, refer to your platform-specific guidelines:
- **iOS**: See `ios/` directory for app icon configuration
- **Android**: See `android/` directory for app icon configuration
- **Web**: Consider adding a favicon and web app icons
