import {
  FlatList,
  SafeAreaView,
  View
} from "react-native";
import ChatMessage from "./ChatMessage";

const ChatBody = ({ messages, setUserChoice, getCurrentMessage }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1
      }}
    >
      <FlatList
        data={Object.keys(messages).reverse()}
        inverted
        renderItem={({ item }) => {
          return (
            <View style={{ marginVertical: 8 }}>
              <ChatMessage
                message={messages[item]}
                setUserChoice={setUserChoice}
                getCurrentMessage={getCurrentMessage}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item}
      />
    </SafeAreaView>
  );
};

export default ChatBody;
