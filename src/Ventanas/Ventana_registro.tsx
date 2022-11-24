//Formulario donde se ingresa la informacion del usuario.
import React, { ChangeEvent } from "react";
import "./Ventana_registro.css";
import Banner from "../Banner/Banner";
import Perfil from "../Interface/InterfacePerfil";

interface Props {
  setActive: (input: string, retorno: any) => void;
  create: (perfil:Perfil) => void;
}

export default class Ventana_registro extends React.Component<Props, Perfil> {
  constructor(props: Props) {
    super(props);
  }

  create = (input:string) => {
    this.props.setActive(input,"")
    this.props.create(this.state);
    console.log(this.state);
    // codigo para editar y cambiar de ventana juntas las funciones
  };

  changeName = (e: ChangeEvent) => {
    this.setState({ name: (e.target as HTMLInputElement).value });
  };

  changeLastname = (e: ChangeEvent) => {
    this.setState({ lastname: (e.target as HTMLInputElement).value });
  };
  
  changeUsername = (e: ChangeEvent) => {
    this.setState({ username: (e.target as HTMLInputElement).value });
  };

  changePassword = (e: ChangeEvent) => {
    this.setState({ password: (e.target as HTMLInputElement).value });
  };

  changeConfirmPassword = (e: ChangeEvent) => {
    this.setState({ confirm_password: (e.target as HTMLInputElement).value });
  };

  render(): JSX.Element {
    return (
      <section className="home">
        {/* <!-- Aqui va lo que es el banner unicamente --> */}
        <div className="Banner">
          <h1>SMILE</h1>
          <label className="label_subtitle">conect with people</label>
        </div>
        {/* <!-- Aqui va el resto --> */}
        <div className="Content">
          <div>
            <div className="Formulario">
              <p className="titulo">Formulario de Registro</p>
              <div className="nombre">
                <label className="name" id="etiquetaLastname">
                  Name(s):{" "}
                </label>
                <br></br>
                <input
                  className="input_name"
                  id="inputName"
                  onChange={this.changeName}
                />
                <br></br>
              </div>
              <div className="apellido">
                <label className="lastname" id="etiquetaLastname">
                  Last Name(s):{" "}
                </label>
                <br></br>
                <input
                  className="input_lastname"
                  id="inputLastName"
                  onChange={this.changeLastname}
                />
                <br></br>
              </div>
              <div className="usuario">
                <label className="username" id="etiquetaConfirmPassword">
                  Username:{" "}
                </label>
                <br></br>
                <input
                  className="input_username"
                  id="inputUsername"
                  onChange={this.changeUsername}
                />
                <br></br>
              </div>
              <div className="contraseña">
                <label className="password" id="etiquetaPassword">
                  Password:{" "}
                </label>
                <br></br>
                <input
                  className="input_password"
                  id="inputPassword"
                  onChange={this.changePassword}
                />
                <br></br>
              </div>
              <div className="confirm_contraseña">
                <label
                  className="confirm_password"
                  id="etiquetaConfirmPassword"
                >
                  Confirm Password:{" "}
                </label>
                <br></br>
                <input
                  className="input_confirmpassword"
                  id="inputConfirmPassword"
                  onChange={this.changeConfirmPassword}
                />
                <br></br>
              </div>
              <button
                type="button"
                className="button_register"
                onClick={() => this.create("INICIO")}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
