import Heap from "DataStructures/Heap";
//------------------------------------------Mini eventos------------------------------------------------------

//Heap de MiniEventos
const heapMiniEventos = new Heap(1000);

class miniEvento {
    private name: string;
    private distancia: number;
    private address: string;
    private time_begin: Date;
    private time_end: Date;
    private thematics: string[];
    private id: number;

    constructor (name: string,distancia: number,address: string,time_begin: Date,time_end: Date,thematics: string[], id: number){
        this.name = name;
        this.distancia = distancia;
        this.address = address;
        this.time_begin = time_begin;
        this.time_end = time_end;
        this. thematics = thematics;
        this.id = id;
    }

    setName(newName: string) {
        this.name = newName;
    }
    getName(): string {
        return this.name;
    }

    setDistancia(newDistancia: number) {
        this.distancia = newDistancia;
    }
    getDistancia(): number {
        return this.distancia;
    }

    setAddress(newAddress: string) {
        this.address = newAddress;
    }
    getAddress(): string {
        return this.address;
    }

    setTime_begin(newTime_begin: Date) {
        this.time_begin = newTime_begin;
    }
    getTime_begin(): Date {
        return this.time_begin;
    }

    setTime_end(newTime_end: Date) {
        this.time_begin = newTime_end;
    }
    getTime_end(): Date {
        return this.time_end;
    }

    setThematics(newThematics: string[]) {
        this.thematics = newThematics;
    }
    getThematics(): string[] {
        return this.thematics;
    }

    setId(newId: number) {
        this.id = newId;
    }
    getId(): number{
        return this.id;
    }
}
//Metodo de creacion de minieventos
function crearMiniEvento( name: string,distancia: number,address: string,time_begin: Date,time_end: Date,thematics: string[]) {
    const mini_evento = new miniEvento(name, distancia, address, time_begin, time_end, thematics, 0);
    mini_evento.setName(name);
    mini_evento.setDistancia(distancia);
    mini_evento.setAddress(address);
    mini_evento.setTime_begin(time_begin);
    mini_evento.setTime_end(time_end);
    mini_evento.setThematics(thematics);
    mini_evento.setId(heapMiniEventos.getSize());
  
    heapMiniEventos.insert(heapMiniEventos.getSize(), mini_evento);
    
  }

//prueba 
//const tb = new Date(2022-2-21);
//const te = new Date(2022-7-21);
//crearMiniEvento("juego1", 2, "CLL3b#2-3", tb, te, ["juego","juego x2"]);
//crearMiniEvento("juego2", 2, "CLL3b#2-3", tb, te, ["juego","juego x2"]);
//crearMiniEvento("juego3", 2, "CLL3b#2-3", tb, te, ["juego","juego x2"]);
//crearMiniEvento("juego4", 2, "CLL3b#2-3", tb, te, ["juego","juego x2"]);
//console.log(heapMiniEventos.informacion());

//-------------------------------------------Usuarios-------------------------------------------------------

class Usuario{
    private name: string;
    private lastname: string;
    private email: string;
    private username: string;
    private password: string;
    private  age: number;
    private address : string;

    constructor (name: string, lastname: string,  age: number, address: string, email: string, username: string, password: string){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.address = address;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    setName(newName: string) {
        this.name = newName;
    }
    getName(): string{
        return this.name;
    }

    setLastname(newLastName: string) {
        this.lastname = newLastName;
    }
    getLastName(): string{
        return this.lastname;
    }

    setAge(newAge: number) {
        this.age = newAge;
    }
    getAge(): number{
        return this.age;
    }

    setAddress(newAddress: string) {
        this.address = newAddress;
    }
    getId(): string{
        return this.address;
    }
    
    setEmail(newEmail: string) {
        this.name = newEmail;
    }
    getEmail(): string{
        return this.email;
    }

    setUsername(newUsername: string) {
        this.username = newUsername;
    }
    getUsername(): string{
        return this.username;
    }

    setPassword(newPassword: string) {
        this.password = newPassword;
    }
    getPassword(): string{
        return this.password;
    }



}

const usuarioBase = new Usuario("","", 0,"","","","")
const arbolUsuarios = new AvlBst<Usuario>(usuarioBase, 0);
const arbolContrasenas = new AvlBst(null, 0);

//Aun hay varias cosas que estoy corrigiendo :3

function verificarLogin(arbolUsuarios : AvlBst<Usuario>,arbolContrasenas : AvlBst<string>,contrase??a : string , Usuario: string ){
    int idUsuario = arbolUsuarios.findId(Usuario); //falta crear funcion en avl
    string contrasenaEnArbol = arbolContrasenas.findData(idUsuario);
    if (contrase??a == contrasenaEnArbol){
        return true;
    }else{
        return false;
    }
}


function crearUsuario(name: string, lastname: string,  age: number, address: string, email: string, username: string, password: string){
    let i = 0;
    while (i < arbolUsuarios.numElements){
        if (name != arbolUsuarios.findData(i).getUsername){  //error
            let  usuario = new Usuario(name,lastname,age,address,email,username,password);
            arbolUsuarios.insert(usuario);  //falta id
            arbolContrasenas.insert(password); // falta id

        }else{
            console.log("El nombre de usuario esta repetido");
        }
    }
}


//falta pasar de una ventana a otra (?
