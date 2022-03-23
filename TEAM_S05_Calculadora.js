let validacion = false;
let resultado = 0;
let regresa = 0;
let num_entrada = 0;
var numero = [];
const operandos = 2;


/* Regresa "true" si el valor de entrada es un número
   y regresa "false" si no lo es*/
function valida(param) {
    if (isNaN(param) || (!param.replace(/\s/g, '').length) ) {
        return false;
    } else {
        return true;
    }
}


/* Función que entra en un loop pidiendo solicitar ingresar un valor,
   solo si la función valida regresa "true" (es decir es un número)
   se sale del loop y regresa este número al llamado de la función */
function ingresa_valor(param) {
    while (validacion != true) {
        num_entrada = prompt(`Escribe el número ${param+1}`);
        validacion = valida(num_entrada);
        if (validacion == false) {
            console.log('Tienes que ingresar un número');
        }    
    }
    return num_entrada;
}

/* Recibe tres parámetros:
   1. op: el operador (sumar, restar, multiplicar o dividir
   2 y 3. Los numeros sobre los que va a ejecutar la operación matemática
   y regresa el resultado de la operación entre ambos */
function calcular(op, num1, num2) {
    switch (op) {
        case "sumar":
            regresa = Number(num1) + Number(num2);
            break;
        
        case "restar":
            regresa = Number(num1) - Number(num2);
            break;
    
        case "multiplicar":
            regresa = Number(num1) * Number(num2);
            break;

        case "dividir":
            if (Number(num2) == 0) {
                regresa = "indefinido"
            } else {
                regresa = Number(num1) / Number(num2);
            }            
            break;
        
        default:
            alert('Entró en el caso default, esto no debería de pasar')
            regresa = null;
            break;
    }
    
    return regresa;

}

/* Escucha sobre el elemento del menú y si hay algún cambio 
   lo cacha en operador.value */
var operador = document.getElementById("operacion");
operador.addEventListener("change", function() {

    for (let i = 0; i < operandos; i++) {
        numero[i] = ingresa_valor(i);
        validacion = false;
    }

    resultado = calcular(operador.value, numero[0],  numero[1]);
        

    console.log(`El resultado de ${operador.value} ${numero[0]} y ${numero[1]} es: ${resultado}     `)
   
});

