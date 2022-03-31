var resultado = [];

/* En resultado se obtiene la sumatoria de las ocurrencias en el arreglo como key: <sumatoria>, por ejemplo:
    mexicano: 2
    argentino: 3
    venezolano: 2
    peruano: 2

   En ajustados se hace un reemplazo con .map en base al arreglo reemplazos, para que la salida sea como se
   solicito, por ejemplo:
    Mexicanos: 2
    Argentinos: 3
    Venezolanos: 2
    Peruanos: 2
  
*/
// 
function contar(array) {
    resultado = array.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        }, {});

    //console.log(resultado);

    const reemplazos = {'mexicano': 'Mexicanos', 'argentino': 'Argentinos', 'venezolano': 'Venezolanos', 'peruano': 'Peruanos'};
    
    let ajustados = Object.keys(resultado).map((key) => {
        const newKey = reemplazos[key] || key;
        return {[newKey] : resultado[key]};

    });

    console.log(ajustados);

}

