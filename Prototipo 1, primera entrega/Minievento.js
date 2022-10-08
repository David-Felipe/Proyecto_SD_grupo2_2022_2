
  //actualiza la informacion de un minievento PD: debido a el uso de pilas es necesario vaciar y llenar nuevamente la pila en cada actualizacion. 
  // recibe: el minievento y valores a modificar (si solo se desea modificar un valor entonces se reingresa el valor original)
  function actualizacionMiniEvento(miniEvento,nuevonombre,nuevahora,nuevatematica){
      //vacia los datos actuales del minievento
      miniEvento.pop();
      miniEvento.pop();
      miniEvento.pop();
      //ingresa los nuevos datos.
      miniEvento.push(nuevonombre);
      miniEvento.push(nuevahora);
      miniEvento.push(nuevatematica);
      console.log(miniEvento.print())
      colaMiniEventos.enqueue(miniEvento);
  }
  //datos de prueba:
  // crearMiniEvento("futbol","10 pm","futbol");
  // console.log("ok")
  // actualizacionMiniEvento(colaMiniEventos.dequeue(),"microfutbol","9 pm", "futbol")


  //elimina el ultimo minievento de la cola 
  function eliminarMiniEvento(){
      eliminado = colaMiniEventos.dequeue();
      //con fines de control, devolvemos el elemento eliminado.
      console.log(eliminado);
  }
  //PD:funciona con las estructuras de datos implementadas en el documento de laura