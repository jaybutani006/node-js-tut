const app = require('./app')

console.log('jay');
console.log(app.x)
console.log(app)
console.log(app.z(5, 4))

// for install node moduls just write npm istall
// it will install all the modules which is in the package.json file having.
let arr = [3, 4, 8, 2, 9, 1, 9, 2, 3, 4, 1];

let result = arr.filter((item) => {
    // return item === 4
    return item >= 4
})
console.log(result)