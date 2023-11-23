import { Text } from "react-native";
import { useFonts, Basic_400Regular } from "expo-font";

const CustomText = ({ children }) => {
  const [fontsLoaded, fontError] = useFonts({
    Basic_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      style={{
        fontFamily: "Basic_400Regular",
        fontSize: 20,
        color: "#000"
      }}
    >
      {children}
    </Text>
  );
};

export default CustomText;
