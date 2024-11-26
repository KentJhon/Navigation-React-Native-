import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

const ProfilePage = () => {
  const openURL = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const profilePicURL = require("../../../assets/profilepic.jpg");
  const backgroundPicURL = require("../../../assets/backgroundpic.png");

  return (
    <View style={styles.container}>
      <Image source={backgroundPicURL} style={styles.backgroundImage} />

      <View style={styles.profilePicContainer}>
        <Image source={profilePicURL} style={styles.profilePic} />
      </View>

      <View style={styles.profileInfoContainer}>
        <Text style={styles.nameText}>Kent Jhon M. Dumapias</Text>
        <Text style={styles.idText}>BSIT-3R10</Text>
      </View>

      <View style={styles.aboutMeContainer}>
        <Text style={styles.aboutMeTitle}>About Me</Text>
        <Text style={styles.aboutMeText}>
          Hello! I am an aspiring software engineer from the University of
          Science and Technology of Southern Philippines. I love watching anime,
          listening to music, playing guitar, reading manga, and playing games!
          I also draw and sometimes code when I have time. I aspire to create
          apps that are innovative and can solve real-life problems.
        </Text>
      </View>

      <View style={styles.socialMediaContainer}>
        <TouchableOpacity
          onPress={() => openURL("https://www.instagram.com/kent.35p/")}
        >
          <Entypo
            name="instagram-with-circle"
            size={40}
            color="#000"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openURL("https://www.facebook.com/kentjhon.dumapias")}
        >
          <Entypo
            name="facebook-with-circle"
            size={40}
            color="#000"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openURL("https://github.com/KentJhon")}
        >
          <AntDesign name="github" size={40} color="#000" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    resizeMode: "cover",
  },
  profilePicContainer: {
    marginTop: 150,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  profileInfoContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  nameText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  idText: {
    fontSize: 18,
    color: "gray",
  },
  aboutMeContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  aboutMeTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  aboutMeText: {
    fontSize: 16,
    marginTop: 10,
  },
  socialMediaContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
  },
  icon: {
    marginHorizontal: 15,
  },
});

export default ProfilePage;
