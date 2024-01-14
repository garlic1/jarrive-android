import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LogInScreen from "./screens/LogIn/LogIn";
import useTheme from "./hooks/useTheme";
import ChatScreen from "./screens/IntroductionChat/ChatScreen";
import DownloadImage from "./screens/DownloadImage/DownloadImage";

const Stack = createNativeStackNavigator();

export default function App() {
  const { theme } = useTheme();

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Log in" component={LogInScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Image" component={DownloadImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
