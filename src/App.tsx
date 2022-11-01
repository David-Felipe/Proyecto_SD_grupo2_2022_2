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
    };
  }

  setPerfil = (perfil: Perfil) => {
    this.setState({ perfil_atributo: perfil });
    console.log(this.state);
  };

  render(): JSX.Element {
    return (
      <>
        {/* Aqui se hace llamado al body que va a mostrar el index.html, en el caso de venta_perfil es especial solo deben quitar del comentario la siguiente linea para ver la venta_perfil. */}
        {/* <Ventana_perfil perfil={this.state.perfil_atributo} edit={this.setPerfil}/> */}
        <Ventana_inicio />
      </>
    );
  }
}
