import React from 'react';
import BudgetEdit from '../container/budgetEdit';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/core';

import { RootStackParamList } from '../../../../App';

export type MainProps = StackNavigationProp<RootStackParamList,'BudgetEdit'>;
type BudgetScreenRouteProp = RouteProp<RootStackParamList,'BudgetEdit'>;
type BudgetScreenNavigationProp = StackNavigationProp<RootStackParamList,"BudgetEdit">;
type Props = {
    route:BudgetScreenRouteProp,
    navigation:BudgetScreenNavigationProp
};

function Main({route,navigation}:Props){
    const onPress = () => {
        navigation.goBack();
    };

    return(
        <BudgetEdit onPress={onPress}/>
    )
}

export default Main;