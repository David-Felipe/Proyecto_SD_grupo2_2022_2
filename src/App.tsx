import React from "react";
import Ventana_bev from "Ventana_bev";
import Ventana_dev from "Ventana_dev";
import Ventana_Evento from "Ventana_Evento";
import Ventana_perfil from "Ventana_perfil";
import Ventana_registro from "Ventana_registro";
import Ventana_inicio from "./Ventana_inicio";

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
        email: "Kely",
        username: "Importa",
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
