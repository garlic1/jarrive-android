import { View, Text, Image } from "react-native";

const DownloadImage = ({ route }) => {
  const { src, title } = route.params;
  
  return (
    <View>
      <Text>{title}</Text>
      <Image source={src} />
    </View>
  );
};

export default DownloadImage;