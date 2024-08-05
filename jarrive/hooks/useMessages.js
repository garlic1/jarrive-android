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
    currentMessage,
    previousMessage,
  } = useContext(MessagesContext);

  const getCurrentMessage = (userInput, userChoice) => {
    const previousMessageVariant = MESSAGES_CONST[previousMessage].variant;
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
          const messageWithHardcodedValue = {
            ...MESSAGES_CONST[currentMessage],
            content: [
              { value: MESSAGES_CONST[currentMessage].content[0].value },
            ],
          };
          messages.push(messageWithHardcodedValue);
          // user input
        } else if (MESSAGES_CONST[currentMessage].variant === "input") {
          const messageWithUserInput = {
            ...MESSAGES_CONST[currentMessage],
            content: [{ value: userInput }],
          };
          messages.push(messageWithUserInput);
        } else {
          messages.push(MESSAGES_CONST[currentMessage]);
        }
        break;
      case "choice":
        {
          // console.log("userChoice", userChoice);
          const currentMessageChoice = ORDER[userChoice];
          console.log("currentMessageChoice", currentMessageChoice);
          setPreviousMessage(currentMessageChoice);
          setCurrentMessage(ORDER[currentMessageChoice]);
          messages.push(MESSAGES_CONST[currentMessageChoice]);
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
