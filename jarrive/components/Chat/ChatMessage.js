const ChatMessage = ({ variant }) => {
  if (variant === "sent") {
    return <Text>Message sent</Text>;
  }
  if (variant === "received") {
    return <Text>Message Received</Text>;
  }

  return <></>;
};
