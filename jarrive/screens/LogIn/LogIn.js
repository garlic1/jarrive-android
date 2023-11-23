import { StatusBar } from "expo-status-bar";
import { Text, Pressable, TextInput, View, Image } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import CustomText from "../../components/CustomText";

const LogInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const logo = require("../../assets/jarrive_logo.png");
  const googleLogo = require("../../assets/google_logo.png");

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Image
          source={logo}
          style={{
            marginTop: 70,
            marginBottom: 50,
            width: 170,
          }}
          resizeMode="contain"
        />
        <View style={styles.loginContainer}>
          <View>
            <CustomText>
              <Text style={styles.description}>Entre na sua conta</Text>
            </CustomText>
            <TextInput
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={styles.input}
              placeholder="E-mail"
            />
            <View style={styles.passwordArea}>
              <TextInput
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                style={styles.passwordInput}
                placeholder="Senha"
                secureTextEntry={!showPassword}
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <Ionicons name="eye-off-outline" color="#000" size={25} />
                ) : (
                  <Ionicons name="eye-outline" color="#000" size={25} />
                )}
              </Pressable>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text>Lembrar senha</Text>
              <Text>Recuperar senha</Text>
            </View>
            <Pressable style={styles.button}>
              <Text style={{ color: "white" }}>Entrar</Text>
            </Pressable>
          </View>
          <View style={styles.otherLoginOptions}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
              <View>
                <Text
                  style={{ width: 50, textAlign: "center", color: "white" }}
                >
                  OU
                </Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
            </View>
            <Pressable style={styles.ssoButton}>
              <Image source={googleLogo} />
              <Text style={{ color: "#4354EF", fontWeight: "bold" }}>
                Entre com Google
              </Text>
            </Pressable>
            <Text style={{ marginTop: 20, color: "white" }}>
              Não tem conta?{" "}
              <Text style={{ textDecorationLine: "underline" }}>
                Cadastre-se aqui.
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default LogInScreen;
