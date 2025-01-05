import {
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  Text,
  SafeAreaView,
  View,
} from "react-native";

const StartScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../assets/start_screen.png")}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <Image
          style={styles.logo}
          source={require("../../assets/jarrive_logo.png")}
          resizeMode="contain"
        />
        <View style={styles.container}>
          <Text style={styles.headingText}>Primeira vez aqui?</Text>
          <Pressable
            style={[styles.button, styles.buttonPrimary]}
            onPress={() => navigation.navigate("Chat")}
          >
            <Text style={styles.buttonTextPrimary}>
              Sim, quero começar a aventura!
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonSecondary]}
            onPress={() => navigation.navigate("Log in")}
          >
            <Text style={styles.buttonTextSecondary}>Não, estou voltando!</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = {
  imageBackground: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  logo: {
    marginTop: 50,
    width: 250,
    height: 200,
  },
  container: {
    width: 300,
    borderRadius: 10,
    paddingVertical: 32,
    alignItems: "center",
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#4354EF",
    marginBottom: 32,
  },
  button: {
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 50,
    padding: 15,
    width: "85%",
    elevation: 4,
  },
  buttonPrimary: {
    backgroundColor: "#FFFFFF",
  },
  buttonSecondary: {
    backgroundColor: "#4354EF",
  },
  buttonTextPrimary: {
    color: "#4354EF",
    fontWeight: "bold",
  },
  buttonTextSecondary: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
};

export default StartScreen;
