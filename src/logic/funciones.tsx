
//------------------------------------------Mini eventos------------------------------------------------------

//Metodo de creacion de minieventos

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
