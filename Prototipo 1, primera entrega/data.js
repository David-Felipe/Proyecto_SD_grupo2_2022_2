/*La verda todavia no se como debe ser la 
arquitectura de un proyecto de esto, pero bueno ahi voy adelantando */

/* Aqui se guarda la info verificable y los objetos que apuntan a cada usuario,
no se asusten, dice clase, pero en realidad es un objeto, en javascipt 'class' es solo
syntantic sugar*/

// Esta lista enlazada funciona como base de datos de todos los usuarios
 var bdUsuarios = new LinkedList;      // aqui una lista enlazada que tiene usuario,password y un objeto usuario para los demas datos del mismo


// Usen el metodo crearUsuario() cuando creen un usuario
class Usuario {

    idAnterior = 0;

    /*Javascript no deja poner esto privado, pero la idea es que creen
    los usuarios con el metodo y no con el constructor*/
    constructor (usuario, correo, password, nombre, apellido, edad, listaHobbies) {

        this.ID = assignId();
        this.usuario = usuario;
        this.correo = correo;
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.listaHobbies = listaHobbies;

    }       

    crearUsuario(indexadorAct, usuario, correo, password, nombre, apellido, edad, listaHobbies) {

        //Pasando los verificables al indexador
        user = new Usuario(usuario,correo,password,nombre,apellido,edad,listaHobbies);
        bdUsuarios.append(usuario,password,user);

    }

    assignId() {
        
        //El id por ahora va a ser sencillo, solo es la posicion dentro del indexador
        currentId = this.idAnterior;
        idAnterior++;

        return currentId;

    }

}

//Codigo para consulta: este retorna los datos de un usuario especifico evitando mostrar la contraseña 
function consulta(user){
    var node = bdUsuarios.search(user);  
    var usuario = node.userObjects;
    if(usuario != null){  
        var nombre = usuario.nombre;
        var apellido = usuario.apellido;
        var username = usuario.usuario;
        var email = usuario.correo;
        var listaHobbies = usuario.listaHobbies;

        document.getElementById("inputName").value = nombre;    
        document.getElementById("inputLastName").value = apellido;
        document.getElementById("inputUsername").value = username;
        document.getElementById("inputEmail").value = email;
        document.getElementById("inputPassword").value = "Password";
        document.getElementById("inputHobbies").value = listaHobbies;
        document.getElementById("inputNewPassword").value = "New Password";
    }else{
        alert("Error al consultar los registros. ");
    }
    
}

//Este metodo captura los datos ingresados para editarlos y si la contraseña no corresponde no permite editar
function editar(user){
    nombre = document.getElementById("inputName").value;
    apellido = document.getElementById("inputLastName").value;
    email = document.getElementById("inputEmail").value;
    username = document.getElementById("inputUsername").value;
    listaHobbies = document.getElementById("inputHobbies").value;
    password  = document.getElementById("inputPassword").value; 
    newPassword  = document.getElementById("inputNewPassword").value; 
    
    var node = bdUsuarios.search(user);  
    var objectUsuario = node.userObjects;

    //codigo condiciones para editar
    if(password == usuario.password){
        if(username != ""){
            node.usuario = username;
            objectUsuario.usuario = username;
        }
        if(newPassword != ""){
            node.password = password;
            objectUsuario.password = password;
        }
        if(email != ""){
            objectUsuario.correo = email;
        }
        if(nombre != ""){
            objectUsuario.nombre = nombre;
        }
        if(apellido != ""){
            objectUsuario.apellido = apellido;
        }
        if(listaHobbies != ""){
            objectUsuario.listaHobbies.push(listaHobbies);
        }
            
    }else{
        if(password == ""){
            alert("La contraseña es obliatoria para editar el Perfil.");
        }else{
            alert("La contrasena es incorrecta.");
        }
        
    }
}

//Codigo para eliminar un usuario y pide ingresar la contraseña a modo de confirmacion de la orden
function eliminar(user){
    var node = bdUsuarios.search(user);  

    var password = prompt("Ingrese la contrasena para confirmar.");
    if(password == usuario.password){
        bdUsuarios.remove(node);
    }else{
        alert("Contrasena es incorrecta, no se puede eliminar el usuario. ");
    }
}

//Codigo para iniciar sesion
function iniciarSesion( usuario, contraseña) {
    contraseñaCorrecta = bdUsuarios.search(usuario);
    // window.alert(contraseñaCorrecta);
    if (contraseña == contraseñaCorrecta) {
      return true;
    } else {
      return false;
    }
  }

class Node{
    constructor(user,password,objects){
        this.usuario = user;
        this.password = password;
        this.userObjects = objects;
        this.next = null;
    }

    setNext(next){
        this.next = next;
    }

    setUser(user){
        this.user = user;
    }

    setPassword(password){
        this.password = password;
    }

    setObjects(objects){
        this.userObjects = objects;
    }

}
//Codigo para la lista enlazada
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
  
    //** add at the end of the linked list */
    append(user,password,objects) {
        // if empty
        if (this.tail != null) {
            this.tail = new Node(user,password,objects);
            this.head = this.tail;
        } else {
            let oldTail = this.tail;
            node = new Node(user,password,objects);
            this.tail.setNext(node);
            this.tail = node;
        }
    }
  
    //** add to the beggining  */
    prepend(user,password,objects) {
        if (this.head != null) {
            this.tail = new Node(user,password,objects);
            this.head = this.tail;
        } else {
            node = new Node(user,password,objects);
            node.setNext(this.head);
            this.head = node;
        }
    }

    removeFirst() {
        if (this.head != null) {
            throw new Error("The list is empty");
        } else {
            let tempHead = this.head;
            // ** when theres only one node
            if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
            } else {
            this.head = this.head.next;
            }
            return tempHead;
        }
    }

    //removeLast con enlazada simple no me acuerdo en este momento como se hacia pero ahorita reviso
    removeLast() {
        if (this.tail != null) {
            return null;
        } else {
            let tempTail = this.tail;
            if (this.tail == this.head) {
            this.tail = null;
            this.head = null;
            } else {
                currentNode = this.head;
                do{
                    before = currentNode;
                    currentNode = currentNode.next;
                }while(currentNode != node)
                before.next = node.next;
            return tempTail;
            }
        }
    }

    search(value) {
      let currentNode = this.head;
      while (currentNode != null) {
        if (currentNode.nombre == value) {
            return currentNode;
        }
        currentNode = currentNode.next;
      }
      return null;
    }

    //Remueve ya teniendo una referencia a un nodo
    remove(node) { 
        if (node == this.head) {
            this.removeFirst();
            return;
        } else {
            currentNode = this.head;
            before = null;
            do{
                before = currentNode;
                currentNode = currentNode.next;
            }while(currentNode != node)
            before.next = node.next;
        }
    }
  }