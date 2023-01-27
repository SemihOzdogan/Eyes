
import React from 'react';
import { useColorScheme, TouchableOpacity, Text, View, StyleSheet, StatusBar, Platform, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login/Login'
import Screen1 from './src/screens/Home/Screen1'
import Screen2 from './src/screens/Home/Screen2'
import Screen3 from './src/screens/Home/Screen3'
import Screen4 from './src/screens/Home/Screen4'
import Screen5 from './src/screens/Home/Screen5'

import Tabbar from './src/Tabbar';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login", headerTitleAlign: 'center', }}
        />
        <Stack.Screen name="Main" options={{
          title: "Eyes", headerTitleAlign: "center", headerBackVisible: false, headerTransparent: true,
          header: () =>
          (
            <View style={{ height: 70, alignItems: "center", backgroundColor: "#f5f5f5", }}>
              <Image source={require('./src/img/eYes.png')} style={{ width: 65, height: 65 }} resizeMode="contain" />
            </View>
          ),
        }}

          component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
function Main() {
  return (
    <Tab.Navigator initialRouteName="Main" tabBar={props => <Tabbar {...props} />}

      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="Home" component={Screen1}
        options={{ headerShown: false, icon: require("./src/img/home.png") }}
      />
      <Tab.Screen name="User" component={Screen2}
        options={{ headerShown: false, icon: require("./src/img/users.png") }}
      />
      <Tab.Screen name="QR" component={Screen3}
        options={{
          headerShown: false, icon: require("./src/img/qr.png"), style: {
            width: 55,
            height: 55
          }
        }}
      />
      <Tab.Screen name="Global" component={Screen4}
        options={{ headerShown: false, icon: require("./src/img/social.png") }}
      />
      <Tab.Screen name="Settings" component={Screen5}
        options={{ headerShown: false, icon: require("./src/img/settings.png") }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabHeaderContainer: {
    backgroundColor: '#273746',
    paddingHorizontal: 10,
    top: Platform.OS == "ios" ? 21 : 0
  },
  tabHeader: {
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  }
});