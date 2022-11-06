import React from "react";

export default interface Evento{
        name: string;
        distancia: number;
        address: string;
        time_begin: Date;
        time_end: Date;
        thematics: string[];
}