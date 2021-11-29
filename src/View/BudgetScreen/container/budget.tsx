import React from 'react';
import CompBudget from '../components/budget';

type BudgetProps = {
    onPress: () => void;
}

const Budget:React.FC<BudgetProps> = (props:BudgetProps) => {
    const {onPress} = props;
    return(
        <CompBudget onPress={onPress}/>
    )
}

export default Budget;