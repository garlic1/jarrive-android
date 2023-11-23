import { DefaultTheme } from "@react-navigation/native";

const useTheme = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#000",
      background: "#FFF",
      text: "#FFF",
    },
  };

  return { theme };
};

export default useTheme;
