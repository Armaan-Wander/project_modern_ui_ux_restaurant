import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const pizzas = [
  {

    title: 'Hawaiian Pizza',
    price: ['$14.20', '$17.00'],
    tags: 'Ham and Pineapple',

  },
  {

    title: 'Meat Lovers Pizza',
    price: ['$15.75', '$19.35'],
    tags: 'Sausage, Beef, Ham, Pepperoni, and Bacon',

  },

  {

    title: 'White Pizza',
    price: ['$13.35', '$16.45'],
    tags: 'No Tomato sauce, Ricotta, Mozzarella, Garlic, and Feta Cheese',

  },
  {
    title: 'Chicken Florentine Pizza',
    price: ['$15.75', '$19.35'],
    tags: 'Chicken, Garlic, Spinach, and Tomato',
  },
  {
    title: 'Spartan Pizza',
    price: ['$15.75', '$19.35'],
    tags: 'Gyro, Feta, Tomato, Onion, and Garlic',
  },
  {
    title: "Ouzo's Special Pizza",
    price: ['$18.50', '$24.50'],
    tags: 'Feta Cheese, Fresh Tomato, Olives, Onions, Olive Oil, Oregano, Fresh Garlic, and Pepperoncini',
  },
  {
    title: 'Ultimate Supreme Pizza',
    price: ['$18.50', '$19.35'],
    tags: 'Pepperoni, Sausage, Beef, Bell Peppers, Onions, Mushrooms, Olives, Banana Peppers, Jalapenos, and Ham',
  },
  {
    title: '5 Cheese Pizza',
    price: ['$15.25', '$17.25'],
    tags: 'White Cheddar, Yellow Cheddar, Provolone, Mozzarella, and Feta Cheese',
  },
  {
    title: 'Veggie Pizza',
    price: ['$15.75', '$19.35'],
    tags: 'Tomato, Bell Peppers, Olives, Mushrooms, and Onions',
  },
  {
    title: 'BBQ Chicken Pizza',
    price: ['$15.40', '$18.80'],
    tags: 'Tomato Sauce, Grilled Chicken Breast dipped in BBQ Sauce, and Mozzarella Cheese',
  },
  {
    title: 'House Special Pizza',
    price: ['$15.40', '$18.80'],
    tags: 'Sausage, Beef, Pepperoni, Bell Peppers, Onions, and Mushrooms',
  },
];

const wings = [
  {
    title: '10 Wings',
    price: '$14.95',
    tags: 'Hot, Mild, BBQ, or Teriyaki. Served with Ranch or Blue Cheese Dressing',
  },
  {
    title: '20 Wings',
    price: '$27.75',
    tags: 'Hot, Mild, BBQ, or Teriyaki. Served with Ranch or Blue Cheese Dressing',
  },
  {
    title: '50 Wings',
    price: '$64.15',
    tags: 'Hot, Mild, BBQ, or Teriyaki. Served with Ranch or Blue Cheese Dressing',
  },
];

const burgers = [
  {
    title: 'Hamburger',
    price: '$10.25',
    tags: '',
  },
  {
    title: 'Cheeseburger',
    price: '$10.85',
    tags: '',
  },
  {
    title: 'Chili Cheeseburger',
    price: '$11.05',
    tags: 'Chili and Cheese',
  },
  {
    title: 'Bacon Cheeseburger',
    price: '$11.85',
    tags: 'Bacon and Cheese',
  },
  {
    title: "Ouzo's Special Burger",
    price: '$12.65',
    tags: 'Lettuce, Tomato, Mayo, Mustard, Ketchup, Chili, Cheese, Bacon, and Onions',
  },
  {
    title: 'Extra Patty',
    price: '+$4.65',
    tags: '',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards, pizzas, burgers, wings };
