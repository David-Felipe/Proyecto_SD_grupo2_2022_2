// Ventana donde se redirecciona para crear eventos
import React,{ChangeEvent} from "react";
import "./Ventana_Evento.css";
import Banner from "../Banner/Banner";
import Evento from "../Interface/InterfaceEvento";

interface Props {
  setActive: (input: string,retorno:any) => void;
}

export default class Ventana_Evento extends React.Component<Props, Evento> {
  constructor(props: Props) {
    super(props);
  }

  evento: Evento = {
    name: "PARTIDO",
    distancia: 10,
    address: "CAllE xxx",
    time_begin: new Date(2012, 1, 31, 23, 59, 59),
    time_end: new Date(2012, 1, 31, 23, 59, 59),
    thematics: ["FUTBOL"]
  };

  // changeName = (e: ChangeEvent) => {
  //   this.setState({ name: (e.target as HTMLInputElement).value });
  // };

  // changeAddress = (e: ChangeEvent) => {
  //   this.setState({ address: (e.target as HTMLInputElement).value });
  // };

  // changeTimeBegin = (e: ChangeEvent) => {
  //   this.setState({ time_begin: (e.target as HTMLInputElement).value });
  // };

  // changeTimeEnd = (e: ChangeEvent) => {
  //   this.setState({ time_end : (Date.parse((e.target as HTMLInputElement).value))});
  // };

  // changeThematics = (e: ChangeEvent) => {
  //   this.setState({ thematics: [(e.target as HTMLInputElement).value ]});
  // };

  render(): JSX.Element {
    return (
      <>
        <section className="home">
          {/* <!-- Aqui va lo que es el banner unicamente --> */}
          <Banner setActive={this.props.setActive} />
          {/* <!-- Aqui va el resto --> */}
          <div className="Content">
            <div>
              <img
                className="arrow"
                src="./Arrow 2.png"
                onClick={() => this.props.setActive("BUSQUEDA","")}
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
                <label className="information">
                  INFORMATION ABOUT YOUR EVENT
                </label>
                <div>
                  <label className="nombre_ev" id="etiquetaName">
                    Name{" "}
                  </label>
                  <input
                    className="inputName"
                    id="inputName"
                    onChange={this.changeName}
                  />
                  <br></br>
                </div>
                <div>
                  <label className="direccion" id="etiquetaAddress">
                    Address{" "}
                  </label>
                  <input
                    className="inputAddress"
                    id="inputAddress"
                    onChange={this.changeAddress}
                  />
                  <br></br>
                </div>
                <div>
                  <label className="tiempo" id="etiquetaTime">
                    Time{" "}
                  </label>
                  <input
                    className="inputTime_begin"
                    id="inputTime_begin"
                    onChange={this.changeTimeBegin}
                  />
                  <br></br>
                </div>
                <input
                  className="inputTime_end"
                  id="inputTime_end"
                  onChange={this.changeTimeEnd}
                />
                <br></br>
                <div>
                  <div>
                    <label className="tematica" id="etiquetaThematics">
                      Thematics{" "}
                    </label>
                    <input
                      className="inputThematics"
                      id="inputThematics"
                      onChange={this.changeThematics}
                      value={"FUTBOL"}
                    />
                    <br></br>
                  </div>
                  <input className="inputThematics1" id="inputThematics" />
                  <br></br>
                </div>
                <button
                  className="button_create"
                  type="button"
                  id="button_create"
                  onClick={() => this.props.setActive("BUSQUEDA","")}
                >
                  CREATE
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
