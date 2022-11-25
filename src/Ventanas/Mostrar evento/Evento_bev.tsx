import React from "react";
import "./Evento_bev.css";
import Evento from "../../Interface/InterfaceEvento";

interface Props {
  evento: Evento;
}

export default class Evento_comp extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  completarHoraInicio_sinT = (fecha: Date) => {
    var mes = fecha.getMonth() + 1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    var hora = fecha.getHours(); //obteniendo hora
    var minutos = fecha.getMinutes(); //obteniendo minuto

    return (
      ano +
      "-" +
      this.minTwoDigits(mes) +
      "-" +
      this.minTwoDigits(dia) +
      "  " +
      this.minTwoDigits(hora) +
      ":" +
      this.minTwoDigits(minutos)
    );
  };

  minTwoDigits = (n: number) => {
    return (n < 10 ? "0" : "") + n;
  };

  render(): JSX.Element {
    return (
      <>
        <form className="contenido">
          <label>EVENTO: </label>
          <label className="name_evento">{this.props.evento.name}</label>
          <label className="distancia_evento">
            {this.props.evento.distancia}
          </label>
          <label className="km"> km</label>
          <br></br>
          <label>ADDRESS: </label>
          <label className="address_evento">{this.props.evento.address}</label>
          <br></br>
          <label>TIME</label>
          <label className="begin">BEGIN: </label>
          <label className="time_begin_ev">
            {this.completarHoraInicio_sinT(this.props.evento.time_begin)}
          </label>
          <br></br>
          <label className="end">END: </label>
          <label className="time_end_ev">
            {this.completarHoraInicio_sinT(this.props.evento.time_end)}
          </label>
          <br></br>
          <label>THEMATIC(S): </label>
          <label className="ShowThems">
            {this.props.evento.thematics[0] ? " DEPORTE -" : ""}
            {this.props.evento.thematics[1] ? " SOCIALIZAR -" : ""}
            {this.props.evento.thematics[2] ? " LECTURA -" : ""}
            {this.props.evento.thematics[3] ? " MUSICA -" : ""}
            {this.props.evento.thematics[4] ? " JUEGOS -" : ""}
            {this.props.evento.thematics[5] ? " OTROS -" : ""}
          </label>
          <br></br>
          <br></br>
        </form>
        <br></br>
      </>
    );
  }
}
