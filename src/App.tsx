import React from "react";
import Ventana_bev from "./Ventanas/Ventana_bev";
import Ventana_dev from "./Ventanas/Ventana_dev";
import Ventana_cev from "./Ventanas/Ventana_cev";
import Ventana_perfil from "./Ventanas/Ventana_perfil";
import Ventana_registro from "./Ventanas/Ventana_registro";
import Ventana_inicio from "./Ventanas/Ventana_inicio";
import Perfil from "./Interface/InterfacePerfil";
import Heap from "./DataStructures/Heap";
import Evento from "./Interface/InterfaceEvento";
import Hasher from "./DataStructures/Hasher";
import { AvlBst } from "./DataStructures/AvlBst";

interface State {
  perfil_atributo: Perfil;
  active: string;
  showError: boolean;
}

export default class App extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      //perfil_atributo es un perfil de prueba para que al abrir Ventana_perfil
      //te muestra la informacion de este
      perfil_atributo: {
        name: "Juan",
        lastname: "Carreño",
        username: "jcarrenoar",
        password: "12345",
        confirm_password: "******",
      },
      active: "INICIO",
      showError: false
    };

  }

  changeShowError = (condition: boolean) => {
    this.setState({ showError: condition });
  };

  autentication = (username: string, password: string) => {
    //authenticacion y retorna

    // hashing entered username
    const usernameHashed = Hasher.hashString(username);
    let userSearched: Perfil;

    try {

      userSearched = this.avlUsuarios.findData(usernameHashed);

      if (userSearched.password === password) {

        //true ---> si lo encontro y tiene contraseña valida y hace
        this.setActive("BUSQUEDA", "");
        return true;

      }

      //false ---> contraseña incorrecta mostrar un alert("Contraseña incorrecta")
      alert("Contraseña incorrecta");
      return false;

    } catch (error) {

      //false ---> no encontro usuario y hacer
      this.changeShowError(true);
      return false;

    }

  };

  //Elementos para prueba
  evento: Evento = {
    name: "PARTIDO",
    distancia: 1,
    address: "CAllE xyx",
    time_begin: new Date(),
    time_end: new Date(),
    thematics: [true, false, false, true, false, false],
  };

  //Perfil de prueba para inicializar el avl
  perfil_test: Perfil = {
    name: "Juan",
    lastname: "Carreño",
    username: "jcarrenoar",
    password: "12345",
    confirm_password: "******",
  }

  // * Declarando "bases de datos", guiño, guiño, codo, codo 
  // eslint-disable-next-line
  retorno: any = "hola";
  heapMiniEventos: Heap<Evento> = new Heap(1000);
  Hasher = new Hasher();
  avlUsuarios: AvlBst<Perfil> = new AvlBst(this.perfil_test, Hasher.hashString(this.perfil_test.username));

  //Se necesita una funcion que tome los minieventos y los guarde en un arreglo de Evento[]
  guardar = () => {
    //codigo para volverlos en una arreglo de Eventos llamado arrayEvento
  };

  //Elementos para prueba
  arrayEvento: Evento[] = [
    this.evento,
    {
      name: "DEPORTE",
      distancia: 2,
      address: "CRA zxw",
      time_begin: new Date(2022, 11, 4, 19, 23, 42, 11),
      time_end: new Date(2022, 11, 4, 20, 23, 42, 11),
      thematics: [true, false, false, true, false, false]
    },

    {
      name: "LECTURA",
      distancia: 12,
      address: "CALLE bog",
      time_begin: new Date(2021, 4, 4, 13, 23, 42, 11),
      time_end: new Date(2021, 4, 4, 16, 23, 42, 11),
      thematics: [false, false, true, true, true, false]
    },

    {
      name: "JUEGOS",
      distancia: 6,
      address: "AV 68a",
      time_begin: new Date(2022, 4, 4, 17, 23, 42, 11),
      time_end: new Date(2022, 4, 4, 17, 23, 42, 11),
      thematics: [false, true, true, true, false, false]
    },

    {
      name: "SOCIALIZAR",
      distancia: 9,
      address: "AV AMERICAS",
      time_begin: new Date(2022, 4, 4, 17, 23, 42, 11),
      time_end: new Date(2022, 4, 4, 17, 23, 42, 11),
      thematics: [false, true, true, true, false, false]
    },

    {
      name: "Otros",
      distancia: 13,
      address: "AUTOPISTA SUR",
      time_begin: new Date(2022, 4, 4, 17, 23, 42, 11),
      time_end: new Date(2022, 4, 4, 17, 23, 42, 11),
      thematics: [false, true, true, true, false, true]
    },

    {
      name: "JUEGOS",
      distancia: 7,
      address: "CALLE xyd",
      time_begin: new Date(2022, 4, 4, 17, 23, 42, 11),
      time_end: new Date(2022, 4, 4, 17, 23, 42, 11),
      thematics: [true, false, true, true, false, false]
    },

    {
      name: "MUSICA",
      distancia: 4,
      address: "CRA mgm",
      time_begin: new Date(2022, 4, 4, 17, 23, 42, 11),
      time_end: new Date(2022, 4, 4, 17, 23, 42, 11),
      thematics: [false, true, true, true, false, false]
    },

    {
      name: "SOCIALIZAR",
      distancia: 8,
      address: "AV ROJAS",
      time_begin: new Date(2022, 4, 4, 17, 23, 42, 11),
      time_end: new Date(2022, 4, 4, 17, 23, 42, 11),
      thematics: [false, true, true, true, false, false]
    },

    {
      name: "LECTURA",
      distancia: 1,
      address: "CALLE 26",
      time_begin: new Date(2022, 11, 3, 17, 23, 42, 11),
      time_end: new Date(2022, 11, 3, 17, 23, 42, 11),
      thematics: [false, false, true, true, true, false]
    },
  ];
  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  calc_distancia(distancia1: number,distancia2: number){
    //esta funcion deberia calcular la distancia entre ambos puntos, sin embargo, por problemas de la api se tomara un valor aleatorio por ahora.
    const valor=distancia1-distancia2
    return this.getRandomInt(1,1000)
  }
  organizarminieventos(listademinieventos: Evento[]){
    //la primera parte del codigo saca todos los minieventos y los inserta a una lista
    const posicionactual=0
    const pilaorganizadora = new Heap(30)
    for (const minievento of listademinieventos){
        const distanciaactual = minievento.distancia
        const posicion = this.calc_distancia(posicionactual,distanciaactual)
        pilaorganizadora.insert(20-distanciaactual,minievento)
    }
    for (let i = 0; i < listademinieventos.length; i++) {
        const valor = pilaorganizadora.extractmax()[1]
        listademinieventos[i]=valor
      }
    return listademinieventos
  }

  create_ev = (evento: Evento) => {
    //codigo que crea un evento verificando tambien si existe o no y si se repite nombre
    console.log(evento)
    this.setActive("BUSQUEDA", "");
  };

  delete_ev = (evento: Evento) => {
    //Codigo para eleiminar un evento teniendo el evento completo con sus atributos

  };

  setEvent = (evento: Evento) => {
    //Aqui va el codigo que edita un evento recibiendo el mismo evento editado
    console.log(evento.name);
    this.setActive("PERFIL", "");
  };

  setPerfil = (perfil: Perfil, username: string) => {
    //Aqui va el codigo para editar un perfil y la entrada de este metodo
    //es un perfil con todos sus atributos
    //Esta funcion borra el perfil anterior e inserta uno nuevo con la modificaciones esto así para
    const valor_hash = Hasher.hashString(username);
    console.log(valor_hash)
    console.log(this.avlUsuarios.breadthFirstTraverse())
    this.avlUsuarios.delete(valor_hash);
    this.avlUsuarios.insert(perfil, Hasher.hashString(perfil.username))
  };

  
  create = (nuevoPerfil: Perfil) => {

    //metodo crear nuevo perfil
    const usernameHashed = Hasher.hashString(nuevoPerfil.username);
    let posibleUser: Perfil;

    try {

      posibleUser = this.avlUsuarios.findData(usernameHashed);
      if (posibleUser != undefined) alert("Este nombre de usuario ya existe, por favor elige otro");
      return;

    } catch (error) {

      if (nuevoPerfil.password !== nuevoPerfil.confirm_password) {

        alert("La contraseña confirmada no es igual, por favor verifica e intenta de nuevo.");
        return;

      }

      this.avlUsuarios.insert(nuevoPerfil, usernameHashed);
      alert("El usuario fue creado de forma exitosa.");
      return;

    }

  };

  setActive = (input: string, objeto: any) => {
    this.setState({ active: input });
    this.retorno = objeto;
  };

  render(): JSX.Element {
    let ventana: JSX.Element;
    ventana = (
      <Ventana_inicio
        setActive={this.setActive}
        autentication={this.autentication}
        changeShowError={this.changeShowError}
        showError_in={this.state.showError}
      />
    );

    const active = this.state.active;
    switch (active) {
      case "INICIO":
        ventana = (
          <Ventana_inicio
            setActive={this.setActive}
            autentication={this.autentication}
            changeShowError={this.changeShowError}
            showError_in={this.state.showError}
          />
        );
        break;
      case "REGISTRO":
        ventana = (
          <Ventana_registro setActive={this.setActive} create={this.create} />
        );
        break;
      case "PERFIL":
        ventana = (
          <Ventana_perfil
            perfil={this.state.perfil_atributo}
            edit={this.setPerfil}
            setActive={this.setActive}
            delete={this.delete_ev}
            arrayEvento={this.organizarminieventos(this.arrayEvento) }
          />
        );
        break;
      case "EVENTO":
        ventana = (
          <Ventana_cev
            setActive={this.setActive}
            create_ev={this.create_ev}
          />
        );
        break;
      case "BUSQUEDA":
        ventana = (
          <Ventana_bev
            setActive={this.setActive}
            arrayEvento={this.organizarminieventos(this.arrayEvento) }
          />
        );
        break;
      case "EDITAR":
        ventana = (
          <Ventana_dev
            setActive={this.setActive}
            evento={this.retorno}
            edit={this.setEvent}
          />
        );
        break;
    }

    return <>{ventana}</>;
  }
}
