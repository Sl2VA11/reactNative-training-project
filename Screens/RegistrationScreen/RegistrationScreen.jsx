import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { styles } from "./RegistrationScreen.styled";

export function RegistrationScreen({ navigation }) {
  const [focus, setFocus] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState({
    text: "show",
    isShow: true,
  });

  const onSubmit = () => {
    console.log(
      `name - ${name},
      email - ${email},
      password - ${password},
    `
    );
    setName("");
    setEmail("");
    setPassword("");
  };
  const toggleShowPassword = () => {
    setShowPassword((prev) => ({
      text: prev.text === "show" ? "hide" : "show",
      isShow: !prev.isShow,
    }));
  };

 
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../img/bg-image.jpg")}
            resizeMode="cover"
            style={styles.backgroundImage}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              keyboardVerticalOffset={-180}
            >
              <View style={styles.pagesWrapper}>
                <View
                  style={[
                    styles.userImgWrapp,
                    {
                      transform: [{ translateY: -50 }],
                    },
                  ]}
                >
                  <TouchableOpacity
                    style={styles.addUserPhotoBtn}
                    activeOpacity={0.7}
                  >
                  
                    <Icon
                      name="plus"
                      size={13}
                      color="#FF6C00"
                      style={{ margin: 6 }}
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.title}> Registration </Text>

                <View style={styles.form}>
                  <View style={styles.inputWrapp}>
                    <TextInput
                      placeholder="Name"
                      placeholderTextColor={"#BDBDBD"}
                      value={name}
                      style={[styles.input, focus && { borderColor: "orange" }]}
                      onFocus={() => setFocus(true)}
                      onBlur={() => setFocus(false)}
                      onChangeText={(value) => setName(value)}
                    />
                  </View>
                  <View style={styles.inputWrapp}>
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor={"#BDBDBD"}
                      value={email}
                      style={[styles.input, focus && { borderColor: "orange" }]}
                      onFocus={() => setFocus(true)}
                      onBlur={() => setFocus(false)}
                      onChangeText={(value) => setEmail(value)}
                    />
                  </View>
                  <View style={styles.lastInputWrapp}>
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor={"#BDBDBD"}
                      secureTextEntry={showPassword.isShow}
                      value={password}
                      style={[
                        styles.input,
                        focus && { borderColor: "orange" },
                        { position: "relative" },
                      ]}
                      onFocus={() => setFocus(true)}
                      onBlur={() => setFocus(false)}
                      onChangeText={(value) => setPassword(value)}
                    />
                    <Text
                      style={styles.showPassword}
                      onPress={() => toggleShowPassword()}
                    >
                      {showPassword.text}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.formBtn}
                    activeOpacity={0.7}
                    onPress={onSubmit}
                  >
                    <Text style={styles.btnText}>Sign up</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.textWrapper}>
                  <Text
                    style={styles.onLogin}
                    onPress={() => navigation.navigate("Login")}
                  >
                    Already have an account? Sign in
                  </Text>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}



