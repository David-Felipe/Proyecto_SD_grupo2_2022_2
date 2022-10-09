

// function iniciarSesion(listaUsuarios, listaContraseña, usuario, contraseña) {
//   id = listaUsuarios.search(usuario);
//   //window.alert(id);
//   contraseñaCorrecta = listaContraseña.searchElem(id);
//   // window.alert(contraseñaCorrecta);
//   if (contraseña == contraseñaCorrecta) {
//     return true;
//   } else {
//     return false;
//   }
// }

// colaMiniEventos = new Queue();

// function crearMiniEvento(nombre, hora, tematica) {
//   miniEventos = new Stack();
//   miniEvento.push(nombre);
//   miniEvento.push(hora);
//   miniEvento.push(tematica);

//   colaMiniEventos.enqueue(miniEvento);
// }

// //Estructuras de datos usadas :3

// class LinkedList {
//     constructor() {
//       this.head = null;
//       this.tail = null;
//       this.length = 0;
//     }
  
//     //** add at the end of the linked list */
//     append(value) {
//       // if empty
//       if (!this.tail) {
//         this.tail = { value };
//         this.head = this.tail;
//       } else {
//         let oldTail = this.tail;
//         this.tail = { value };
//         oldTail.next = this.tail;
//         this.tail.prev = oldTail;
//       }
//       this.length++;
//     }
  
//     //** add to the beggining  */
//     prepend(value) {
//       if (!this.head) {
//         this.tail = { value };
//         this.head = this.tail;
//       } else {
//         let oldHead = this.head;
//         this.head = { value };
//         oldHead.prev = this.head;
//         this.head.next = oldHead;
//       }
//       this.length++;
//     }
//     removeFirst() {
//       if (!this.head) {
//         throw new Error("The list is empty");
//       } else {
//         let tempHead = this.head;
//         // ** when theres only one node
//         if (this.head === this.tail) {
//           this.head = null;
//           this.tail = null;
//         } else {
//           this.head = this.head.next;
//           this.head.prev = null;
//         }
//         this.length--;
//         return tempHead.value;
//       }
//     }
//     removeLast() {
//       if (!this.tail) {
//         return null;
//       } else {
//         let tempTail = this.tail;
//         if (this.tail === this.head) {
//           this.tail = null;
//           this.head = null;
//           this.length--;
//         } else {
//           this.tail = this.tail.prev;
//           this.tail.next = null;
//           this.length--;
//           return tempTail.value;
//         }
//       }
//     }
//     search(value) {
//       let currentNode = this.head;
//       let x = 0;
//       while (currentNode) {
//         x++;
//         if (currentNode.value === value) {
//           return x;
//         }
//         currentNode = currentNode.next;
//       }
//       return null;
//     }
//     searchElem(id) {
//       let currentNode = this.head;
//       let x = 0;
//       while (currentNode) {
//         x++;
//         if (x === id) {
//           return currentNode.value;
//         }
//         currentNode = currentNode.next;
//       }
//       return null;
//     }
//     remove(value) {
//       let tempNode = this.search(value);
  
//       if (tempNode === this.tail) {
//         this.removeLast();
//         return;
//       } else if (tempNode === this.head) {
//         this.removeFirst();
//         return;
//       } else {
//         tempNode.prev.next = tempNode.next;
//         tempNode.next.prev = tempNode.prev;
//       }
//       this.length--;
//     }
//   }
  
//   class Stack {
//     constructor() {
//       this.stack = {};
//       this.count = 0;
//     }
  
//     push(element) {
//       this.stack[this.count] = element;
//       this.count++;
//       return this.stack;
//     }
  
//     pop() {
//       this.count--;
//       const element = this.stack[this.count];
//       delete this.stack[this.count];
//       return element;
//     }
  
//     peek() {
//       return this.stack[this.count - 1];
//     }
  
//     size() {
//       return this.count;
//     }
  
//     print() {
//       console.log(this.stack);
//     }
//   }
  
//   class Queue {
//     constructor() {
//       this.queue = [];
//     }
  
//     enqueue(element) {
//       this.queue.push(element);
//       return this.queue;
//     }
  
//     dequeue() {
//       return this.queue.shift();
//     }
  
//     peek() {
//       return this.queue[0];
//     }
  
//     size() {
//       return this.queue.length;
//     }
  
//     isEmpty() {
//       return this.queue.length === 0;
//     }
  
//     print() {
//       return this.queue;
//     }
//   }
