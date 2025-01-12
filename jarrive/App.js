import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MessagesProvider } from "./context/MessagesContext";
import React, { useEffect } from "react";
import LogInScreen from "./screens/LogIn/LogIn";
import useTheme from "./hooks/useTheme";
import ChatScreen from "./screens/IntroductionChat/ChatScreen";
import DownloadImage from "./screens/DownloadImage/DownloadImage";
import StampScreen from "./screens/Stamp/StampScreen";
import { CopilotProvider } from "react-native-copilot";
import Exercise from "./screens/Exercise/Exercise";
import FirstStamp from "./screens/FirstStamp/FirstStamp";
import StartScreen from "./screens/Start/Start";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    const hideSplash = async () => {
      await SplashScreen.hideAsync(); // Hides splash once loading is done
    };
    hideSplash();
  }, []);

  const { theme } = useTheme();

  const tutorialStyle = {
    color: "white",
  };

  return (
    <MessagesProvider>
      <CopilotProvider
        labels={{
          finish: "Ok",
        }}
        tooltipStyle={tutorialStyle}
      >
        <NavigationContainer theme={theme}>
          <StatusBar style="auto" />
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Start"
          >
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Log in" component={LogInScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="Image" component={DownloadImage} />
            <Stack.Screen name="Stamp" component={StampScreen} />
            <Stack.Screen name="Exercise" component={Exercise} />
            <Stack.Screen name="FirstStamp" component={FirstStamp} />
          </Stack.Navigator>
        </NavigationContainer>
      </CopilotProvider>
    </MessagesProvider>
  );
}
