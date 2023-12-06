import { Text } from "react-native";
import { useFonts, Basic_400Regular } from "expo-font";

const CustomText = ({ style, children }) => {
  const [fontsLoaded, fontError] = useFonts({
    Basic_400Regular,
  });

  return (
    <Text
      style={{
        ...style,
      }}
    >
     {children}
    </Text>
  );
};

export default CustomText;
