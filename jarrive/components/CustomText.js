import { Text } from "react-native";
import { useFonts } from "expo-font";

const CustomText = ({ style, children }) => {
  const [fontsLoaded, fontError] = useFonts({
    'Basic_400Regular': require('../assets/fonts/Basic-Regular.ttf'),
  });

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <Text
      style={{
        ...style,
        fontFamily: "Basic_400Regular",
      }}
    >
     {children}
    </Text>
  );
};

export default CustomText;
