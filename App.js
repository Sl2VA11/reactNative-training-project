import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Screens/Home/Home";
import { PostScreen } from "./Screens/PostsScreen/PostsScreen";
import { CreatePostScreen } from "./Screens/CreatePostsScreen/CreatePostsScreen";
import { CommentsScreen } from "./Screens/CommentsScreen/CommentsScreen";
import { ProfileScreen } from "./Screens/ProfileScreen/ProfileScreen";
import { MapScreen } from "./Screens/MapScreen/MapScreen";
const MainStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Posts" component={PostScreen} />
        {/* <MainStack.Screen name="CreatePosts" component={CreatePostScreen} /> */}
        <MainStack.Screen name="Comments" component={CommentsScreen} />
        {/* <MainStack.Screen name="Profile" component={ProfileScreen} /> */}
        <MainStack.Screen name="Map" component={MapScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
