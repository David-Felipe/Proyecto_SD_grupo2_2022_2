//Metodo de creacion de minieventos
function crearMiniEvento(nombre, hora, tematica) {

  let miniEvento = new Stack();
  miniEvento.push(nombre);
  miniEvento.push(hora);
  miniEvento.push(tematica);

  colaMiniEventos.enqueue(miniEvento);
  
}


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
    //console.log(eliminado);
}
//PD:funciona con las estructuras de datos implementadas en el documento de laura

//Implementacion de estructuras
class Stack {

    constructor() {
      this.stack = {};
      this.count = 0;
    }
  
    push(element) {
      this.stack[this.count] = element;
      this.count++;
      return this.stack;
    }
  
    pop() {
      this.count--;
      const element = this.stack[this.count];
      delete this.stack[this.count];
      return element;
    }
  
    peek() {
      return this.stack[this.count - 1];
    }
  
    size() {
      return this.count;
    }
  
    print() {
      console.log(this.stack);
    }
  }
  
  class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element) {
      this.queue.push(element);
      return this.queue;
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    peek() {
      return this.queue[0];
    }
  
    size() {
      return this.queue.length;
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    print() {
      return this.queue;
    }
  }