// Ventana donde se puede decidir si registrar usuario o ingresar en uno ya registrado.
// En esta ventana hace falta agregar la ventana emergente cuando el usuario es incorrecto, estoy en eso.
import React, { ChangeEvent } from "react";
import Ventana_emergente from "./Ventana_emergente";
import "./Ventana_inicio.css";
import Perfil from "../Interface/InterfacePerfil";

interface State {
  showError: boolean;
}

interface Props {
  setActive: (input: string, retorno: any) => void;
  autentication: (name: string, password: string) => void;
}

export class Ventana_inicio extends React.Component<Props, State> {
  current_perfil_name: string = "";
  current_perfil_password: string = "";

  constructor(props: Props) {
    super(props);
    this.state = { showError: false };
  }

  changeShowError = (condition: boolean) => {
    this.setState({ showError: condition });
  };

  autentication = (name: string, password: string) => {
    console.log("nombre", name);
    this.props.autentication(name,password)
  };

  changeName = (e: ChangeEvent) => {
    this.current_perfil_name = (e.target as HTMLInputElement).value;
  };

  changePassword = (e: ChangeEvent) => {
    this.current_perfil_password = (e.target as HTMLInputElement).value;
  };

  render(): JSX.Element {
    return (
      <>
        <section className="home">
          {/* <!-- Aqui va lo que es el banner unicamente (Este banner no tiene foto perfil que redirecciona)--> */}
          <div className="Banner">
            <h1>SMILE</h1>
            <label className="label_subtitle" id="labelTitle">
              conect with people
            </label>
          </div>
          {/* <!-- Aqui va el resto --> */}
          <div className="Content">
            <div>
              <img src="./Imagen.png" width="120px" />
              <div className="TextOfInputs">
                <div className="entradaUsername">
                  <label className="label_user" id="etiquetaLastname">
                    Username:{" "}
                  </label>
                  <br></br>
                  <input
                    className="input_user"
                    id="inputUsername"
                    onChange={this.changeName}
                  />
                  <br></br>
                </div>
                <div>
                  <label className="label_pass" id="etiquetaPassword">
                    Password:{" "}
                  </label>
                  <br></br>
                  <input
                    className="input_pass"
                    id="inputPassword"
                    onChange={this.changePassword}
                  />
                  <br></br>
                </div>
                <br></br>
                <button
                  type="button"
                  className="button_login"
                  onClick={() =>
                    this.autentication(
                      this.current_perfil_name,
                      this.current_perfil_password
                    )
                  }
                >
                  LOG IN
                </button>
                <br></br>
                {/* <!-- El boton sing in redirecciona a la pantalla de formulario --> */}
                <button
                  type="button"
                  className="button_singin"
                  onClick={() => this.props.setActive("REGISTRO", "")}
                >
                  SIGN IN
                </button>
              </div>
            </div>
          </div>
        </section>
        {this.state.showError && (
          <Ventana_emergente
            changeShowError={this.changeShowError}
            setActive={this.props.setActive}
          />
        )}
      </>
    );
  }
}

export default Ventana_inicio;
