import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconField}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
        ></Image>
      </View>
      <TextInput label="Username" style={styles.textInput} />
      <TextInput label="Email" style={styles.textInput} />
      <TextInput label="Password" style={styles.textInput} secureTextEntry />
      <TextInput
        label="Confirm Password"
        style={styles.textInput}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          labelStyle={styles.buttonLabel}
          onPress={() => router.replace("/homepage")}
        >
          Register
        </Button>
      </View>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={styles.loginText}>Already have an account? Log In</Text>
      </TouchableOpacity>
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
  iconField: {
    marginBottom: 30,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
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
  buttonContainer: {
    width: "100%",
    marginBottom: 20,
  },
  buttonLabel: {
    fontSize: 20,
    padding: 5,
  },
  loginText: {
    fontSize: 17,
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 10,
  },
});
