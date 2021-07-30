import classes from "./AvailableMeals.module.css";
import DisplayMeals from './DisplayMeals';

const meals_data = [
    {
      id: 'm1',
      name: 'Salad',
      description: ' Finnet veggies',
      price: 82.00,
    },
    {
      id: 'm2',
      name: 'Aloo Paratha',
      description: 'Indian specialty!',
      price: 160.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 120.00,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 198.00,
    },
    {
      id: 'm5',
      name: 'Chola Kulcha',
      description: ' India Origin',
      price: 82.00,
    },
    {
      id: 'm6',
      name: 'Sweet Desert',
      description: 'Sweet specialty!',
      price: 180,
    },
    {
      id: 'm7',
      name: 'Big Burger',
      description: 'Indian, raw, meaty',
      price: 100.00,
    },
    {
      id: 'm8',
      name: 'Rajma Bowl',
      description: 'Healthy dish',
      price: 198.00,
    },
  ];

  const AvailableMeals=()=>{
      return <section className={classes.meals}>
          <ul>
              {meals_data.map(meal=>
              <DisplayMeals 
              key={meal.id}
              meals={meal}/>)}
          </ul>
      </section>
  }

  export default AvailableMeals;