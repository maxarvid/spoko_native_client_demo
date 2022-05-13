import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Appbar } from "react-native-paper";
import Articles from "./components/modules/articles";

const App = () => {
  const { appTitle, articles } = useSelector((state) => state);

  useEffect(() => {
    Articles.index();
  }, []);

  let categories;

  if (articles) {
    categories = Object.keys(articles).map((category) => {
      return <Text keys={category}>{category}</Text>;
    });
  }

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBarBg}>
        <Appbar.Content
          title={<Text style={styles.appBarContent}>{appTitle}</Text>}
        />
      </Appbar.Header>
      {articles && <Text>We have articles for {categories} categories</Text>}
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
