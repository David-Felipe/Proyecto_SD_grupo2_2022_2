// //El codigo vuelve a utilizar Indexador simulando la base de datos, esta inicializado con datos de prueba nada mas pero la idea seria que el
// //indexador (base de datos de los usuarios) se traspase de antes para evitar tener que inicilizar en cada metodo el indexador
// class Usuario {
//     constructor(usuario, correo, password, nombre, apellido, edad, listaHobbies) {
//         this.usuario = usuario;
//         this.correo = correo;
//         this.password = password;
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//         this.listaHobbies = listaHobbies;
//     }
// }

// class Indexador {
//     constructor() {
//         // Cada una va en el index que indica ID
//         this.usuarios = ["jaca"]; // aqui van los nombres de usuario
//         this.correos = ["blablabla@unal.edu.co"]; // aqui van los correos
//         this.passwords = ["12345"]; // aqui van las contraseñas
//         this.userObjects = [new Usuario("jaca", "blablabla@unal.edu.co", "12345", "Juan", "Andres", 32, ["Dormir", "Comer", "LoL"])]; // aqui van los objetos de cada usuario
//     }

//     find(user) {
//         const N = this.usuarios.length;
//         for (var i = 0; i < N; i++) {
//             if (user == this.usuarios[i]) {
//                 return this.userObjects[i];
//             }
//         }
//         return null;
//     }

//     findIndex(user) {
//         const N = this.usuarios.length;
//         for (var i = 0; i < N; i++) {
//             if (user == this.usuarios[i]) {
//                 return this.userObjects[i];
//             }
//         }
//         return null;
//     }
// }

// function consulta(user){
//     const index = new Indexador;
//     var usuario = index.find(user);  
//     if(usuario != null){  
//         var nombre = usuario.nombre;
//         var apellido = usuario.apellido;
//         var username = usuario.usuario;
//         var email = usuario.correo;
//         var listaHobbies = usuario.listaHobbies;

//         document.getElementById("inputName").value = nombre;    
//         document.getElementById("inputLastName").value = apellido;
//         document.getElementById("inputUsername").value = username;
//         document.getElementById("inputEmail").value = email;
//         document.getElementById("inputPassword").value = "Password";
//         document.getElementById("inputHobbies").value = listaHobbies;
//         document.getElementById("inputNewPassword").value = "New Password";
//     }else{
//         alert("Error al consultar los registros. ");
//     }
    
// }



// function editar(user){
//     nombre = document.getElementById("inputName").value;
//     apellido = document.getElementById("inputLastName").value;
//     email = document.getElementById("inputEmail").value;
//     username = document.getElementById("inputUsername").value;
//     listaHobbies = document.getElementById("inputHobbies").value;
//     password  = document.getElementById("inputPassword").value; 
//     newPassword  = document.getElementById("inputNewPassword").value; 
    
//     const index = new Indexador;
//     var usuarios = index.usuarios;
//     var correos = index.correos;
//     var passwords = index.passwords;
//     var usuario = index.find(user);
//     var indice = index.findIndex(user);

//     //codigo condiciones para editar
//     if(password == usuario.password){
//         if(username != ""){
//             usuario.nombre = username;
//             usuarios[indice] = username;
//         }
//         if(newPassword != ""){
//             usuario.password = newPassword;
//             passwords[indice] = newPassword;
//         }
//         if(email != ""){
//             usuario.correo = email;
//             correos[indice] = email;
//         }
//         if(nombre != ""){
//             usuario.nombre = nombre;
//         }
//         if(apellido != ""){
//             usuario.apellido = apellido;
//         }
//         if(listaHobbies != ""){
//             usuario.listaHobbies.push(listaHobbies);
//         }
            
//     }else{
//         if(password == ""){
//             alert("La contraseña es obliatoria para editar el Perfil.");
//         }else{
//             alert("La contrasena es incorrecta.");
//         }
        
//     }

//     //Aqui se vuelve a imprimir para verificar que se modifico el indexador
//     if(usuario != null){  
//         var nombre = usuario.nombre;
//         var apellido = usuario.apellido;
//         var username = usuario.usuario;
//         var email = usuario.correo;
//         var listaHobbies = usuario.listaHobbies;

//         document.getElementById("inputName").value = nombre;    
//         document.getElementById("inputLastName").value = apellido;
//         document.getElementById("inputUsername").value = username;
//         document.getElementById("inputEmail").value = email;
//         document.getElementById("inputPassword").value = "Password";
//         document.getElementById("inputHobbies").value = listaHobbies;
//         document.getElementById("inputNewPassword").value = "New Password";
//     }else{
//         alert("Error al consultar los registros. ");
//     }

// }

// function eliminar(user){
//     const index = new Indexador;
//     var indice = index.findIndex(user);
//     var usuario = index.find(user);

//     var password = prompt("Ingrese la contrasena para confirmar.");
//     if(password == usuario.password){
//         index.usuarios.splice(indice,1);
//         index.passwords.splice(indice,1);
//         index.correos.splice(indice,1);
//         index.userObjects.splice(indice,1);
//     }else{
//         alert("Contrasena es incorrecta, no se puede eliminar el usuario. ");
//     }
    
//     //Aqui se vuelve a imprimir para verificar que se elimino el usuario
//     usuario = index.find(user);
//     if(usuario != null){  
//         var nombre = usuario.nombre;
//         var apellido = usuario.apellido;
//         var username = usuario.usuario;
//         var email = usuario.correo;
//         var listaHobbies = usuario.listaHobbies;

//         document.getElementById("inputName").value = nombre;    
//         document.getElementById("inputLastName").value = apellido;
//         document.getElementById("inputUsername").value = username;
//         document.getElementById("inputEmail").value = email;
//         document.getElementById("inputPassword").value = "Password";
//         document.getElementById("inputHobbies").value = listaHobbies;
//         document.getElementById("inputNewPassword").value = "New Password";
//     }else{
//         alert("Error al consultar los registros. ");
//     }
// }