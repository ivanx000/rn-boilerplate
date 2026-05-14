import { TouchableOpacity, View, ViewStyle, TextStyle } from "react-native"
import { Cog6ToothIcon } from "react-native-heroicons/outline"

import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { AppInfo } from "@/config/appInfo"
import type { MainStackScreenProps } from "@/navigators/navigationTypes"
import { useAppTheme } from "@/theme/context"

export function HomeScreen({ navigation }: MainStackScreenProps<"Home">) {
  const { theme: { colors, spacing } } = useAppTheme()

  return (
    <Screen preset="fixed" safeAreaEdges={["top", "bottom"]} systemBarStyle="dark">
      <View style={[$root, { paddingHorizontal: spacing.md, paddingTop: spacing.sm }]}>
        {/* Header */}
        <View style={$header}>
          <Text style={[$title, { color: colors.text }]}>{AppInfo.app.name}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings")}
            activeOpacity={0.7}
            hitSlop={8}
          >
            <Cog6ToothIcon size={24} color={colors.textDim} strokeWidth={1.8} />
          </TouchableOpacity>
        </View>

        <View style={[$hero, { backgroundColor: colors.card, borderColor: colors.border }]}> 
          <Text style={[$heroTitle, { color: colors.text }]}>A clean starting point for your app.</Text>
          <Text style={[$heroBody, { color: colors.textDim }]}>Replace this screen with your main experience and keep the rest of the starter only if you need it.</Text>
        </View>
      </View>
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
  gap: 20,
}

const $header: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingVertical: 8,
}

const $title: TextStyle = {
  fontSize: 28,
  fontWeight: "700",
  lineHeight: 36,
}

const $hero: ViewStyle = {
  flex: 1,
  borderRadius: 16,
  borderWidth: 1,
  padding: 20,
  justifyContent: "center",
  gap: 12,
}

const $heroTitle: TextStyle = {
  fontSize: 24,
  lineHeight: 32,
  fontWeight: "700",
}

const $heroBody: TextStyle = {
  fontSize: 16,
  lineHeight: 24,
}
