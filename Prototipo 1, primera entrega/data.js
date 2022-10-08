/*La verda todavia no se como debe ser la 
arquitectura de un proyecto de esto, pero bueno ahi voy adelantando */

/* Aqui se guarda la info verificable y los objetos que apuntan a cada usuario,
no se asusten, dice clase, pero en realidad es un objeto, en javascipt 'class' es solo
syntantic sugar*/
class Indexador {

    constructor () {

        // Cada una va en el index que indica ID
        this.usuarios = [];      // aqui van los nombres de usuario
        this.correos = [];       // aqui van los correos
        this.passwords = [];     // aqui van las contraseñas
        this.userObjects = [];   // aqui van los objetos de cada usuario

    }

}

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
        indexadorAct.usuarios.push(usuario);
        indexadorAct.correos.push(correo);
        indexadorAct.passwords.push(password);
        
        //Creando el objeto del usuario y poniendolo en el lugar respectivo de indexadorAct
        nuevoUsuario = new Usuario(usuario, correo, password, nombre, apellido, edad, listaHobbies);
        indexadorAct.userObjects.push(nuevoUsuario);

    }

    assignId() {
        
        //El id por ahora va a ser sencillo, solo es la posicion dentro del indexador
        currentId = this.idAnterior;
        idAnterior++;

        return currentId;

    }

}
