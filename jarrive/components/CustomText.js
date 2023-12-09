import { Text } from "react-native";
import { useFonts } from "expo-font";
import font from '../assets/fonts/Basic-Regular.ttf';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

const CustomText = ({ style, children }) => {
  const [fontsLoaded, fontError] = useFonts({
    'Basic_400Regular': font,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <Text
      style={{
        ...style,
        fontFamily: "Basic_400Regular",
      }}
      onLayout={onLayoutRootView}
    >
     {children}
    </Text>
  );
};

export default CustomText;
