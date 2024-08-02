import { View, Text, Image, StatusBar, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const imageHeaderStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 25,
    paddingTop: StatusBar.currentHeight + 10 || 10,
    height: StatusBar.currentHeight + 60 || 60,
    zIndex: 10,
    backgroundColor: "#2F335C",
  },
  text: {
    color: "white",
    fontSize: 16,
    lineHeight: 20,
  },
  downloadIcon: {
    backgroundColor: "#76BFE0",
    height: 32,
    width: 32,
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  goBackContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
};

const DownloadImage = ({ route }) => {
  const { src, title } = route.params;
  const navigation = useNavigation();

  return (
    <View>
      <View style={imageHeaderStyles.container}>
        <View style={imageHeaderStyles.goBackContainer}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="chevron-back-outline" color="#FFF" size={20} />
          </Pressable>
          <Text style={imageHeaderStyles.text}>{title}</Text>
        </View>
        <View style={imageHeaderStyles.downloadIcon}>
          <Ionicons name="download-outline" color="#2F335C" size={25} />
        </View>
      </View>
      <Image source={src} />
    </View>
  );
};

export default DownloadImage;