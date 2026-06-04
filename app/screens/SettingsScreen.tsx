import { View, ViewStyle, TextStyle, StyleSheet } from "react-native"
import * as Application from "expo-application"

import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { useAppTheme } from "@/theme/context"

export function SettingsScreen() {
  const { theme: { colors } } = useAppTheme()

  const appVersion = Application.nativeApplicationVersion ?? "—"
  const buildVersion = Application.nativeBuildVersion ?? "—"

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} systemBarStyle="dark">
      <View style={$root}>
        <Text style={[$heading, { color: colors.text }]}>Settings</Text>

        <View style={[$section, { borderColor: colors.border }]}>
          <Row label="Version" value={`${appVersion} (${buildVersion})`} colors={colors} last />
        </View>
      </View>
    </Screen>
  )
}

function Row({
  label,
  value,
  last,
  colors,
}: {
  label: string
  value?: string
  last?: boolean
  colors: ReturnType<typeof useAppTheme>["theme"]["colors"]
}) {
  return (
    <View
      style={[
        $row,
        { borderBottomWidth: last ? 0 : StyleSheet.hairlineWidth, borderBottomColor: colors.border },
      ]}
    >
      <Text style={[$rowLabel, { color: colors.text }]}>{label}</Text>
      {value ? <Text style={[$rowValue, { color: colors.textDim }]}>{value}</Text> : null}
    </View>
  )
}

const $root: ViewStyle = {
  paddingHorizontal: 20,
  paddingTop: 24,
  gap: 24,
}

const $heading: TextStyle = {
  fontSize: 28,
  fontWeight: "700",
}

const $section: ViewStyle = {
  borderRadius: 12,
  borderWidth: StyleSheet.hairlineWidth,
  overflow: "hidden",
}

const $row: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 16,
  paddingVertical: 14,
}

const $rowLabel: TextStyle = {
  fontSize: 15,
}

const $rowValue: TextStyle = {
  fontSize: 14,
}
