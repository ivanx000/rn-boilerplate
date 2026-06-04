import { View, ViewStyle, TextStyle } from "react-native"

import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { useAppTheme } from "@/theme/context"

export function HomeScreen() {
  const { theme: { colors } } = useAppTheme()

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} systemBarStyle="dark">
      <View style={$root}>
        <Text style={[$title, { color: colors.text }]}>Home Screen</Text>
      </View>
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}

const $title: TextStyle = {
  fontSize: 24,
  fontWeight: "600",
}
