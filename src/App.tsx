import React from "react";
import Ventana_bev from "./Ventanas/Ventana_bev";
import Ventana_dev from "./Ventanas/Ventana_dev";
import Ventana_Evento from "./Ventanas/Ventana_Evento";
import Ventana_perfil from "./Ventanas/Ventana_perfil";
import Ventana_registro from "./Ventanas/Ventana_registro";
import Ventana_inicio from "./Ventanas/Ventana_inicio";
import Perfil from "./Interface/InterfacePerfil";
import Heap from "./DataStructures/Heap";
import Evento from "./Interface/InterfaceEvento";

interface State {
  perfil_atributo: Perfil;
  active: string;
}

export default class App extends React.Component<{}, State> {
  retorno: any = "hola";
  heapMiniEventos = new Heap(1000);

  constructor(props: {}) {
    super(props);
    this.state = {
      perfil_atributo: {
        name: "Juan",
        lastname: "Carreño",
        email: "jcarrenoar",
        username: "jcarrenoar",
        password: "12345",
        confirm_password: "******",
      },
      //Modificar el active porque no todas la ventanas se conectan por botones
      // INICIO - VENTANA EMERGENTE - REGISTRO (conectadas)
      // EDITAR - PERFIL (conectadas)
      // BUSQUEDA - EVENTO (conectadas)
      active: "INICIO",
    };
  }

  create = (nuevo_perfil: Perfil) => {
    //metodo crear nuevo perfil
  };

  autentication = (name: string, password: string) => {
    //authenticacion y retorna
    //true ---> si lo encontro y tiene contraseña valida y hace
    this.setActive("BUSQUEDA", "");
    //false ---> contraseña incorrecta mostrar un alert("Contraseña incorrecta")
    //false ---> no encontro usuario y hacer
    //                                      this.changeError(true)
    //retorna true solo para pruebas
  };

  //Elementos para prueba
  evento: Evento = {
    name: "PARTIDO",
    distancia: 1,
    address: "CAllE xxx",
    time_begin: new Date(2012, 1, 31, 23, 59, 59),
    time_end: new Date(2012, 1, 31, 23, 59, 59),
    thematics: ["FUTBOL", "BASKETBALL", "BEISBALL", "BEISBALL", "BEISBALL"],
  };

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
  ];

  create_ev = (evento: Evento) => {
    //codigo que crea un evento verificando tambien si existe o no y si se repite nombre
    this.setActive("BUSQUEDA", "");
  };

  setPerfil = (perfil: Perfil) => {
    this.setState({ perfil_atributo: perfil });
    console.log(this.state);
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
      />
    );

    let active = this.state.active;

    switch (active) {
      case "INICIO":
        ventana = (
          <Ventana_inicio
            setActive={this.setActive}
            autentication={this.autentication}
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
          />
        );
        break;
      case "EVENTO":
        ventana = (
          <Ventana_Evento
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
          <Ventana_dev setActive={this.setActive} evento={this.retorno} />
        );
        break;
    }

    return <>{ventana}</>;
  }
}
