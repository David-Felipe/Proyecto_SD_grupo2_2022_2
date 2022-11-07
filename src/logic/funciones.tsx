
//------------------------------------------Mini eventos------------------------------------------------------

import { LinkedList } from "DataStructures/LinkedList";

//Metodo de creacion de minieventos

export let heapMiniEventos = new Heap(1000);

function crearMiniEvento( name: string,distancia: number,address: string,time_begin: Date,time_end: Date,thematics: string[]) {

    let miniEvento = new LinkedList();
    miniEvento.pushBack(name);
    miniEvento.pushBack(distancia);
    miniEvento.pushBack(address);
    miniEvento.pushBack(time_begin);
    miniEvento.pushBack(time_end);
    miniEvento.pushBack(thematics);
    miniEvento.pushBack(heapMiniEventos.getSize());
  
    heapMiniEventos.insert(heapMiniEventos.getSize(), miniEvento);
    
  }
