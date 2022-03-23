let suma = 0;
let resultado = 0;
let numero = true;
let estatus = "";

/* Regresa "true" si el valor de entrada es un número entre 0 100
   y regresa "false" si no lo es*/
function valida(param) {
    if (!isNaN(param) && param >= 0 && param <= 100) {
        return true;
    } else {
        return false;
    }
}

function promedio(val0, val1, val2, val3, val4) {
    // Ejecuta la función valida en el ciclo for para revisar si los parpametros ingresados son números
    for (let i = 0; i < 5; i++) {
        numero = valida(arguments[i]);
        if (numero == false) {            
            i = 999; 
        }
    }

    // Si son números los suma y saca el promedio
    if (numero == true) {
        for (let i = 0; i < 5; i++) {
            suma = suma + Number(arguments[i])   
        }
        
        resultado = Number(suma) / 5;

        // Guarda en "estatus" si se aprueba o no (resultado >= 70)
        if (resultado >= 70) {
            estatus = 'Aprobado';
        } else {
            estatus = 'No aprobado';
        }
        console.log(`${estatus}: ${resultado} `)
    } else /*si no son números entra en este else */ {
        console.log('No se escribieron valores numéricos entre 0 y 100');
    }    
}
