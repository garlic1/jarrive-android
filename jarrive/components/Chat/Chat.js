import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import thomas from "../../assets/thomas.jpg";
import MESSAGES_CONST from "../../utils/messages.json";
import { Pressable } from "react-native";
import { useEffect, useState } from "react";
import useMessages from "../../hooks/useMessages";

const Chat = () => {
  const [messages, _] = useState([MESSAGES_CONST["salut"]]);
  const [previousMessage, setPreviousMessage] = useState("salut");
  const [currentMessage, setCurrentMessage] = useState("bonjourOuBonsoir");
  const [userChoice, setUserChoice] = useState("");
  const [userName, setUserName] = useState("");

  const { getCurrentMessage } = useMessages({
    setPreviousMessage,
    setCurrentMessage,
    messages,
    currentMessage,
    previousMessage,
    userChoice,
  });

  const onSubmitName = () => {
    getCurrentMessage(userName);
  }

  const onChangeName = (text) => {
    setUserName(text);
  }

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
      <ChatInput 
        onChangeName={onChangeName}
        onSubmit={onSubmitName}
        disabled={messages[currentMessage]?.variant !== "input"}
      />
    </>
  );
};

export default Chat;
