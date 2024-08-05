import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import thomas from "../../assets/thomas.jpg";
import MESSAGES_CONST from "../../utils/messages.json";
import { Pressable } from "react-native";
import { useContext, useEffect, useState } from "react";
import useMessages from "../../hooks/useMessages";
import { MessagesContext } from "../../context/MessagesContext";

const Chat = () => {
  const [userInput, setUserInput] = useState("");

  const { messages, currentMessage } = useContext(MessagesContext);

  const { getCurrentMessage } = useMessages();

  const onSubmitUserInput = () => {
    if (MESSAGES_CONST[currentMessage].variant === "input") {
      getCurrentMessage(userInput, "");
    }
    setUserInput("");
  };

  const onChangeUserInput = (text) => {
    setUserInput(text);
  };

  const disableUserInput =
    MESSAGES_CONST[currentMessage]?.variant !== "input" ||
    MESSAGES_CONST[currentMessage]?.content;

  return (
    <>
      <Pressable onPress={() => getCurrentMessage()}>
        <ChatHeader
          profileImage={thomas}
          name={"Issa - Le tuteur de Thomas"}
          status={"en écrivant..."}
        />
      </Pressable>
      <ChatBody messages={messages} getCurrentMessage={getCurrentMessage} />
      <ChatInput
        onChangeUserInput={onChangeUserInput}
        onSubmit={onSubmitUserInput}
        value={userInput}
        disabled={disableUserInput}
      />
    </>
  );
};

export default Chat;
