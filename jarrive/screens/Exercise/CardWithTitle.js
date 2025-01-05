import { Text, View } from "react-native";

export const CardWithTitle = ({ title, content }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.innerContent}>{content}</View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#4354EF",
    marginLeft: 20,
    marginTop: 20,
  },
  contentContainer: {
    backgroundColor: "#F5F5F5",
    margin: 20,
    marginTop: 10,
    borderRadius: 20,
    padding: 12,
  },
  innerContent: {
    margin: 12,
  },
};
