const palette = {
  // Warm Paper palette (V1)
  warmBg:           '#FAF9F6',
  warmSurface:      '#FFFFFF',
  warmSurfaceAlt:   '#F4F2ED',
  warmBorder:       '#E5E0D5',
  warmBorderSub:    '#EDE9E2',
  warmText:         '#1A1714',
  warmTextDim:      '#8A7F72',
  warmTextFaint:    '#A8A09A',
  warmAccent:       '#0A7A40',
  warmAccentBg:     '#E6F4EC',
  warmAccentBorder: '#B0D4BF',
  warmDanger:       '#C0392B',
  warmDangerBg:     '#FDF1F0',

  // Accent colors
  accent1: "#00C9A7",
  accent2: "#8B5CF6",
  accent3: "#FF6B6B",
  accent4: "#FF9F43",
  accent5: "#4ECDC4",
  accent6: "#6BCB77",
  accent7: "#FF85A1",
  accent8: "#FFD93D",

  // Legacy keys kept for built-in components
  secondary500: "#41476E",
  accent100:    "#F4F2ED",

  angry100: "#FDF1F0",
  angry500: "#C0392B",

  overlay20: "rgba(0, 0, 0, 0.2)",
  overlay50: "rgba(0, 0, 0, 0.5)",
} as const

export const ACCENT_COLORS = [
  palette.accent1,
  palette.accent2,
  palette.accent3,
  palette.accent4,
  palette.accent5,
  palette.accent6,
  palette.accent7,
  palette.accent8,
] as const

export type AccentColor = (typeof ACCENT_COLORS)[number]

export const colors = {
  palette,
  transparent: "rgba(0, 0, 0, 0)",
  text:           palette.warmText,
  textDim:        palette.warmTextDim,
  background:     palette.warmBg,
  card:           palette.warmSurface,
  cardElevated:   palette.warmSurfaceAlt,
  border:         palette.warmBorder,
  tint:           palette.warmAccent,
  tintInactive:   palette.warmTextFaint,
  separator:      palette.warmBorderSub,
  accentBg:       palette.warmAccentBg,
  accentBorder:   palette.warmAccentBorder,
  error:          palette.warmDanger,
  errorBackground:palette.warmDangerBg,
} as const
