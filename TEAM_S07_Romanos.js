 
let validacion = false;

/* Regresa "true" si el valor de entrada es un número entre 1 y 3999
   y regresa "false" si no lo es*/
function valida(param) {
    if (param >= 1 && param <= 3999 && (param.replace(/\s/g, '').length)) {
        return true;
    } else {
        return false;
    }
}

/* Función que entra en un loop pidiendo solicitar ingresar un valor,
   solo si la función valida regresa "true" (es decir es un número entre 1 y 3999)
   se sale del loop y regresa este número al llamado de la función */
function ingresa_valor() {
    while (validacion != true) {
        num_entrada = prompt("Escribe un número:");
        validacion = valida(num_entrada);
        if (validacion == false) {
            console.log('Ingresa un número entre 1 y 3999');
        }    
    }
    return num_entrada;
}


let numero = ingresa_valor();
console.log(numero);
let millares = Math.trunc(numero / 1000);
numero = numero % 1000;
let centenas = Math.trunc(numero / 100);
numero = numero % 100;
let decenas = Math.trunc(numero / 10);
let unidades = numero % 10;

const M = {0: '', 1: 'M', 2: 'MM', 3: 'MMM'};
const C = {0: '', 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM'};
const D = {0: '', 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC'};
const U = {0: '', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX'};

console.log(M[millares] + C[centenas] + D[decenas] + U[unidades]);

