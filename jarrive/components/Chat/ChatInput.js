import {
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Image,
} from "react-native";
import sendMessageIcon from "../../assets/send_message_icon.png";

const ChatInput = ({
  disabled, 
  onSubmit,
  onChangeName
}) => {
  return (
    <KeyboardAvoidingView
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        margin: 5,
        height: 45,
      }}
    >
      <TextInput
        style={{
          backgroundColor: "white",
          flex: 1,
          borderRadius: 24,
          boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.25)",
          paddingHorizontal: 15,
          height: 45,
        }}
        onChangeText={onChangeName}
        placeholder="Digite seu nome aqui"
      />
      <Pressable
        style={{
          height: 45,
          width: 45,
          borderRadius: 100,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#76BFE0",
          filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25))",
        }}
        onPress={onSubmit}
      >
        <Image
          source={sendMessageIcon}
          style={{ height: 25, width: 25, marginLeft: 8, marginTop: 5 }}
        />
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default ChatInput;
