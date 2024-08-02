import { View, Text, Image, StatusBar } from "react-native";

const chatHeaderStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 25,
    paddingTop: StatusBar.currentHeight + 10|| 10,
    height: StatusBar.currentHeight + 60 || 60,
    gap: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    zIndex: 10,
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
