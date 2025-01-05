import { Image, Pressable, Text, View } from "react-native";
import tresBien from "../../assets/tres_bien.png";

export const EndScreen = ({ setShowListenPhrases, setShowEndScreen }) => (
  <View style={endscreenStyles.container}>
    <View style={endscreenStyles.content}>
      <Image source={tresBien} style={endscreenStyles.image} />
      <Text style={endscreenStyles.title}>On écoute les phrases!</Text>
    </View>
    <Pressable
      style={endscreenStyles.button}
      onPress={() => {
        setShowListenPhrases(true);
        setShowEndScreen(false);
      }}
    >
      <Text style={endscreenStyles.buttonText}>CONTINUAR</Text>
    </Pressable>
  </View>
);

const endscreenStyles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#141B23",
    zIndex: 1000,
    position: "absolute",
    top: 0,
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: "40%",
    paddingBottom: 10,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  image: {
    width: 250,
    height: 320,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  button: {
    backgroundColor: "#23C86F",
    paddingVertical: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 25,
    width: "85%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
};
