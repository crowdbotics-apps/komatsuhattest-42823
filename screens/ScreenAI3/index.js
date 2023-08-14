import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, SafeAreaView } from "react-native";

const LoginScreen = () => {
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
        <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
        <Button title="Login" onPress={handleLogin} style={styles.loginButton} />
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
    maxWidth: 400
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  loginButton: {
    marginTop: 10
  }
});
export default LoginScreen;