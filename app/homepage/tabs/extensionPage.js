import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const ExtensionPage = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for extension"
        placeholderTextColor="gray"
      />
      <Text style={styles.installedText}>Installed</Text>

      <View style={styles.extensionContainer}>
        <Entypo name="bug" size={24} color="black" style={styles.logo} />
        <Text style={styles.extensionText}>Bato.to</Text>
        <TouchableOpacity style={styles.settingsIcon}>
          <MaterialIcons name="settings" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.extensionContainer}>
        <FontAwesome
          name="firefox"
          size={24}
          color="black"
          style={styles.logo}
        />
        <Text style={styles.extensionText}>MangaDex</Text>
        <TouchableOpacity style={styles.settingsIcon}>
          <MaterialIcons name="settings" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
  },
  installedText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  logo: {
    marginRight: 10,
  },
  extensionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  icon: {
    marginRight: 10,
  },
  extensionText: {
    flex: 1,
    fontSize: 16,
  },
  settingsIcon: {
    padding: 5,
  },
});

export default ExtensionPage;
