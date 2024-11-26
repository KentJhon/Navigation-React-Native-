import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { TextInput, Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function ResetPasswordPage() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconField}>
        <FontAwesome5 name="lock" size={100} color="black" />
      </View>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput label="Email" style={styles.textInput} />
      <View style={styles.buttonContainer}>
        <Button mode="contained" labelStyle={styles.buttonLabel}>
          Send Recovery Email
        </Button>
      </View>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={styles.loginText}>Remembered your password? Log In</Text>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
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
