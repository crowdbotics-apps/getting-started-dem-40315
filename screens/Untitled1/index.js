import { StyleSheet, SafeAreaView, Text } from "react-native";

const GettingStarted = () => {
  return <SafeAreaView style={styles.safeArea}><Text> This is text</Text></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#28333F"
  }
});
export default GettingStarted;