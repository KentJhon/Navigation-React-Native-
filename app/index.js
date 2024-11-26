import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function LoginPage() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconField}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
        ></Image>
      </View>
      <TextInput label="Email" style={styles.textInput} />
      <TextInput label="Password" style={styles.textInput} secureTextEntry />
      <TouchableOpacity onPress={() => router.push("/forgotPassword")}>
        <Text style={styles.forgetPasswordText}>Forget Password?</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          labelStyle={styles.buttonLabel}
          style={styles.loginbutton}
          onPress={() => router.replace("/homepage")}
        >
          Log In
        </Button>
        <Button
          mode="outlined"
          labelStyle={styles.buttonLabel}
          onPress={() => router.push("/register")}
        >
          Register
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  iconField: {
    marginBottom: 30,
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    backgroundColor: "white",
    marginBottom: 16,
    fontSize: 20,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
  },
  forgetPasswordText: {
    fontSize: 17,
    color: "purple",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
  },
  loginbutton: {
    marginBottom: 10,
  },

  buttonLabel: {
    fontSize: 20,
    padding: 5,
  },
});
