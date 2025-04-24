import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding:50,
  },
  
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 36,
    alignItems: "stretch",
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    alignSelf: "center",
    marginBottom: 32,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f7fa",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    height: 48,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#222",
  },
  passwordVisibleButton: {
    padding: 4,
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  forgotPasswordButtonText: {
    color: "#8d3dad",
    fontSize: 14,
    fontWeight: "500",
  },
  loginButton: {
    backgroundColor: "#8d3dad",
    borderRadius: 24,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  signupText: {
    color: "#888",
    fontSize: 14,
  },
  signupLink: {
    color: "#8d3dad",
    fontWeight: "bold",
    fontSize: 14,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#e0e0e0",
  },
  orText: {
    marginHorizontal: 8,
    color: "#888",
    fontWeight: "bold",
    fontSize: 14,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f7fa",
    borderRadius: 8,
    paddingVertical: 12,
    justifyContent: "center",
    marginBottom: 24,
  },
  googleLogo: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    color: "#222",
    fontWeight: "bold",
  },
});
