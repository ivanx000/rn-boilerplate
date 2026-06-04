const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F5F5F5",
  neutral300: "#E0E0E0",
  neutral400: "#9E9E9E",
  neutral500: "#616161",
  neutral600: "#424242",
  neutral700: "#2C2C2C",
  neutral800: "#1E1E1E",
  neutral900: "#121212",

  accent1: "#00C9A7",
  accent2: "#8B5CF6",
  accent3: "#FF6B6B",
  accent4: "#FF9F43",
  accent5: "#4ECDC4",
  accent6: "#6BCB77",
  accent7: "#FF85A1",
  accent8: "#FFD93D",

  secondary500: "#41476E",
  accent100: "#2C2C2C",

  darkAccentBg:     "#1B2E23",
  darkAccentBorder: "#2E5040",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(0, 0, 0, 0.2)",
  overlay50: "rgba(0, 0, 0, 0.5)",
} as const

export const colors = {
  palette,
  transparent: "rgba(0, 0, 0, 0)",
  text: palette.neutral100,
  textDim: palette.neutral400,
  background: palette.neutral900,
  card: palette.neutral800,
  cardElevated: palette.neutral700,
  border: palette.neutral700,
  tint: palette.accent1,
  tintInactive: palette.neutral600,
  separator: palette.neutral700,
  error: palette.angry500,
  errorBackground: palette.angry100,
  accentBg:       palette.darkAccentBg,
  accentBorder:   palette.darkAccentBorder,
} as const
