import { createContext, useState } from "react";
import MESSAGES_CONST from "../utils/messages.json";

const INITIAL_VALUE = {
  messages: [],
  previousMessage: "",
  setPreviousMessage: () => {},
  currentMessage: "",
  setCurrentMessage: () => {},
  userChoices: {},
  onSelectUserChoice: () => {},
};

export const MessagesContext = createContext(INITIAL_VALUE);

export const MessagesProvider = ({ children }) => {
  const [messages, _] = useState([MESSAGES_CONST["salut"]]);
  const [previousMessage, setPreviousMessage] = useState("salut");
  const [currentMessage, setCurrentMessage] = useState("bonjourOuBonsoir");
  const [userChoices, setUserChoices] = useState({});

  const onSelectUserChoice = (choice) => {
    setUserChoices({ ...userChoices, [previousMessage]: choice });
  };

  const value = {
    messages,
    previousMessage,
    setPreviousMessage,
    currentMessage,
    setCurrentMessage,
    userChoices,
    onSelectUserChoice,
  };

  return (
    <MessagesContext.Provider value={value}>
      <>{console.log("previousMessage", previousMessage)}</>
      <>{console.log("currentMessage", currentMessage)}</>
      {children}
    </MessagesContext.Provider>
  );
};
