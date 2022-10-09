/*La verda todavia no se como debe ser la 
arquitectura de un proyecto de esto, pero bueno ahi voy adelantando */

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
        if (this.head == null) {

            this.tail = new Node(user,password,objects);
            this.head = this.tail;
            this.length++;

        } else {

            let node = new Node(user,password,objects);
            this.tail.setNext(node);
            this.tail = node;
            this.length++;

        }
    }
  
    //** add to the beggining  */
    prepend(user,password,objects) {

        if (this.head != null) {

            this.tail = new Node(user, password, objects);
            this.head = this.tail;
            this.length++;

        } else {

            let node = new Node(user,password,objects);
            node.setNext(this.head);
            this.head = node;
            this.length++;

        }

    }

    removeFirst() {

        if (this.head == null) {

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

            this.length--;
            return tempHead;

        }

    }

    //removeLast con enlazada simple no me acuerdo en este momento como se hacia pero ahorita reviso
    removeLast() {

        if (this.head == null) {

            throw new Error("The list is empty");

        } else {

            let tempTail = this.tail;
        
            if (this.tail == this.head) {

                this.tail = null;
                this.head = null;

            } else {

                let currentNode = this.head;

                do{

                    before = currentNode;
                    currentNode = currentNode.next;

                } while (currentNode != node)

                before.next = node.next;

                this.length--;
                return tempTail;

            }
        }
    }

    //Busca en la base de datos un usuario
    searchUser(user) {

      let currentNode = this.head;

      while (currentNode != null) {

        if (currentNode.usuario == user) {

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

            let currentNode = this.head;
            let before = null;

            do{

                before = currentNode;
                currentNode = currentNode.next;

            } while (currentNode != node)

            before.next = node.next;
            this.length--;

        }

    }

}

// Esta lista enlazada funciona como base de datos de todos los usuarios
 var bdUsuarios = new LinkedList;      // aqui una lista enlazada que tiene usuario,password y un objeto usuario para los demas datos del mismo

// Usen el metodo crearUsuario() cuando creen un usuario
class Usuario {

    idAnterior = 0;

    /*Javascript no deja poner esto privado, pero la idea es que creen
    los usuarios con el metodo y no con el constructor*/
    constructor (usuario, correo, password, nombre, apellido, listaHobbies) {

        this.usuario = usuario;
        this.correo = correo;
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.listaHobbies = listaHobbies;

    }       

}

function crearUsuario(usuario, password, nombre, apellido, email, listaHobbies) {

    //Pasando los verificables al indexador
    let user = new Usuario(usuario, email, password, nombre, apellido, listaHobbies);
    bdUsuarios.append(usuario, password, user);
    alert("El usuario fue creado");

}

function creacion() {

    let username = document.getElementById("inputUsername").value;
    let password  = document.getElementById("inputPassword").value; 
    let nombre = document.getElementById("inputName").value;
    let apellido = document.getElementById("inputLastName").value;
    let email = document.getElementById("inputEmail").value;
    let listaHobbies = document.getElementById("inputHobbies").value;

    if (username == "") {

        alert("Usuario no puede estar vacio");
        return;

    } else if (password == "") {

        alert("Password no puede estar vacio");
        return;

    } else if (nombre == "") {

        alert("Nombre no puede estar vacio");
        return;

    } else if (apellido == "") {

        alert("Apellido no puede estar vacio");
        return;

    } else if (email == "") {

        alert("Email no puede estar vacio");
        return;

    } else if (listaHobbies == "") {

        alert("Hobbies no puede estar vacio");
        return;

    }

    crearUsuario(username, password, nombre, apellido, email, listaHobbies);

}

//Codigo para consulta: este retorna los datos de un usuario especifico evitando mostrar la contraseña 
function consultaPorUser(){

    let inUserName = document.getElementById("inputUsername").value;

    let node = bdUsuarios.searchUser(inUserName);  
    let usuario = node.userObjects;

    if(usuario != null){  

        let nombre = usuario.nombre;
        let apellido = usuario.apellido;
        let username = usuario.usuario;
        let email = usuario.correo;
        let listaHobbies = usuario.listaHobbies;

        document.getElementById("inputName").value = nombre;    
        document.getElementById("inputLastName").value = apellido;
        document.getElementById("inputUsername").value = username;
        document.getElementById("inputEmail").value = email;
        document.getElementById("inputPassword").value = "Password";
        document.getElementById("inputHobbies").value = listaHobbies;
        document.getElementById("inputNewPassword").value = "New Password";

    }else{

        alert("Error al consultar los registros, el usuario no existe. ");

    }
    
}

//Este metodo captura los datos ingresados para editarlos y si la contraseña no corresponde no permite editar
function editar(){

    let nombre = document.getElementById("inputName").value;
    let apellido = document.getElementById("inputLastName").value;
    let email = document.getElementById("inputEmail").value;
    let username = document.getElementById("inputUsername").value;
    let listaHobbies = document.getElementById("inputHobbies").value;
    let password  = document.getElementById("inputPassword").value; 
    let newPassword  = document.getElementById("inputNewPassword").value; 
    
    let node = bdUsuarios.searchUser(username);
    let objectUsuario = node.userObjects;

    //codigo condiciones para editar
    if(password == node.password){

        if(username != ""){
            node.usuario = username;
            objectUsuario.usuario = username;
        }
        if(newPassword != ""){
            node.password = newPassword;
            objectUsuario.password = newPassword;
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
            objectUsuario.listaHobbies = listaHobbies;
        }

        alert("El usuario fue editado");
            
    }else{

        if(password == ""){

            alert("La contraseña es obligatoria para editar el Perfil.");

        }else{

            alert("La contrasena es incorrecta.");

        }
        
    }

}

//Codigo para eliminar un usuario y pide ingresar la contraseña a modo de confirmacion de la orden
function eliminarPorUser(){

    let username = document.getElementById("inputUsername").value;
    
    let node = bdUsuarios.searchUser(username);
    let password = prompt("Ingrese la contrasena para confirmar.");
    
    if (node == null) {

        alert("El usuario no existe");
        return;

    }

    if (password == node.password) {

        bdUsuarios.remove(node);
        alert("El usuario ha sido eliminado");

    } else {

        alert("Contrasena es incorrecta, no se puede eliminar el usuario. ");

    }

}

//Codigo para iniciar sesion
function iniciarSesion( usuario, contraseña) {

    let userBuscado = bdUsuarios.searchUser(usuario);
    let correctPassword = userBuscado.password;

    if (contraseña === correctPassword) {

      return true;

    } else {

      return false;

    }

  }
