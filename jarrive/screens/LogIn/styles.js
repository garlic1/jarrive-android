import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  container: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },
  loginContainer: {
    backgroundColor: "#4354EF",
    display: "flex",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 32,
    flexGrow: 1,
    color: "white"
  },
  description: {
    marginLeft: 20,
    color: "#FFF",
  },
  input: {
    minWidth: "100%",
    margin: 12,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#FFF",
  },
  passwordArea: {
    minWidth: "100%",
    margin: 12,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#FFF",
  },
  passwordInput: {
    flexGrow: 1,
  },
  button: {
    backgroundColor: "#2C327E",
    alignItems: "center",
    margin: 12,
    borderRadius: 10,
    padding: 10,
    boxShadow: "0px 2px 5px 0px rgba(44, 50, 126, 0.20)"
  },
  ssoContainer: {
    flexDirection: "row",
    color: "black",
    alignItems: "center",
    width: "100%"
  },
  ssoButton: {
    margin: 12,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    minWidth: "100%"
  },
  otherLoginOptions: {
    marginTop: 50,
    alignItems: "center",
  },
});
