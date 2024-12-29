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
        style={{ height: "100%", width: "100%", alignItems: "center" }}
        resizeMode="cover"
      >
        <Image
          style={{
            marginTop: 50,
            width: 250,
            height: 200,
          }}
          source={require("../../assets/jarrive_logo.png")}
          resizeMode="contain"
        />
        <View
          style={{
            width: 300,
            borderRadius: 10,
            paddingVertical: 32,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              color: "#4354EF",
              marginBottom: 32,
            }}
          >
            Primeira vez aqui?
          </Text>
          <Pressable
            style={{
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              marginBottom: 10,
              borderRadius: 50,
              padding: 15,
              width: "85%",
              elevation: 4,
            }}
            onPress={() => navigation.navigate("Chat")}
          >
            <Text style={{ color: "#4354EF", fontWeight: "bold" }}>
              Sim, quero começar a aventura!
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#4354EF",
              alignItems: "center",
              marginBottom: 10,
              borderRadius: 50,
              padding: 15,
              width: "85%",
              elevation: 4,
            }}
            onPress={() => navigation.navigate("Log in")}
          >
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
              Não, estou voltando!
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </>
  );
};

export default StartScreen;
