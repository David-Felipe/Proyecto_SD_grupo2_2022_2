"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var perf_hooks_1 = __importDefault(require("perf_hooks"));
var AvlBst_1 = require("./DataStructures/AvlBst");
var performance = perf_hooks_1.default.performance;
var header = ["Iteracion", "Tiempo (milisegundos)"];
var currTime;
// ! Creación usuario
var dataContentCr = [];
dataContentCr.push(header);
var Usuarios = new AvlBst_1.AvlBst("0", 0);
// ** Tomando valores cada 100 datos
var START_CR = performance.now();
// Desde 1 hasta 10 a la 12
for (var i = 1; i <= 1000000; i++) {
    Usuarios.insert(i.toString(), i);
    if (i % 100 == 0) {
        currTime = performance.now();
        var currData = [];
        currData.push(i.toString());
        currData.push((currTime - START_CR).toString());
        dataContentCr.push(currData);
    }
}
//exportando resultados creacion
var csvContentCr = "data:text/csv;charset=utf-8\n" + dataContentCr.map(function (e) { return e.join(","); }).join("\n");
fs_1.default.writeFile('DataCr.csv', csvContentCr, function (err) {
    // In case of a error throw err.
    if (err)
        throw err;
});
// ! borrado de usuarios
var dataContentDl = [];
dataContentDl.push(header);
var START_DL = performance.now();
// Desde 1 hasta 10 a la 12
for (var i = 1; i <= 1000000; i++) {
    Usuarios.delete(i);
    if (i % 100 == 0) {
        currTime = performance.now();
        var currData = [];
        currData.push(i.toString());
        currData.push((currTime - START_DL).toString());
        dataContentDl.push(currData);
    }
}
//exportando resultados eliminación
var csvContentDl = "data:text/csv;charset=utf-8\n" + dataContentDl.map(function (e) { return e.join(","); }).join("\n");
fs_1.default.writeFile('DataDl.csv', csvContentDl, function (err) {
    // In case of a error throw err.
    if (err)
        throw err;
});
