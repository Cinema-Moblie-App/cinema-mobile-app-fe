import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>FPT Cinema</Text>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Đăng nhập</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email hoặc tên đăng nhập"
            style={styles.input}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Mật khẩu"
              secureTextEntry={!passwordVisible}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Text style={styles.eyeIcon}>
                {passwordVisible ? "👁️" : "👁️‍🗨️"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionsContainer}>
          <Text style={styles.optionText}>Quên mật khẩu</Text>
          <View style={styles.checkboxContainer}>
            <Text style={styles.optionText}>Lưu mật khẩu</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonLoginText}>Đăng Nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.buttonRegisterText}>Đăng Ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D2F64",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    width: "100%",
  },
  name: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  header: {
    color: "#2D2F64",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
    flexDirection: "column",
  },
  input: {
    backgroundColor: "#F0F0F0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
    width: "100%",
    position: "relative",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 10,
  },
  eyeIcon: {
    fontSize: 15,
    color: "#2D2F64",
    position: "absolute",
    right: 10,
    top: -15,
  },
  optionsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  optionText: {
    color: "#2D2F64",
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: "#D4F4DB",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonLoginText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonRegisterText: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
  },
});
