import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { Appbar } from "react-native-paper";

const App = () => {
  const { appTitle } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBarBg}>
        <Appbar.Content
          title={<Text style={styles.appBarContent}>{appTitle}</Text>}
        />
      </Appbar.Header>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quam
        explicabo, quae hic itaque impedit voluptas ex quia, minima provident,
        modi nemo obcaecati sapiente! Qui soluta vero rem ut illum.
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    fles: 1,
    backgroundColor: "#fff",
  },
  appBarBg: {
    backgroundColor: "#69388C",
  },
  appBarContent: {
    fontWeight: "bold",
  },
});
