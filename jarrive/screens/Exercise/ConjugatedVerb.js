import { Text, View } from "react-native";

export const ConjugatedVerb = ({ pronoun, conjugation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.pronounContainer}>
        <Text style={styles.pronounText}>{pronoun}{" "}</Text>
      </View>
      <View style={styles.conjugationContainer}>
        <Text style={styles.conjugationText}>{conjugation}</Text>
      </View>
    </View>
  );
};

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  pronounContainer: {
    width: "37%",
  },
  pronounText: {
    width: "100%",
    fontSize: 20,
    textAlign: "right",
    color: "#787878",
  },
  conjugationContainer: {
    width: "50%",
  },
  conjugationText: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20,
    color: "#787878",
  },
};
