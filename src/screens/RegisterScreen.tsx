import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const RegisterScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>FPT Cinema</Text>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Đăng ký</Text>
        <View style={styles.inputRowContainer}>
          <TextInput placeholder="Họ" style={styles.inputHalf} />
          <TextInput placeholder="Tên" style={styles.inputHalf} />
        </View>
        <TextInput placeholder="Tên đăng nhập" style={styles.input} />
        <TextInput placeholder="Số điện thoại" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
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
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.buttonText}>Đăng Ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D2F64",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    width: "100%",
  },
  header: {
    color: "#2D2F64",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  inputRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  inputHalf: {
    backgroundColor: "#F0F0F0",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    width: "48%",
  },
  input: {
    backgroundColor: "#F0F0F0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
    width: "100%",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 20,
    position: "relative",
  },
  eyeIcon: {
    fontSize: 20,
    marginLeft: 10,
    color: "#2D2F64",
    position: "absolute",
    right: 10,
    top: -20,
  },
  registerButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});