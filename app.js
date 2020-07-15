const argv = require('./config/yargs').argv;
//requireds
const colors = require('colors');
//const fs = require('express'); son paquetes que no son nativos de node
//const fs = require('./fs'); son los que creamos en el node nosotros
const { crearArchivo, listartabla } = require('./multiplicar/multiplicar.js');
// el const{} es una destructuracion
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listartabla(argv.base, argv.limite);

        //console.log('Listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));

        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(process.argv); //muestra el pad
let argv2 = process.argv;
/* let parametro = argv[2];
let base = parametro.split('=')[1]; //me toma lo que esta despues del =
 */
//console.log('limite', argv.limite);
//console.log(argv.base);
//console.log(argv2);
//console.log('Limite', argv.limite);
/* crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e)); */