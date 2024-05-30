// // function loadScript(src) {
// //     let script = document.createElement('script');
// //     script.src = src;
// //     document.head.append(script);
// // }
//
// let counter = 0;
// function func() {
//     counter++;
//     console.log('counter'+ counter);
// }
//
//


// const arr = [1,5,6,2,-2,-10,-1421];
// function bubblesort(arr){
//     for (let i= 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubblesort(arr));


class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    inform(){
        console.log('human:  ' + this.name + '| email: ' + this.email + '| password:  ' + this.password);
    }
}

let vlados = new User('vlados','vlados@mail.com','vlados');


vlados.inform()

