import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/View/LoginScreen/components/main';
import SignUpScreen from './src/View/SignUpScreen/components/main';
import Budget from './src/View/BudgetScreen/components/main';
import BudgetEdit from './src/View/BudgetEditScreen/components/main';

export type RootStackParamList = {
  Budget:undefined;
  BudgetEdit:undefined;
  LogIn:undefined,
  SignUp:undefined,
};

const Stack=createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BudgetEdit"
        screenOptions={
          {
            headerStyle:{backgroundColor:'#00A19D'},
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
          <Stack.Screen name="Budget" component = {Budget}/>
          <Stack.Screen name="BudgetEdit" component={BudgetEdit} />
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
