import {
  StyleSheet,
  
} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,

    justifyContent: "flex-end",
  },
  pagesWrapper: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 45,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
  },
  onLogin: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: "0.01em",
    color: "#1B4371",
  },
  userImgWrapp: {
    position: "absolute",
    left: 150,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  addUserPhotoBtn: {
    position: "absolute",
    bottom: 20,
    right: -12,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 100,
    width: 25,
    height: 25,
  },

  title: {
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginBottom: 33,
    color: "#212121",
  },
  inputWrapp: {
    marginBottom: 16,
  },
  lastInputWrapp: {
    marginBottom: 43,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    padding: 16,

    backgroundColor: "#F6F6F6",
  },
  formBtn: {
    alignItems: "center",
    justifyContent: "center",
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginBottom: 16,
  },
  btnText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: "0.01em",
    color: "#FFFFFF",
  },
  onLogin: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: "0.01em",
    color: "#1B4371",
  },
  showPassword: {
    position: "absolute",
    right: 15,
    top: 15,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
