import React from "react";
import Ventana_bev from "./Ventanas/Ventana_bev";
import Ventana_dev from "./Ventanas/Ventana_dev";
import Ventana_Evento from "./Ventanas/Ventana_Evento";
import Ventana_perfil from "./Ventanas/Ventana_perfil";
import Ventana_registro from "./Ventanas/Ventana_registro";
import Ventana_inicio from "./Ventanas/Ventana_inicio";

export interface Perfil {
  name: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  confirm_password: string;
}

interface State {
  perfil_atributo: Perfil;
  active: string;
}

export default class App extends React.Component<{}, State> {
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
      active: "INICIO"
    };
  }

  setPerfil = (perfil: Perfil) => {
    this.setState({ perfil_atributo: perfil });
    console.log(this.state);
  };

  setActive = (input:string) =>{
    this.setState({active:input})
  }

  render(): JSX.Element {
    let ventana: JSX.Element;
    ventana = <Ventana_inicio setActive={this.setActive}/>

    let active = this.state.active;

    switch(active){
      case "INICIO":
        ventana = <Ventana_inicio setActive={this.setActive}/>
        break
      case "REGISTRO":
        ventana = <Ventana_registro setActive={this.setActive}/>
        break
      case "PERFIL":
        ventana = <Ventana_perfil perfil={this.state.perfil_atributo} edit={this.setPerfil} setActive={this.setActive}/>
        break
      case "EVENTO":
        ventana = <Ventana_Evento setActive={this.setActive}/>
        break
      case "BUSQUEDA":
        ventana = <Ventana_bev setActive={this.setActive}/>
        break
      case "EDITAR":
        ventana = <Ventana_dev setActive={this.setActive}/>
        break
    }

    return (
      <>
        {ventana}
      </>
    );
  }
}
