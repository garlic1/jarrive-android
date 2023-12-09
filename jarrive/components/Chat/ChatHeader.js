import { View, Text, Image } from "react-native";

const chatHeaderStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 25,
    paddingTop: 20,
    height: 70,
    gap: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    zIndex: 10,
    boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
  },
  profileImageStyle: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  nameStyle: {
    color: "#2C327E",
    fontSize: 16,
    fontWeight: 500,
  },
  statusStyle: {
    color: "#2C327E",
    fontSize: 12,
    fontWeight: 500,
  },
};

const ChatHeader = ({ profileImage, name, status }) => {
  return (
    <View style={chatHeaderStyles.container}>
      <Image source={profileImage} style={chatHeaderStyles.profileImageStyle} />
      <View>
        <Text style={chatHeaderStyles.nameStyle}>{name}</Text>
        <Text style={chatHeaderStyles.statusStyle}>{status}</Text>
      </View>
    </View>
  );
};



export default ChatHeader;
