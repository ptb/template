import type { FC } from "react"
import { StyleSheet, Text, View } from "react-native"

import type { LayoutProps } from "@/types/layout"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    textAlign: "center"
  }
})

export const MainScreen: FC<LayoutProps> = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello</Text>
  </View>
)
