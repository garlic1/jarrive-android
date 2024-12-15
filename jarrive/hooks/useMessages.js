import { useNavigation } from "@react-navigation/native";
import { MessagesContext } from "../context/MessagesContext";
import MESSAGES_CONST from "../utils/messages.json";
import ORDER from "../utils/order.json";
import { useContext, useEffect } from "react";

const useMessages = () => {
  const {
    userChoices,
    setPreviousMessage,
    setCurrentMessage,
    messages,
    setMessages,
    currentMessage,
    previousMessage,
  } = useContext(MessagesContext);

  const navigation = useNavigation();

  const previousMessageVariant = MESSAGES_CONST[previousMessage]?.variant;

  const createMessage = (message, content) => ({
    ...MESSAGES_CONST[message],
    content: [{ value: content }],
  });

  const getCurrentMessage = (userInput, userChoice) => {
    if (!previousMessageVariant) return;

    switch (previousMessageVariant) {
      case "text":
      case "image":
      case "audio":
      case "input":
        if (MESSAGES_CONST[currentMessage].variant === "END") {
          navigation.navigate("Stamp");
        }
        setPreviousMessage(currentMessage);
        setCurrentMessage(ORDER[currentMessage]);
        // hardcoded value
        if (
          MESSAGES_CONST[currentMessage].variant === "input" &&
          !!MESSAGES_CONST[currentMessage].content
        ) {
          const value = MESSAGES_CONST[currentMessage].content[0].value;
          const messageWithHardcodedValue = createMessage(
            currentMessage,
            value
          );
          setMessages((prevMessages) => [
            ...prevMessages,
            messageWithHardcodedValue,
          ]);
          // user input
        } else if (MESSAGES_CONST[currentMessage].variant === "input") {
          const messageWithUserInput = createMessage(currentMessage, userInput);
          setMessages((prevMessages) => [
            ...prevMessages,
            messageWithUserInput,
          ]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            MESSAGES_CONST[currentMessage],
          ]);
        }
        break;
      case "choice":
        {
          // console.log("userChoice", userChoice);
          const currentMessageChoice = ORDER[userChoice];
          if (MESSAGES_CONST[currentMessageChoice].variant === "END") {
            navigation.navigate("Stamp");
          }
          setPreviousMessage(currentMessageChoice);
          setCurrentMessage(ORDER[currentMessageChoice]);
          setMessages([...messages, MESSAGES_CONST[currentMessageChoice]]);
        }
        break;
      default:
        break;
    }
  };

  return {
    getCurrentMessage,
  };
};

export default useMessages;
