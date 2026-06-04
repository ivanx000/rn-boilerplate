import { ComponentProps } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"

export type MainTabParamList = {
  Home: undefined
  Settings: undefined
}

export type MainTabScreenProps<T extends keyof MainTabParamList> = BottomTabScreenProps<
  MainTabParamList,
  T
>

export interface NavigationProps
  extends Partial<ComponentProps<typeof NavigationContainer<MainTabParamList>>> {}
