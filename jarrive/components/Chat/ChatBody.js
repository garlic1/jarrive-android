import { FlatList, SafeAreaView, View } from "react-native";
import ChatMessage from "./ChatMessage";
import { CopilotStep, useCopilot } from "react-native-copilot";

const CustomWalkthroughableComponent = ({
  copilot,
  messages,
  getCurrentMessage,
  item,
}) => {
  return (
    <View style={{ marginVertical: 8 }} {...copilot}>
      <ChatMessage
        message={messages[item]}
        getCurrentMessage={getCurrentMessage}
      />
    </View>
  );
};

const ChatBody = ({ messages, getCurrentMessage }) => {
  const { start } = useCopilot();

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      onLayout={() => setTimeout(() => start(),2000)}
    >
      <FlatList
        data={Object.keys(messages).reverse()}
        inverted
        renderItem={({ item }) => {
          if (messages[item].name === "salut" && messages.length < 3) {
            return (
              <CopilotStep
                text="Palavras sublinhadas indicam novas palavras! Pressione para aparecer a tradução."
                order={1}
                name="salut"
              >
                <CustomWalkthroughableComponent
                  messages={messages}
                  getCurrentMessage={getCurrentMessage}
                  item={item}
                />
              </CopilotStep>
            );
          } else
            return (
              <View style={{ marginVertical: 8 }}>
                <ChatMessage
                  message={messages[item]}
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
