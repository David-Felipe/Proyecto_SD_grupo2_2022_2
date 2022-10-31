// Ventana donde se puede decidir si registrar usuario o ingresar en uno ya registrado.
// En esta ventana hace falta agregar la ventana emergente cuando el usuario es incorrecto, estoy en eso.
import React, { useState } from "react";
import Ventana_emergente from "Ventana_emergente";
import "./Ventana_inicio.css";

export const Ventana_inicio = () => {
  const [showError, changeShowError] = useState(false);

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
                <input className="input_user" id="inputUsername" />
                <br></br>
              </div>
              <div>
                <label className="label_pass" id="etiquetaPassword">
                  Password:{" "}
                </label>
                <br></br>
                <input className="input_pass" id="inputPassword" />
                <br></br>
              </div>
              <br></br>
              <button
                type="button"
                className="button_login"
                onClick={() => changeShowError(true)}
              >
                LOG IN
              </button>
              <br></br>
              {/* <!-- El boton sing in redirecciona a la pantalla de formulario --> */}
              <button type="button" className="button_singin">
                <a
                  href="D:\Desktop\juanXo\U\2022 - 2S\Estructuras de datos\Proyecto\Mockups Interfaz\Ventana de Registro\Registro.html"
                  className="singIn"
                >
                  SIGN IN
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Ventana_emergente
        showError={showError}
        changeShowError={changeShowError}
      />
    </>
  );
};

export default Ventana_inicio;