// Ventana para mostrar los eventos cercanos y sus caracteristicas.
import React, { ChangeEvent } from "react";
import "./Ventana_bev.css";
import Evento_comp from "./Mostrar evento/Evento_bev";
import Evento from "../Interface/InterfaceEvento";
import Banner from "../Banner/Banner";

interface Props {
  setActive: (input: string) => void;
}

export default class Ventana_bev extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  evento: Evento = {
    name: "PARTIDO",
    distancia: 1,
    address: "CAllE xxx",
    time_begin: new Date(2012, 1, 31, 23, 59, 59),
    time_end: new Date(2012, 1, 31, 23, 59, 59),
    thematics: ["FUTBOL", "BASKETBALL", "BEISBALL", "BEISBALL", "BEISBALL"],
  };

  arrayEvento: Evento[] = [this.evento, this.evento, this.evento, this.evento, this.evento, this.evento, this.evento, this.evento, this.evento, this.evento];

  render(): JSX.Element {
    return (
      <section className="home">
        {/* <!-- Aqui va lo que es el banner unicamente --> */}
        <Banner setActive={this.props.setActive} />
        {/* <!-- Aqui va el resto --> */}
        <div className="Content">
          <div>
            <div className="mapa_bev">
              {/* <!-- Aqui va implementado el mapa --> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15941.379358161692!2d-74.08466621092664!3d4.643676758242312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1666105674940!5m2!1ses-419!2sco"
                width="699"
                height="690"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mapa_google"
              ></iframe>
            </div>
            <div className="consultas">
              <label className="events">EVENTS CLOSE TO YOU</label>
              {/* <!-- Aqui va la lista de resultados de consulta --> */}
              <div className="contenedor_busquedas">
                {this.arrayEvento.map((event) => (
                  <Evento_comp evento={event} />
                ))}
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="button_ev"
          onClick={() => this.props.setActive("EVENTO")}
        >
          CREATE YOUR EVENT
        </button>
      </section>
    );
  }
}
