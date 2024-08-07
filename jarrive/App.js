import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MessagesProvider } from "./context/MessagesContext";
import React from "react";
import LogInScreen from "./screens/LogIn/LogIn";
import useTheme from "./hooks/useTheme";
import ChatScreen from "./screens/IntroductionChat/ChatScreen";
import DownloadImage from "./screens/DownloadImage/DownloadImage";
import StampScreen from "./screens/Stamp/StampScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const { theme } = useTheme();

  return (
    <MessagesProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Log in" component={LogInScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Image" component={DownloadImage} />
          <Stack.Screen name="Stamp" component={StampScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MessagesProvider>
  );
}
