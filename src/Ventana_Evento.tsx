// Ventana donde se redirecciona para crear eventos
import React from "react";
import "./Ventana_Evento.css";
import Banner from "./Banner/Banner";

export default class Ventana_Evento extends React.Component<{}> {
  render(): JSX.Element {
    return (
      <>
        <section className="home">
          {/* <!-- Aqui va lo que es el banner unicamente --> */}
          <Banner />
          {/* <!-- Aqui va el resto --> */}
          <div className="Content">
            <div>
              <div className="mapa">
                {/* <!-- Aqui va implementado el mapa --> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15941.379358161692!2d-74.08466621092664!3d4.643676758242312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1666105674940!5m2!1ses-419!2sco"
                  width="700"
                  height="690"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="mapa_google"
                ></iframe>
              </div>
              <div className="formulario">
                {/* <!-- Aqui va la lista de resultados de consulta --> */}
                <label className="titulo">INFORMATION ABOUT YOUR EVENT</label>
                <div>
                  <label className="nombre" id="etiquetaName">
                    Name{" "}
                  </label>
                  <input className="inputName" id="inputName" />
                  <br></br>
                </div>
                <div>
                  <label className="direccion" id="etiquetaAddress">
                    Address{" "}
                  </label>
                  <input className="inputAddress" id="inputAddress" />
                  <br></br>
                </div>
                <div>
                  <label className="tiempo" id="etiquetaTime">
                    Time{" "}
                  </label>
                  <input className="inputTime_begin" id="inputTime_begin" />
                  <br></br>
                </div>
                <input className="inputTime_end" id="inputTime_end" />
                <br></br>
                <div>
                  <div>
                    <label className="tematica" id="etiquetaThematics">
                      Thematics{" "}
                    </label>
                    <input className="inputThematics" id="inputThematics" />
                    <br></br>
                  </div>
                  <input className="inputThematics1" id="inputThematics" />
                  <br></br>
                </div>
                <button
                  className="button_create"
                  type="button"
                  id="button_create"
                >
                  <a
                    className="link"
                    href="D:\Desktop\juanXo\U\2022 - 2S\Estructuras de datos\Proyecto\Mockups Interfaz\Ventana bev\Ventana buscar.html"
                  >
                    CREATE
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
