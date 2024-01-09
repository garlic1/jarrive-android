import MESSAGES_CONST from "../utils/messages.json";
import ORDER from "../utils/order.json";

const useMessages = ({
  setPreviousMessage,
  setCurrentMessage,
  messages,
  currentMessage,
  previousMessage,
  userChoice,
}) => {
  const getCurrentMessage = () => {
    console.log("previous: ", previousMessage);
    console.log("current: ", currentMessage);
    // if (previousMessage === "END") {
    //     return;
    // }
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
          console.log("userChoice", userChoice);
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

  return {
    getCurrentMessage,
  };
};

export default useMessages;
