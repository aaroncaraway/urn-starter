import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Angie" },
    { name: "Dwight" },
    { name: "Kevin" },
    { name: "Phyllis" },
    { name: "Stanley" },
  ];
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
