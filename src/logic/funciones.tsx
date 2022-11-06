
//------------------------------------------Mini eventos------------------------------------------------------

//Metodo de creacion de minieventos
function crearMiniEvento(nombre : string, hora: number, tematica: string) {

    let miniEvento = new LinkedList();
    miniEvento.pushBack(nombre);
    miniEvento.pushBack(hora);
    miniEvento.pushBack(tematica);
    miniEvento.pushBack(heapMiniEventos.getSize());
  
    heapMiniEventos.insert(heapMiniEventos.getSize(), miniEvento);
    
  }
