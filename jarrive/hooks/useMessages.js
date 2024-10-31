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

  const createMessage = (message, content) => ({
      ...MESSAGES_CONST[message],
      content: [{ value: content }],
  });

  const getCurrentMessage = (userInput, userChoice) => {
    const previousMessageVariant = MESSAGES_CONST[previousMessage]?.variant;
    if (!previousMessageVariant) return;

    switch (previousMessageVariant) {
      case "text":
      case "image":
      case "audio":
      case "input":
        setPreviousMessage(currentMessage);
        setCurrentMessage(ORDER[currentMessage]);
        // hardcoded value
        if (
          MESSAGES_CONST[currentMessage].variant === "input" &&
          !!MESSAGES_CONST[currentMessage].content
        ) {
          const value = MESSAGES_CONST[currentMessage].content[0].value;
          const messageWithHardcodedValue = createMessage(currentMessage, value);
          setMessages([...messages, messageWithHardcodedValue]);
          // user input
        } else if (MESSAGES_CONST[currentMessage].variant === "input") {
          const messageWithUserInput = createMessage(currentMessage, userInput);
          setMessages([...messages, messageWithUserInput]);
        } else {
          setMessages([...messages, MESSAGES_CONST[currentMessage]]);
        }
        break;
      case "choice":
        {
          // console.log("userChoice", userChoice);
          const currentMessageChoice = ORDER[userChoice];
          console.log("currentMessageChoice", currentMessageChoice);
          setPreviousMessage(currentMessageChoice);
          setCurrentMessage(ORDER[currentMessageChoice]);
          setMessages([...messages, MESSAGES_CONST[currentMessageChoice]]);
        }
        break;
      default:
        break;
    }
  };
  
  // setTimeout(()=>getCurrentMessage(),1000);

  useEffect(() => {
    // const intervalHandle = setInterval(()=>getCurrentMessage(),1000);
    // return () => {
    //   clearInterval(intervalHandle);
    // }
  }, []);

  return {
    getCurrentMessage,
  };
};

export default useMessages;
