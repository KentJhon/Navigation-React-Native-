import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.libraryHeader}>
        <Text style={styles.libraryText}>Library</Text>
        <TouchableOpacity style={styles.searchIcon}>
          <MaterialIcons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.emptyLibraryContainer}>
        <Text style={styles.emptyLibraryText}>
          Your library is empty, Browse in the extension to add.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  libraryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  libraryText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  searchIcon: {
    padding: 5,
  },
  emptyLibraryContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyLibraryText: {
    fontSize: 18,
    textAlign: "center",
    color: "gray",
  },
});

export default HomePage;
