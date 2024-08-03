import MESSAGES_CONST from "../utils/messages.json";
import ORDER from "../utils/order.json";
import { useEffect } from "react";

const useMessages = ({
  setPreviousMessage,
  setCurrentMessage,
  messages,
  currentMessage,
  previousMessage,
  userChoice,
}) => {
  const getCurrentMessage = (userInput) => {
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
          const currentMessageChoice = ORDER[userChoice];
          setPreviousMessage(currentMessageChoice);
          setCurrentMessage(ORDER[currentMessageChoice]);
          messages.push(MESSAGES_CONST[currentMessageChoice]);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    getCurrentMessage();
  }, [userChoice]);

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
