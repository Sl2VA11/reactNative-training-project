import {
  StyleSheet,
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
import { styles } from "./LoginScreen.styled";
import { useState } from "react";

export function LoginScreen({ navigation }) {
  const [focus, setFocus] = useState(false);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState({
    text: "show",
    isShow: true,
  });

  const onSubmit = () => {
    console.log(
      `
      email - ${email},
      password - ${password},
    `
    );
    
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
                <Text style={styles.title}> Log in </Text>

                <View style={styles.form}>
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
                    <Text style={styles.btnText}>Sign in</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.textWrapper}>
                  <Text
                    style={styles.onLogin}
                    onPress={() => navigation.navigate("Registration")}
                  >
                    No account? Sign up
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

