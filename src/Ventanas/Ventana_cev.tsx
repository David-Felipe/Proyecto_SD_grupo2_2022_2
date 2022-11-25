// Ventana donde se redirecciona para crear eventos
import React, { ChangeEvent } from "react";
import "./Ventana_cev.css";
import Banner from "../Banner/Banner";
import Evento from "../Interface/InterfaceEvento";

interface Props {
  setActive: (input: string, retorno: any) => void;
  create_ev: (evento: Evento) => void;
}

export default class Ventana_cev extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  evento: Evento = {
    name: "PARTIDO",
    distancia: 10,
    address: "CAllE xxx",
    time_begin: new Date(2012, 1, 31, 23, 59, 59),
    time_end: new Date(2012, 1, 31, 23, 59, 59),
    thematics: [false,false,false,false,false,false],
  };

  changeName = (e: ChangeEvent) => {
    this.evento.name = (e.target as HTMLInputElement).value;
  };

  changeAddress = (e: ChangeEvent) => {
    this.evento.address = (e.target as HTMLInputElement).value;
  };

  changeTimeBegin = (e: ChangeEvent) => {
    this.evento.time_begin = new Date((e.target as HTMLInputElement).value);
  };

  changeTimeEnd = (e: ChangeEvent) => {
    this.evento.time_end = new Date((e.target as HTMLInputElement).value);
  };

  changeDeporte = (e: ChangeEvent) => {
    var current_thems: boolean[] = this.evento.thematics;
    current_thems[0] = !(e.target as HTMLInputElement).checked;
    this.setState({ thematics: current_thems });
  };

  changeSocializar = (e: ChangeEvent) => {
    var current_thems: boolean[] = this.evento.thematics;
    current_thems[1] = !(e.target as HTMLInputElement).checked;
    this.setState({ thematics: current_thems });
  };

  changeLectura = (e: ChangeEvent) => {
    var current_thems: boolean[] = this.evento.thematics;
    current_thems[2] = !(e.target as HTMLInputElement).checked;
    this.setState({ thematics: current_thems });
  };

  changeMusica = (e: ChangeEvent) => {
    var current_thems: boolean[] = this.evento.thematics;
    current_thems[3] = !(e.target as HTMLInputElement).checked;
    this.setState({ thematics: current_thems });
  };

  changeJuegos = (e: ChangeEvent) => {
    var current_thems: boolean[] = this.evento.thematics;
    current_thems[4] = !(e.target as HTMLInputElement).checked;
    this.setState({ thematics: current_thems });
  };

  changeOtros = (e: ChangeEvent) => {
    var current_thems: boolean[] = this.evento.thematics;
    current_thems[5] = !(e.target as HTMLInputElement).checked;
    this.setState({ thematics: current_thems });
  };

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
                    type="datetime-local"
                    min={Date()}
                    className="inputTime_begin"
                    id="inputTime_begin"
                    onChange={this.changeTimeBegin}
                  />
                  <br></br>
                </div>
                <input
                  type="datetime-local"
                  className="inputTime_end"
                  id="inputTime_end"
                  onChange={this.changeTimeEnd}
                />
                <br></br>
                <div>
                  <div>
                    <label className="tematica" id="etiquetaThematics">
                      Thematics
                    </label>
                  </div>
                  <div className="CheckBoxs">
                    <input type="checkbox" name="deporte" value="1" />
                    DEPORTE <br />
                    <input type="checkbox" name="socializar" value="3" />
                    SOCIALIZAR <br />
                    <input type="checkbox" name="lectura" value="5" />
                    LECTURA <br />
                  </div>
                  <div className="CheckBoxs2">
                    <input type="checkbox" name="musica" value="2" />
                    MUSICA <br />
                    <input type="checkbox" name="juegos" value="4" />
                    JUEGOS <br />
                    <input type="checkbox" name="Otros" value="6" />
                    Otros <br />
                  </div>
                  <br></br>
                </div>
                <button
                  className="button_create"
                  type="button"
                  id="button_create"
                  onClick={() => this.props.create_ev(this.evento)}
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
