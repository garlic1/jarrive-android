import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, TouchableHighlight, View } from "react-native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "@rneui/themed";
import { MessagesContext } from "../../context/MessagesContext";
import useMessages from "../../hooks/useMessages";

const stylesMessage = {
  sentMessageContainer: {
    backgroundColor: "white",
    marginLeft: "auto",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    marginHorizontal: 10,
    paddingTop: 5,
    maxWidth: "70%",
  },
  receivedMessageContainer: {
    backgroundColor: "white",
    marginRight: "auto",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 10,
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
    flexDirection: "row",
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
  audioContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
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
  maxWidth: "70%",
};

const ChatMessage = ({ sent, message }) => {
  // console.log(message);
  switch (message.variant) {
    case "text":
      return <MessageText sent={sent} message={message} />;
    case "choice":
      return <MessageChoice message={message} />;
    case "input":
      return <MessageText sent={true} message={message} />;
    case "image":
      return <MessageImage message={message} />;
    case "audio":
      return <MessageAudio />;
    default:
      return <MessageText sent={sent} />;
  }
};

const ControlledTooltip = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <Tooltip
      visible={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      {...props}
    />
  );
};

function TextRenderer({ message }) {
  return (
    <Text style={stylesMessage.textContainer}>
      {message.content.map((substring) => {
        if (substring?.translation) {
          return (
            <ControlledTooltip
              key={substring.value}
              popover={
                <Text style={stylesMessage.textStyle}>
                  {substring.translation}
                </Text>
              }
              backgroundColor={"#23C86F"}
              withOverlay={false}
            >
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
            </ControlledTooltip>
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

function MessageChoice({ message }) {
  const { userChoices, onSelectUserChoice } = useContext(MessagesContext);
  const { getCurrentMessage } = useMessages();

  return (
    <View style={stylesMessage.receivedMessageContainer}>
      <TextRenderer message={message} />
      <View style={stylesMessage.choiceContainer}>
        {message.choices.map((choice) => {
          console.log(message.name)
          const chosen = userChoices[message.name] === choice.value;

          return (
            <TouchableHighlight
              style={chosen ? null : stylesMessage.choiceButton}
              key={choice.value}
              onPress={() => {
                onSelectUserChoice(choice.value);
                getCurrentMessage("", choice.value);
              }}
            >
              <Text style={stylesMessage.choiceButtonText}>{choice.label}</Text>
            </TouchableHighlight>
          );
        })}
      </View>
    </View>
  );
}

function MessageImage({ message }) {
  const navigation = useNavigation();

  const images = {
    thomas_train: require("../../assets/thomas_train.png"),
    postcard_preview: require("../../assets/postcard_preview.jpg"),
  };

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Image", {
          src: images[message.src],
          title: "Issa - Le tuteur de Thomas",
        });
      }}
    >
      <Image style={stylesImageMessage} source={images[message.src]} />
    </Pressable>
  );
}

function MessageAudio() {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/coringa.mp3")
    );
    setSound(sound);
    await sound.playAsync();
    setIsPlaying(true);
  };

  const onPause = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={stylesMessage.receivedMessageContainer}>
      <View style={stylesMessage.audioContainer}>
        {isPlaying ? (
          <Pressable
            onPress={() => {
              onPause();
            }}
          >
            <Ionicons name="pause" color="#2C327E" size={20} />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              onPlay();
            }}
          >
            <Ionicons name="play" color="#2C327E" size={20} />
          </Pressable>
        )}
        <Image source={require("../../assets/audio.png")} />
      </View>
    </View>
  );
}

export default ChatMessage;
