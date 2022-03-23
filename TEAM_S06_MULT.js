//var control = 0;
var lista = [];

for (let i = 0; i < 100; i++) {
    lista[i] = i + 1;
}

const reemplaza = lista.map(function (item) {
    if (item % 3 == 0 && item % 5 == 0) {
        return 'FizzBuzz'
    } else { if (item % 3 == 0) {
        return 'Fizz'
    } else { if (item % 5 == 0) {
        return 'Buzz'
    } else {
        return item;
    }}}
})

console.log(reemplaza);