import React from "react";
import "./Ventana_registro.css";
import Banner from "./Banner/Banner";

export default class Ventana_registro extends React.Component<{}> {
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
                <input className="input_name" id="inputName" />
                <br></br>
              </div>
              <div className="apellido">
                <label className="lastname" id="etiquetaLastname">
                  Last Name(s):{" "}
                </label>
                <br></br>
                <input className="input_lastname" id="inputLastName" />
                <br></br>
              </div>
              <div className="correo">
                <label className="email" id="etiquetaEmail">
                  Email unal:{" "}
                </label>
                <br></br>
                <input className="input_email" id="inputEmail" />
                <br></br>
              </div>
              <div className="contraseña">
                <label className="password" id="etiquetaPassword">
                  Password:{" "}
                </label>
                <br></br>
                <input className="input_password" id="inputPassword" />
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
                />
                <br></br>
              </div>
              <button type="button" className="button_register">
                <a
                  href="D:\Desktop\juanXo\U\2022 - 2S\Estructuras de datos\Proyecto\Mockups Interfaz\Ventana de inicio\Ventana_De_Inicio.html"
                  className="register"
                >
                  Register
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
