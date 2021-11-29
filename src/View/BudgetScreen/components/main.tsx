import React from 'react';
import Budget from '../container/budget';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../App';

export type MainProps = StackNavigationProp<RootStackParamList,'Budget'>;

type BudgetScreenRouteProp = RouteProp<RootStackParamList,'Budget'>;
type BudgetScreenNavigationProp = StackNavigationProp<RootStackParamList,"Budget">;
type Props = {
    route:BudgetScreenRouteProp,
    navigation:BudgetScreenNavigationProp
};
function Main({route,navigation}:Props) {

    const onPress = () => {
        navigation.navigate('BudgetEdit');
    };
    
    return(
        <Budget onPress={onPress}/>
    )
}

export default Main;