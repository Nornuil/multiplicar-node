const fs = require('fs');
const colors = require('colors');
let listartabla = (base, limite = 10) => {

    console.log('==================='.green);
    console.log(`====Tabla de ${base}=====`.red);
    console.log('==================='.blue);
    for (let i = 1; i <= limite; i++) {
        //console.log(i * base);
        console.log(`${base} * ${i} = ${base*i}`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        //para cuando no se un numero el if
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            //console.log(i * base);
            data += (`${base} * ${i} = ${base*i}\n`);
        }


        fs.writeFile(`tablasmulti/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt ha sido creado`);


        });

    });
}

module.exports = {
    crearArchivo,
    listartabla
}