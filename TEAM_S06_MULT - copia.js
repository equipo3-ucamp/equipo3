var control = 0;
var lista = [];
/*
for (let i = 1; i <= 20; i++) {
    //console.log(`residuo de ${i} entre 3 es ${i % 3}`);
    if (i % 3 == 0) {
        control = control + 1;
    }
    if (i % 5 == 0) {
        control = control + 2;
    }

    switch (control) {
        case (1) :
            console.log('Fizz');
            break;
        
        case (2) :
            console.log('Buzz');
            break;
    
        case (3) :
            console.log('FizzBuzz');
            break;
    

        default:
            console.log(i);
            break;
    }
    control = 0;
    
}*/

for (let i = 0; i < 100; i++) {
    lista[i] = i + 1
    
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