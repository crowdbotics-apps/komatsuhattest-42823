import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, SafeAreaView, Image, Text, TouchableOpacity } from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter username and password");
    } else {
      // Perform login logic here
      console.log("Logged in successfully");
    }
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.logo} />
        <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
        <Button title="Login" onPress={handleLogin} style={styles.loginButton} />
        <TouchableOpacity onPress={() => {
        navigation.navigate("ScreenAI3");
      }}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  inputContainer: {
    width: "80%",
    maxWidth: 400,
    alignItems: "center",
    marginTop: 10
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10
  },
  loginButton: {
    marginTop: 10
  },
  forgotPassword: {
    marginTop: 10,
    color: "blue"
  }
});
export default LoginScreen;