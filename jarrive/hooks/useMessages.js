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
  const getCurrentMessage = () => {
    const previousMessageVariant = MESSAGES_CONST[previousMessage].variant;
    switch (previousMessageVariant) {
      case "text":
      case "image":
      case "audio":
      case "input":
        setPreviousMessage(currentMessage);
        setCurrentMessage(ORDER[currentMessage]);
        messages.push(MESSAGES_CONST[currentMessage]);
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
