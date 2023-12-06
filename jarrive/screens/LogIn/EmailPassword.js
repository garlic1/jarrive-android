import { Pressable, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

const EmailPassword = ({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  showPassword,
  setShowPassword,
}) => {
  return (
    <View>
      <TextInput
        value={email}
        onChange={onChangeEmail}
        style={styles.input}
        placeholder="E-mail"
      />
      <View style={styles.passwordArea}>
        <TextInput
          value={password}
          onChange={onChangePassword}
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
    </View>
  );
};

export default EmailPassword;
