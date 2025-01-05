import { Image, Pressable, SafeAreaView, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

const FirstStamp = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Você resgatou seu primeiro selo!</Text>
      </View>
      <View style={styles.infoBox}>
        <View style={styles.infoRow}>
          <Ionicons name="checkmark-circle" color="white" size={24} />
          <Text style={styles.infoText}>
            Completou as tarefas do selo Être!
          </Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/first_stamp.png")}
          style={styles.stampImage}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>
          Sua coleção de selos começou! Complete sua coleção!
        </Text>
        <Text style={styles.footerText}>
          Selos são lições rápidas para auxiliar no seu aprendizado da língua
          francesa.
        </Text>
        <Text style={styles.loginPrompt}>
          Faça o login para realizar as próximas lições!
        </Text>
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate("Log in")}
        >
          <Text style={styles.loginButtonText}>FAZER LOGIN</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  safeArea: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    gap: 50,
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 50,
  },
  titleText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    color: "#4354EF",
    width: "80%",
  },
  infoBox: {
    backgroundColor: "#4354EF",
    width: "85%",
    elevation: 4,
    borderRadius: 25,
    alignItems: "center",
  },
  infoRow: {
    flexDirection: "row",
    paddingVertical: 10,
    gap: 4,
  },
  infoText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  imageContainer: {
    flex: 1,
  },
  stampImage: {
    width: 329,
    height: 208,
  },
  footer: {
    backgroundColor: "#4354EF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    paddingHorizontal: 45,
    gap: 24,
    paddingTop: 35,
  },
  footerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFFFFF",
  },
  footerText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  loginPrompt: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#FFFFFF",
  },
  loginButton: {
    backgroundColor: "#23C86F",
    paddingVertical: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    borderRadius: 20,
    marginBottom: 10,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
};

export default FirstStamp;
