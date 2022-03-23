var resultado = [];

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

