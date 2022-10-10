//Cola de MiniEventos
let colaMiniEventos = new Queue();

  //Testeando todo
const fs = require('fs');
const prfh = require('perf_hooks');
let performance = prfh.performance;

let dataContentCr = [];

let headerCR = ["Iteracion", "Tiempo (milisegundos)"]
dataContentCr.push(headerCR);

// ! Creación minievento
// ** Tomando valores cada 100 datos
let currTime;
const START_CR = performance.now();
// Desde 1 hasta 10 a la 12
for (let i = 1; i <= 100000; i++) {

    crearMiniEvento(i.toString(), i.toString(), i.toString());

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

fs.writeFile('DataCME.csv', csvContentCr, (err) => {
      
    // In case of a error throw err.

    if (err) throw err;

});

// ! Eliminacion de minievento
// ** ya que los demas usan lo mismo el tiempo asimptotico debería ser igual
let dataContentDl = [];
dataContentDl.push(headerCR);

const START_DL = performance.now();
// Desde 1 hasta 10 a la 12
for (let i = 100000; i > 0; i--) {

  eliminarMiniEvento();

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

fs.writeFile('DataEME.csv', csvContentDl, (err) => {
      
    // In case of a error throw err.
    if (err) throw err;

});
