import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomDrawer from "./src/components/BottomDrawer";

export default function App() {
  const [isOpen, setOpen] = useState(true);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <BottomDrawer isOpen={isOpen} onClose={() => setOpen(false)}>
          <View>
            <Text style={{ color: "#fff" }}>
              Open up App.tsx to start working on your app!
            </Text>
          </View>
        </BottomDrawer>
        <Button title="Open" onPress={() => setOpen(true)} />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 80,
    alignItems: "center",
    // justifyContent: "center",
  },
});
