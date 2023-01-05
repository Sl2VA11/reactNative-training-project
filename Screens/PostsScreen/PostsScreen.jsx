import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { CreatePostScreen } from "../CreatePostsScreen/CreatePostsScreen";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";


const Tabs = createBottomTabNavigator();
export function PostScreen() {
   return (
     <Tabs.Navigator
     //  screenOptions={({ route }) => ({
     //    tabBarIcon: ({ focused, color, size }) => {
     //      let iconName;

     //      if (route.name === "Profile") {
     //        iconName = focused
     //          ? "ios-information-circle"
     //          : "ios-information-circle-outline";
     //      } else if (route.name === "Settings") {
     //        iconName = focused ? "ios-list-box" : "ios-list";
     //      }
     //      return <Ionicons name={iconName} size={size} color={color} />;
     //    },
     //  })}
     //  tabBarOptions={{
     //    activeTintColor: "tomato",
     //    inactiveTintColor: "gray",
     //  }}
     >
       {/* <Tabs.Screen name="Posts" component={PostScreen} /> */}
       <Tabs.Screen name="CreatePosts" component={CreatePostScreen} />
       <Tabs.Screen name="Profile" component={ProfileScreen} />
     </Tabs.Navigator>
   );
}