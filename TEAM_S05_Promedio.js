
let validacion = false;
let promedio = 0;
let suma = 0;
let resultado = "Promedio("
/*let cal_entrada = 0;*/
var calificaciones = [];
const materias = 5;


/* Regresa "true" si el valor de entrada es un número entre 0 100
   y regresa "false" si no lo es*/
function valida(param) {
    if (param >= 0 && param <= 100 && (param.replace(/\s/g, '').length)) {
        return true;
    } else {
        return false;
    }
}

/* Función que entra en un loop pidiendo solicitar ingresar un valor,
   solo si la función valida regresa "true" (es decir es un número entre 0 y 100)
   se sale del loop y regresa este número al llamado de la función */
function ingresa_valor(param) {
    while (validacion != true) {
        num_entrada = prompt(`Escribe la calificación de la materia ${param+1}`);
        validacion = valida(num_entrada);
        if (validacion == false) {
            console.log('La calificación tiene que ser un número entre 0 y 100');
        }    
    }
    return num_entrada;
}

/* Ciclo for para obtener la calificación de cada una de las materias, 
   son guardadas en el arreglo calificaciones,
   en suma va acumulando cada una de las calificaciones,
   en resultado va concatenando las calificaciones
   y en la variable promedio se obtiene el promedio de las calificaciones*/
for (let i = 0; i < materias; i++) {

    calificaciones[i] = ingresa_valor(i);
    validacion = false;
    suma = Number(suma) + Number(calificaciones[i]);
    
    if (i == (materias-1)) {
        resultado = resultado + calificaciones[i] + ')'
    } else {
        resultado = resultado + calificaciones[i] + ', '
    } 
} 

promedio = suma / materias;
if (promedio >= 70) {
    estatus = 'Aprobado';
} else {
    estatus = 'No aprobado';
}

console.log(`${resultado} // ${estatus}: ${promedio} `);
