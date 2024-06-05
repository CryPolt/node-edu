import {countBy, random, uniq} from 'lodash';
import axios from 'axios';
import { getCities, key, citiesUrl as url, mapCities, month, number as num } from './src/constants';


// const numbers = [1,2,3,4,5,6,7]
// console.log(uniq(numbers));
//
// const name = 'vasily';
// for (const letter of name){
//     console.log('letter', letter)
// }

// console.log('num >> ', num);
//
// axios.get(url).then(data => {
//     const cities = data.data;
//     const citiesMap = mapCities(cities);
//     console.log(citiesMap)
// })

getCities().then((cities) => {
    const citiesMapped = mapCities(cities);
    console.log('cities >>>', citiesMapped);
});