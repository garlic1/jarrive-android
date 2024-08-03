import {
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Image,
} from "react-native";
import sendMessageIcon from "../../assets/send_message_icon.png";

const chatInputStyles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    margin: 5,
    height: 45,
  },
  textInput: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 24,
    paddingHorizontal: 15,
    height: 45,
  },
  sendButton: {
    height: 45,
    width: 45,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#76BFE0",
  },
  sendButtonImage: {
    height: 25,
    width: 25,
    marginLeft: 8,
    marginTop: 5,
  },
};

const ChatInput = ({ disabled, onSubmit, onChangeUserInput, userInput }) => {
  if (disabled) {
    return;
  }
  
  return (
    <KeyboardAvoidingView style={chatInputStyles.container}>
      <TextInput
        style={chatInputStyles.textInput}
        onChangeText={onChangeUserInput}
        placeholder="Digite seu nome aqui"
        value={userInput}
        editable={!disabled}
      />
      <Pressable
        style={chatInputStyles.sendButton}
        onPress={onSubmit}
        disabled={disabled}
      >
        <Image
          source={sendMessageIcon}
          style={chatInputStyles.sendButtonImage}
        />
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default ChatInput;
