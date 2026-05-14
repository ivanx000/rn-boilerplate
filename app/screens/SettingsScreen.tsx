import { Linking, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle } from "react-native"
import * as Application from "expo-application"
import { ChevronRightIcon } from "react-native-heroicons/outline"

import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { AppInfo } from "@/config/appInfo"
import type { MainStackScreenProps } from "@/navigators/navigationTypes"
import { useAppTheme } from "@/theme/context"

export function SettingsScreen({ navigation }: MainStackScreenProps<"Settings">) {
  const { theme: { colors, spacing } } = useAppTheme()

  const appVersion = Application.nativeApplicationVersion ?? "—"
  const buildVersion = Application.nativeBuildVersion ?? "—"

  return (
    <Screen preset="scroll" safeAreaEdges={["top", "bottom"]} systemBarStyle="dark">
      <View style={[$root, { paddingHorizontal: spacing.md, paddingTop: spacing.sm }]}>
        {/* Header */}
        <View style={$headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={$backBtn} activeOpacity={0.7}>
            <Text style={[$backText, { color: colors.tint }]}>‹ Back</Text>
          </TouchableOpacity>
          <Text style={[$heading, { color: colors.text }]}>Settings</Text>
        </View>

        <View style={$section}>
          <Text style={[$sectionLabel, { color: colors.textDim }]}>ABOUT</Text>
          <View style={[$card, { backgroundColor: colors.card }]}>
            <SettingsRow
              label="App name"
              value={AppInfo.app.name}
              colors={colors}
            />
            <SettingsRow
              label="Support"
              onPress={() => Linking.openURL(`mailto:${AppInfo.app.supportEmail}`)}
              chevron
              colors={colors}
            />
            <SettingsRow label="Version" value={`${appVersion} (${buildVersion})`} colors={colors} last />
          </View>
        </View>

        <View style={$section}>
          <Text style={[$sectionLabel, { color: colors.textDim }]}>NOTES</Text>
          <View style={[$card, { backgroundColor: colors.card }]}>
            <SettingsRow
              label="What to customize"
              value="Home, settings, theme, and i18n are ready to extend."
              colors={colors}
              last
            />
          </View>
        </View>
      </View>
    </Screen>
  )
}

function SettingsRow({
  label,
  value,
  onPress,
  chevron,
  last,
  colors,
}: {
  label: string
  value?: string
  onPress?: () => void
  chevron?: boolean
  last?: boolean
  colors: ReturnType<typeof useAppTheme>["theme"]["colors"]
}) {
  const inner = (
    <View style={[$row, { borderBottomWidth: last ? 0 : StyleSheet.hairlineWidth, borderBottomColor: colors.border }]}>
      <Text style={[$rowLabel, { color: colors.text }]}>{label}</Text>
      <View style={$rowRight}>
        {value ? (
          <Text style={[$rowValue, { color: colors.textDim }]}>{value}</Text>
        ) : null}
        {chevron && onPress ? (
          <ChevronRightIcon size={16} color={colors.textDim} strokeWidth={2} />
        ) : null}
      </View>
    </View>
  )

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {inner}
      </TouchableOpacity>
    )
  }
  return inner
}

const $root: ViewStyle = {
  gap: 24,
  paddingBottom: 40,
}

const $headerRow: ViewStyle = {
  gap: 8,
}

const $backBtn: ViewStyle = {
  alignSelf: "flex-start",
}

const $backText: TextStyle = {
  fontSize: 16,
}

const $heading: TextStyle = {
  fontSize: 28,
  fontWeight: "700",
  lineHeight: 40,
}

const $section: ViewStyle = {
  gap: 8,
}

const $sectionLabel: TextStyle = {
  fontSize: 12,
  fontWeight: "600",
  letterSpacing: 0.8,
}

const $card: ViewStyle = {
  borderRadius: 16,
  overflow: "hidden",
}

const $row: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 16,
  paddingVertical: 14,
}

const $rowLabel: TextStyle = {
  fontSize: 15,
}

const $rowRight: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: 6,
}

const $rowValue: TextStyle = {
  fontSize: 14,
}

