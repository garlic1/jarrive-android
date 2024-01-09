import { Pressable, Text, View } from "react-native";

const stylesMessage = {
  sentMessageContainer: {
    backgroundColor: "white",
    marginLeft: "auto",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25))",
    maxWidth: "70%",
  },
  receivedMessageContainer: {
    backgroundColor: "white",
    marginRight: "auto",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25))",
    maxWidth: "70%",
  },
  textStyle: {
    color: "#2C327E",
    fontWeight: 500,
  },
  textContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    gap: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 40
  },
  choiceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    flexWrap: "wrap",
  },
  choiceButton: {
    backgroundColor: "#76BFE0",
    boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.25)",
    borderRadius: 16,
    marginBottom: 8,
  },
  choiceButtonText: {
    color: "#2C327E",
    fontWeight: 500,
    paddingHorizontal: 15,
    lineHeight: 25,
  },
};

const ChatMessage = ({ sent, message, setUserChoice }) => {
  switch (message.variant) {
    case "text":
      return <MessageText sent={sent} message={message} />;
    case "choice":
      return <MessageChoice message={message} setUserChoice={setUserChoice} />;
    case "input":
      // return 
      break;
    case "image":
      // return <MessageImage message={message} />;
      break;
    case "audio":
      // return <MessageAudio message={message} />;
      break;
    default:
      return <MessageText sent={sent} />;
  }
};

function TextRenderer({ message }) {
  return (
    <Text style={stylesMessage.textContainer}>
      {message.content.map((substring) => {
        if (substring?.translation) {
          return (
            <Pressable key={substring.value}>
              <Text
                style={{
                  ...stylesMessage.textStyle,
                  position: "relative",
                  top: 4,
                  marginHorizontal: 2,
                  textDecorationLine: "underline",
                }}
              >
                {substring.value}
              </Text>
            </Pressable>
          );
        }
        return (
          <Text
            key={substring?.value ?? substring}
            style={stylesMessage.textStyle}
          >
            {substring?.value ?? substring}
          </Text>
        );
      })}
    </Text>
  );
}

function MessageText({ message, sent }) {
  return (
    <View
      style={
        sent
          ? stylesMessage.sentMessageContainer
          : stylesMessage.receivedMessageContainer
      }
    >
      <TextRenderer message={message} />
    </View>
  );
}

function MessageChoice({ message, setUserChoice }) {
  return (
    <View style={stylesMessage.receivedMessageContainer}>
      <TextRenderer message={message} />
      <View style={stylesMessage.choiceContainer}>
        {message.choices.map((choice) => (
          <Pressable style={stylesMessage.choiceButton} key={choice.value} onPress={() => {setUserChoice(choice.value)}}>
            <Text style={stylesMessage.choiceButtonText}>{choice.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

export default ChatMessage;
