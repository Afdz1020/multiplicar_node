const argv = require("./config/yargs").argv;
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const colors = require("colors");

let comando = argv._[0];

switch (comando) {
  case "listar":
    console.log("listar");
    listarTabla(argv.base, argv.limite);
    break;
  case "crear":
    console.log("crear");
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo Creado ${archivo}`))
      .catch(err => console.log(err));
    break;
  default:
    console.log("Comando no reconocido");
    break;
}

/* ; */
