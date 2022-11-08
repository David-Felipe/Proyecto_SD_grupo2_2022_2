import fs from 'fs';
import prfh from 'perf_hooks';
import { AvlBst } from './DataStructures/AvlBst';
const performance = prfh.performance;


const header = ["Iteracion", "Tiempo (milisegundos)"]
let currTime;

// ! Creación usuario
const dataContentCr: string[][] = [];
dataContentCr.push(header);
const Usuarios = new AvlBst<string>("0", 0);

// ** Tomando valores cada 100 datos
const START_CR = performance.now();
// Desde 1 hasta 10 a la 12
for (let i = 1; i <= 1000000; i++) {

    Usuarios.insert(i.toString(), i);

    if (i % 100 == 0) {

        currTime = performance.now();

        const currData = [];
        currData.push(i.toString());
        currData.push((currTime - START_CR).toString());
        dataContentCr.push(currData);

    }

}

//exportando resultados creacion
const csvContentCr = "data:text/csv;charset=utf-8\n" + dataContentCr.map(e => e.join(",")).join("\n");

fs.writeFile('DataCr.csv', csvContentCr, (err) => {

    // In case of a error throw err.

    if (err) throw err;

})

// ! borrado de usuarios
const dataContentDl: string[][] = [];
dataContentDl.push(header);

const START_DL = performance.now();
// Desde 1 hasta 10 a la 12
for (let i = 1; i <= 1000000; i++) {

    Usuarios.delete(i);

    if (i % 100 == 0) {

        currTime = performance.now();

        const currData = [];
        currData.push(i.toString());
        currData.push((currTime - START_DL).toString());
        dataContentDl.push(currData);

    }

}

//exportando resultados eliminación
const csvContentDl = "data:text/csv;charset=utf-8\n" + dataContentDl.map(e => e.join(",")).join("\n");

fs.writeFile('DataDl.csv', csvContentDl, (err) => {

    // In case of a error throw err.

    if (err) throw err;

})