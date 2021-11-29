import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/LoginScreen/components/main';
import SignUpScreen from './src/LoginScreen/SignUpScreen/components/main';

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={
          {
            headerStyle:{backgroundColor:'#467FD3'},
            headerTitleStyle:{color:'#ffffff'},
            headerTitle: 'Memo App',
            headerTintColor:'#ffffff',
            headerBackTitle:'Back',
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled:true,
            gestureDirection:'horizontal',
          }
        }
        >
          <Stack.Screen name="LogIn" component={LoginScreen} options={{
            cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid,
          }}/>
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{
            cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
