import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  container: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1
  },
  loginContainer: {
    backgroundColor: "#4354EF",
    display: "flex",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 32,
    flexGrow: 1,
    width: "100%",
    color: "white",
  },
  logoImage: {
    marginTop: 50,
    width: 250,
    height: 200,
  },
  title: {
    marginRight: "auto",
    marginLeft: 20,
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    minWidth: "100%",
    borderRadius: 50,
    padding: 15,
    backgroundColor: "#FFF",
  },
  passwordArea: {
    minWidth: "100%",
    marginVertical: 10,
    borderRadius: 50,
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#FFF",
  },
  passwordInput: {
    flexGrow: 1,
  },
  passwordOptionsContainer: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 5,
  },
  rememberPasswordContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: "auto",
  },
  rememberPasswordCheckbox: {
    borderRadius: 10,
    marginRight: 10,
    borderColor: "white",
  },
  rememberPasswordLabel: {
    color: "white",
  },
  recoverPasswordLabel: {
    color: "#F79799",
  },
  loginButton: {
    backgroundColor: "#2C327E",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 50,
    padding: 15,
  },
  loginButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  registerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  registerLabel: {
    height: 20,
    color: "white",
  },
  registerLabelUnderlined: {
    height: 20,
    color: "white",
    textDecorationLine: "underline",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#C1C1C180",
  },
  dividerLabel: {
    paddingHorizontal: 15,
    textAlign: "center",
    color: "#FEFEFE",
  },
  ssoContainer: {
    flexDirection: "row",
    color: "black",
    alignItems: "center",
    width: "100%",
  },
  ssoButton: {
    margin: 12,
    borderRadius: 100,
    backgroundColor: "white",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  ssoLabel: {
    color: "white",
    fontWeight: "bold",
  },
  otherLoginOptions: {
    marginTop: 30,
    alignItems: "center",
  },
});
