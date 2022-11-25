import React from "react";

export default interface Evento{
        name: string;
        distancia: number;
        address: string;
        time_begin: Date;
        time_end: Date;
        thematics: boolean[]; 
        // la posicion equivale  a una tematica true or false si se cumple
        // 0 --> DEPORTE
        // 1 --> SOCIALIZAR
        // 2 --> LECTURA
        // 3 --> MUSICA
        // 4 --> JUEGOS
        // 5 --> Otros
}