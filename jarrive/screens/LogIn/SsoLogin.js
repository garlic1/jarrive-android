import { Text, Pressable, View, Image } from "react-native";
import React from "react";
import { styles } from "./styles";

const SsoLogin = ({ googleLogo, onPressSsoButton }) => {
  return (
    <View style={styles.otherLoginOptions}>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <View>
          <Text style={styles.dividerLabel}>Ou entre com</Text>
        </View>
        <View style={styles.divider} />
      </View>
      <Pressable onPress={onPressSsoButton} style={styles.ssoButton}>
        <Image source={googleLogo} />
      </Pressable>
      <Text style={styles.ssoLabel}>Google</Text>
    </View>
  );
};

export default SsoLogin;
