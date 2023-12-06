import { Text, Pressable, View } from "react-native";
import Checkbox from "expo-checkbox";
import React from "react";
import { styles } from "./styles";

const PasswordOptions = ({
  rememberPassword,
  onChangeCheckbox,
  onPressRecoverPassword,
}) => {
  return (
    <View style={styles.passwordOptionsContainer}>
      <View style={styles.rememberPasswordContainer}>
        <Checkbox
          color={rememberPassword ? "#4354EF" : "white"}
          value={rememberPassword}
          onValueChange={onChangeCheckbox}
          style={styles.rememberPasswordCheckbox}
        />
        <Text style={styles.rememberPasswordLabel}>Lembrar senha</Text>
      </View>
      <Pressable onPress={onPressRecoverPassword}>
        <Text style={styles.recoverPasswordLabel}>Recuperar senha</Text>
      </Pressable>
    </View>
  );
};

export default PasswordOptions;
