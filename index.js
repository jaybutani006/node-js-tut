const app = require('./app')

console.log('jay');
console.log(app.x)
console.log(app)
console.log(app.z(5, 4))

let arr = [3, 4, 8, 2, 9, 1, 9, 2, 3, 4, 1];

let result = arr.filter((item) => {
    // return item === 4
    return item >= 4
})
console.log(result)