//Testeando todo
const fs = require('fs');
const prfh = require('perf_hooks');
let performance = prfh.performance;
const ENES = 2;

let dataContentCr = [];
let namesInserted = new LinkedList;

let headerCR = ["Iteracion", "Tiempo (milisegundos)"]
dataContentCr.push(headerCR);

// ! Creación usuario
// ** Tomando valores cada 100 datos
let currTime;
const START_CR = performance.now();
// Desde 1 hasta 10 a la 12
for (let i = 1; i <= 1000000; i++) {

    crearUsuario(i.toString(),i.toString(),i.toString(),i.toString(),i.toString(),i.toString());

    if(i % 100 == 0) {

        currTime = performance.now();
        
        let currData = [];
        currData.push(i.toString());
        currData.push((currTime - START_CR).toString());
        dataContentCr.push(currData);

    }

}

//exportando resultados creacion
let csvContentCr = "data:text/csv;charset=utf-8\n" + dataContentCr.map(e => e.join(",")).join("\n");

fs.writeFile('DataCr.csv', csvContentCr, (err) => {
      
    // In case of a error throw err.

    if (err) throw err;

});

// ! Eliminacion de usuario
// ** ya que los demas usan lo mismo el tiempo asimptotico debería ser igual
let dataContentDl = [];
dataContentDl.push(headerCR);

const START_DL = performance.now();
// Desde 1 hasta 10 a la 12
for (let i = 100000; i > 0; i--) {

    let node = bdUsuarios.searchUser(i.toString());
    bdUsuarios.remove(node);

    if(i % 100 == 0) {

        currTime = performance.now();
        
        let currData = [];
        currData.push(i.toString());
        currData.push((currTime - START_CR).toString);
        dataContentDl.push(currData);

    }

}

//exportando resultados creacion
let csvContentDl = "data:text/csv;charset=utf-8\n" + dataContentCr.map(e => e.join(",")).join("\n");

fs.writeFile('DataDl.csv', csvContentDl, (err) => {
      
    // In case of a error throw err.
    if (err) throw err;

});