import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from "./screens/Home";
import AllPosts from "./screens/AllPosts";
import SinglePost from "./screens/SinglePost";
import EditPost from "./screens/EditPost";
import CreatePost from "./screens/CreatePost";
import { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';




const PostStack = () => {
  const Stack = createStackNavigator();
  
   
  return(
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='AllPosts' component={AllPosts} />
        <Stack.Screen name='SinglePost' component={SinglePost} />
        <Stack.Screen name='EditPost' component={EditPost} />
      </Stack.Navigator>
  )
}



export default function App() {

  const [token, setToken] = useState(true)

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };
  const Tab = createBottomTabNavigator();
  



  return (
    <NavigationContainer theme={theme}>
       <Tab.Navigator
                screenOptions={

                    ({ route }) => ({
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            if (route.name === 'Home') {
                                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                            } else if (route.name === 'AllPosts') {
                                iconName = focused ? 'ios-list-outline' : 'ios-list'
                            }
                             else if (route.name === 'CreatePost') {
                                iconName = focused ? 'create' : 'create-outline'
                            }
                            return <Ionicons name={iconName} size={size} color={color} />
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AllPosts" component={PostStack} />
      <Tab.Screen name="CreatePost" component={CreatePost} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}


