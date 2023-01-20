// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Home } from "./components/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="orange"
        barStyle="dark-content"
        style={{ marginTop: 20 }}
      />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
