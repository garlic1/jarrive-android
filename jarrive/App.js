import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LogInScreen from "./screens/LogIn/LogIn";
import useTheme from "./hooks/useTheme";

const Stack = createNativeStackNavigator();

export default function App() {
  const { theme } = useTheme();

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Log In" component={LogInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
