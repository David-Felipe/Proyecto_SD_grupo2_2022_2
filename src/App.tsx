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
import {AvlBst} from "./DataStructures/AvlBst";

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
  
  autentication = (name: string, password: string) => {
    //authenticacion y retorna
    //true ---> si lo encontro y tiene contraseña valida y hace
    this.setActive("BUSQUEDA", "");
    //false ---> contraseña incorrecta mostrar un alert("Contraseña incorrecta")
    //false ---> no encontro usuario y hacer
    //  this.changeShowError(true);
    //retorna true solo para pruebas
  };
  
  //Elementos para prueba
  evento: Evento = {
    name: "PARTIDO",
    distancia: 1,
    address: "CAllE xyx",
    time_begin: new Date(),
    time_end: new Date(),
    thematics: [true,false,false,true,false,false],
  };
  
  //Perfil de prueba para inicializar el avl
  perfil_test: Perfil = {
    name: "Juan",
    lastname: "Carreño",
    username: "jcarrenoar",
    password: "12345",
    confirm_password: "******",
  }

  retorno: any = "hola";
  heapMiniEventos:Heap<Evento> = new Heap(1000);
  Hasher = new Hasher();
  avlUsuarios:AvlBst<Perfil> = new AvlBst(this.perfil_test,Hasher.hashString(this.perfil_test.username));
  
  //Se necesita una funcion que tome los minieventos y los guarde en un arreglo de Evento[]
  guardar = () => {
    //codigo para volverlos en una arreglo de Eventos llamado arrayEvento
  };

  //Elementos para prueba
  arrayEvento: Evento[] = [
    this.evento,
    this.evento,
    this.evento,
    this.evento,
    this.evento,
    this.evento,
    this.evento,
    this.evento,
    this.evento,
    this.evento,
    this.evento,
  ];

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

  setPerfil = (perfil: Perfil, username:string) => {
    //Aqui va el codigo para editar un perfil y la entrada de este metodo
    //es un perfil con todos sus atributos
    //Esta funcion borra el perfil anterior e inserta uno nuevo con la modificaciones esto así para
    var valor_hash = Hasher.hashString(username);
    console.log(valor_hash)
    console.log(this.avlUsuarios.breadthFirstTraverse())
    this.avlUsuarios.delete(valor_hash);
    this.avlUsuarios.insert(perfil,Hasher.hashString(perfil.username))
  };
  
  create = (nuevo_perfil: Perfil) => {
    //metodo crear nuevo perfil
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

    let active = this.state.active;

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
            arrayEvento={this.arrayEvento}
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
            arrayEvento={this.arrayEvento}
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
