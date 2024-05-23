// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//
//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));
//
//     document.head.append(script);
// }

// let promise = new Promise(function(resolve, reject) {
//     // функция-исполнитель (executor)
//     // "певец"
// });

// let promise = new Promise(function(resolve, reject) {
//     // эта функция выполнится автоматически, при вызове new Promise
//
//     // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//     setTimeout(() => resolve("done"), 1000);
// });


// let promise = new Promise(function(resolve, reject) {
//     resolve("done");
//
//     reject(new Error("…")); // игнорируется
//     setTimeout(() => resolve("…")); // игнорируется
// });


// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 1000);
// });
//
// // resolve запустит первую функцию, переданную в .then
// promise.then(
//     result => alert(result), // выведет "done!" через одну секунду
//     error => alert(error) // не будет запущена
// );

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });
//
// // reject запустит вторую функцию, переданную в .then
// promise.then(
//     result => alert(result), // не будет запущена
//     error => alert(error) // выведет "Error: Whoops!" спустя одну секунду
// );



// Promise.all([
//     fetch('/template.html'),
//     fetch('/style.css'),
//     fetch('/data.json')
// ]).then(render);
// console.log(promise)

let urls = [
    'https://api.github.com/users/crypolt',
    'https://api.github.com/users/remykjjkj',
    'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => { // (*)
        results.forEach((result, num) => {
            if (result.status === "fulfilled") {
                console.log(`${urls[num]}: ${result.value.status}`);
            }
            if (result.status === "rejected") {
                console.log(`${urls[num]}: ${result.reason}`);
            }
        });
    });