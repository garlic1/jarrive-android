import { View } from "react-native";

export const ProgressBar = ({ totalQuestions, correctAnswers }) => {
  const progress = correctAnswers / totalQuestions;

  return (
    <View
      style={{
        height: 14,
        width: "95%",
        backgroundColor: "#393B57",
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 10,
        flex: 1,
      }}
    >
      <View
        style={{
          height: "100%",
          backgroundColor: "#23C86F",
          width: `${progress * 100}%`,
        }}
      />
    </View>
  );
};
