import { Text, ImageBackground } from "react-native";
import Chat from "../../components/Chat/Chat";
import backgroundChat from "../../assets/background_chat.png";

const ChatScreen = () => {
  return (
    <ImageBackground
      source={backgroundChat}
      style={{
        backgroundColor: "#2C327E",
        flex: 1,
        height: "100%",
        width: "100%",
      }}
      resizeMode="cover"
    >
      <Chat />
    </ImageBackground>
  );
};

export default ChatScreen;
