import { Image, Pressable, Text, TouchableHighlight, View } from "react-native";

const stylesMessage = {
  sentMessageContainer: {
    backgroundColor: "white",
    marginLeft: "auto",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    marginHorizontal: 10,
    paddingTop: 5,
    filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25))",
    maxWidth: "70%",
  },
  receivedMessageContainer: {
    backgroundColor: "white",
    marginRight: "auto",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 10,
    filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25))",
    maxWidth: "70%",
  },
  textStyle: {
    color: "#2C327E",
    fontWeight: 500,
  },
  textContainer: {
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 10,
    gap: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    minHeight: 40,
  },
  choiceContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    gap: 8,
  },
  choiceButton: {
    backgroundColor: "#76BFE0",
    elevation: 4,
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

const stylesImageMessage = {
  width: 150,
  height: 150,
  borderColor: "white",
  borderWidth: 2,
  backgroundColor: "white",
  marginRight: "auto",
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  borderTopRightRadius: 20,
  marginHorizontal: 10,
  filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25))",
  maxWidth: "70%",
};;

const ChatMessage = ({ sent, message, setUserChoice }) => {
  switch (message.variant) {
    case "text":
      return <MessageText sent={sent} message={message} />;
    case "choice":
      return <MessageChoice message={message} setUserChoice={setUserChoice} />;
    case "input":
      return <MessageText sent={true} message={message} />;
      break;
    case "image":
      return <MessageImage message={message} />;
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
                  marginLeft: 2,
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
          <TouchableHighlight
            style={stylesMessage.choiceButton}
            key={choice.value}
            onPress={() => {
              setUserChoice(choice.value);
            }}
          >
            <Text style={stylesMessage.choiceButtonText}>{choice.label}</Text>
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
}

function MessageImage({ message }) {
  const images = {
    thomas_train: require("../../assets/thomas_train.png"),
    postcard_preview: require("../../assets/postcard_preview.jpg"),
  };

  return (
    <Pressable onPress={() => {}}>
      <Image
        style={stylesImageMessage}
        source={images[message.src]}
      />
    </Pressable>
  );
}

export default ChatMessage;
