// Ventana a la que se dirige para editar los eventos.
import React from "react";
import "./Ventana_dev.css";
import Banner from "../Banner/Banner";
import Evento from "../Interface/InterfaceEvento";

interface Props {
  setActive: (input: string, retorno: any) => void;
  evento: Evento;
}

export default class Ventana_dev extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <section className="home">
        {/* <!-- Aqui va lo que es el banner unicamente --> */}
        <Banner setActive={this.props.setActive} />
        {/* <!-- Aqui va el resto --> */}
        <div className="Content">
          <div>
            <img
              className="arrow"
              src="./Arrow 2.png"
              onClick={() => this.props.setActive("BUSQUEDA", "")}
            />
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
              <label className="titulo_e">INFORMATION ABOUT YOUR EVENT</label>
              <div>
                <label className="nombre_e" id="etiquetaName">
                  Name{" "}
                </label>
                <input
                  className="inputName"
                  id="inputName"
                  value={this.props.evento.name}
                ></input>
                <br></br>
              </div>
              <div>
                <label className="direccion" id="etiquetaAddress">
                  Address{" "}
                </label>
                <input
                  className="inputAddress"
                  id="inputAddress"
                  value={this.props.evento.address}
                ></input>
                <br></br>
              </div>
              <div>
                <label className="tiempo" id="etiquetaTime">
                  Time{" "}
                </label>
                <input
                  className="inputTime_begin"
                  id="inputTime_begin"
                  value={this.props.evento.time_begin.toDateString()}
                ></input>
                <br></br>
              </div>
              <input
                className="inputTime_end"
                id="inputTime_end"
                value={this.props.evento.time_end.toDateString()}
              ></input>
              <br></br>
              <div>
                <div>
                  <label className="tematica" id="etiquetaThematics">
                    Thematics{" "}
                  </label>
                  <input
                    className="inputThematics"
                    id="inputThematics"
                    value={"FUTBOL"}
                  ></input>
                  <br></br>
                </div>
                <input
                  className="inputThematics1"
                  id="inputThematics"
                  value={this.props.evento.thematics[1]}
                ></input>
                <br></br>
              </div>
              <button
                className="button_create"
                type="button"
                id="button_create"
                onClick={() => this.props.setActive("PERFIL", "")}
              >
                EDIT
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
