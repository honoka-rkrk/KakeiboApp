import React from 'react';
import CompBudgetEdit from '../components/budgetEdit';

type BudgetEditProps = {
    onPress: () => void;
}

const BudgetEdit:React.FC<BudgetEditProps> = (props:BudgetEditProps) => {
    const {onPress} = props;
    return(
        <CompBudgetEdit onPress={onPress}/>
    )
}

export default BudgetEdit;