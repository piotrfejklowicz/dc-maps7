
const DistanceCalculator = require('distance-calculator-js');

// => Signed decimal degrees without compass direction
const Tokyo = { lat: 35.652832, long: 139.839478 };
const NewYork = { lat: 40.730610, long: -73.935242 };

const m = DistanceCalculator.calculate(Tokyo, NewYork, 'km');
console.log(m);
