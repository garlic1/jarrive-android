import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import thomas from "../../assets/thomas.jpg";
import MESSAGES_CONST from "../../utils/messages.json";
import ORDER from "../../utils/order.json";
import { Pressable, View, Text } from "react-native";
import { useEffect, useState } from "react";

const Chat = () => {
  const [messages, _] = useState([MESSAGES_CONST["salut"]]);
  const [previousMessage, setPreviousMessage] = useState("salut");
  const [currentMessage, setCurrentMessage] = useState("bonjourOuBonsoir");
  const [userChoice, setUserChoice] = useState("bonjour");

  const getCurrentMessage = () => {
    {
      console.log("previous: ", previousMessage);
    }
    {
      console.log("current: ", currentMessage);
    }
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
          console.log("currentMessageChoice", currentMessageChoice);
          console.log("userChoice", userChoice);
          setPreviousMessage(userChoice);
          setCurrentMessage(currentMessageChoice);
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

  return (
    <>
      <Pressable onPress={() => getCurrentMessage()}>
        <ChatHeader
          profileImage={thomas}
          name={"Issa - Le tuteur de Thomas"}
          status={"en écrivant..."}
        />
      </Pressable>
      <ChatBody
        messages={messages}
        setUserChoice={setUserChoice}
        getCurrentMessage={getCurrentMessage}
      />
      <ChatInput />
    </>
  );
};

export default Chat;
