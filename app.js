import {countBy, random, uniq} from 'lodash';
import axios from 'axios';
import { getCities, key, citiesUrl as url, mapCities, month, number as num } from './src/constants';


const numbers = [1,2,3,4,5,6,7]
console.log(uniq(numbers));

const name = 'vasily';
for (const letter of name){
    console.log('letter', letter)
}

console.log('num >> ', num);

axios.get(url).then(data => {
    const cities = data.data;
    const citiesMap = mapCities(cities);
    console.log(citiesMap)
})

getCities().then((cities) => {
    const citiesMapped = mapCities(cities);
    console.log('cities >>>', citiesMapped);
});



/*for*/
const cars = ['Tesla','BMW','TOYOTA','AUDI'];

const auto = {
    name: 'Tesla',
    year: 2021,
    color: 'red'
}

for (const car of Object.values(auto)) {
    console.log(car)
}

for(let i = 0 ; i < cars.length; i++) {
    console.log(i)
}

cars.forEach(car => {
    console.log(car)
})


Array.prototype.vasily = function () {
    return 'vasiliy';
}

for (const car of cars) {
    // if (index === '1'){
    //     continue;
    // }
    if (car === 'BMW') {
        continue;
    }
    console.log(car)
}



/*
Promise*/

console.log('start');
const listPromise = fetch('https://api.sampleapis.com/countries/countries');
// console.log('Successfully');
// console.log('countries > ', list)

// listPromise.then(data => {
//     console.log(data)
// })

// listPromise.then(data => data.json()).then(countries => {
//     console.log(countries);
// })

listPromise
.then(data => data.json())
.then(countries => countries)
.catch(err => {
    console.log('error',err)
})

const coffee = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject(Error('Coffee yes'))
    }, 1500)
})

coffee.then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

const family = [
    {member : 'mother', id: 111, coffee: 'Caramel Latte'},
    {member : 'father', id: 222, coffee: 'Espresso'},
    {member : 'son', id: 333, coffee: 'Cappuccino'},
]

const getCoffee = (member) => {
    const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
    return coffeePromise
        .then(data => data.json())
        .then(list => {
            // console.log('list', list)
            const coffee = list.find(res => res.title === member.coffee)
            console.log(coffee)
            return {
                ...member,
                coffee
            }
        })
}


const getFamilyMember = (id) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const member = family.find(res => res.id === id);
            // console.log(member)
            if (member) {
                resolve(member);
            } else {
                reject(Error('Not found'))
            }
        },1500)
    })
}

getFamilyMember(321)
    .then(data => getCoffee(data))
    .then(newMember => {
        console.log('newMember',newMember)
}).catch(err => {
    console.log(err)
})


const makeCoffe = () => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
          resolve(`coffee gotov`)
      },500)
    })
}
const makeToast = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`tost gotov`)
        },2500)
    })
}

const coffeePromise = makeCoffe();
const toastPromise = makeToast();

Promise.all([coffeePromise, toastPromise]).then(([coffePromise,toastPromise]) => {
    console.log(coffePromise,toastPromise)
})

const beersPromise = fetch('https://api.sampleapis.com/beers/ale');
const winesPromise = fetch('https://api.sampleapis.com/wines/reds');

Promise.all([beersPromise,winesPromise])
    .then(data => Promise.all(data.map(res => res.json())))
    .then(finalData => {
    console.log(finalData)
})

/*
Class*/


class Kil {
    constructor(brand,color) {
        this.brand = brand;
        this.color = color;
    }
    start() {
        console.log(`${this.brand} - ${this.color} - start!`)
    }
    stop() {
        console.log(`${this.brand} - stop!`)
    }
}
const bmw = new Kil('BMW','Black');
const nissan = new Kil('nissan','red');

class Bar {
    constructor(brand) {
        this.brand = brand;
        this.gasTank = 100;
        this.zapravka = [];
    }
    getGas(){
        this.gasTank += 10;
        const stamp = Date.now();
        const time = new Date(stamp);
        this.zapravka.push(time.toString());
        return this.gasTank;
    }
    drive() {
        this.gasTank -= 10;
        return this.gasTank;
    }
}

const nissan = new Bar('Nissan');
nissan.getGas();
nissan.drive();
console.log(nissan);
console.log(nissan.zapravka);
