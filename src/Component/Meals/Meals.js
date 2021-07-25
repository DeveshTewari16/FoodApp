import React from 'react';
import MealsSummary from './MealsSummary.js';
import AvailableMeals from './AvailableMeals.js';
import Card from '../Card/Card.js';

const Meals=props=>{
    return (<React.Fragment>
        <MealsSummary/>
        <Card>
        <AvailableMeals/>
        </Card>
    </React.Fragment>
    );
}

export default Meals;