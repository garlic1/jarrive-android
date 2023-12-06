import { StatusBar } from "expo-status-bar";
import {
  Text,
  Pressable,
  TextInput,
  View,
  Image,
  ImageBackground,
} from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import CustomText from "../../components/CustomText";
import EmailPassword from "./EmailPassword";
import PasswordOptions from "./PasswordOptions";
import SsoLogin from "./SsoLogin";

const LogInScreen = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    rememberPassword: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const logo = require("../../assets/jarrive_logo.png");
  const googleLogo = require("../../assets/google_logo.png");
  const backgroundImage = require("../../assets/login_background.jpg");

  // Change handlers
  const onChangeEmail = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  const onChangePassword = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };
  const onChangeCheckbox = (e) => {
    setUserInfo({ ...userInfo, rememberPassword: !userInfo.rememberPassword });
  };

  // Submit handlers
  const onPressRecoverPassword = () => {
    /** */
  };
  const onPressLogin = () => {
    /** */
  };
  const onPressRegister = () => {
    /** */
  };
  const onPressSsoButton = () => {
    /** */
  };

  return (
    <>
      <StatusBar style="auto" />
      <ImageBackground source={backgroundImage} style={styles.container}>
        <ImageBackground
          source={backgroundImage}
          style={styles.background}
          resizeMode="cover"
        />
        <Image source={logo} style={styles.logoImage} resizeMode="contain" />
        <View style={styles.loginContainer}>
          <CustomText style={styles.title}>Entre na sua conta</CustomText>
          <View>
            <EmailPassword
              email={userInfo.email}
              password={userInfo.password}
              onChangeEmail={onChangeEmail}
              onChangePassword={onChangePassword}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <PasswordOptions
              rememberPassword={userInfo.rememberPassword}
              onChangeCheckbox={onChangeCheckbox}
              onPressRecoverPassword={onPressRecoverPassword}
            />
            <Pressable onPress={onPressLogin} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Entrar</Text>
            </Pressable>
          </View>
          <View style={styles.registerContainer}>
            <Text style={styles.registerLabel}>Não tem conta? </Text>
            <Pressable onPress={onPressRegister}>
              <Text style={styles.registerLabel.underlined}>
                Cadastre-se aqui.
              </Text>
            </Pressable>
          </View>
          <SsoLogin
            googleLogo={googleLogo}
            onPressSsoButton={onPressSsoButton}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default LogInScreen;
