import React from "react";
import "./Evento_per.css";
import Evento from "../../Interface/InterfaceEvento";

interface Props {
  evento: Evento;
  setActive: (input: string, retorno: any) => void;
  delete_ev: (event: Evento) => void;
}

export default class Evento_comp_p extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  completarHoraInicio = (fecha: Date) => {
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
        <form className="contenido_ev">
          <label className="fragmento">
            <label className="EVENTO">EVENTO: </label>
            <label className="name_evento_per">{this.props.evento.name}</label>
            <br></br>
            <label>ADDRESS: </label>
            <label className="address_evento">
              {this.props.evento.address}
            </label>
            <br></br>
            <label>TIME</label>
            <label className="begin">BEGIN: </label>
            <label className="time_begin_ev">
              {this.completarHoraInicio(this.props.evento.time_begin)}
            </label>
            <br></br>
            <label className="end">END: </label>
            <label className="time_end_ev">
              {this.completarHoraInicio(this.props.evento.time_end)}
            </label>
            <br></br>
            <label>THEMATIC(S): </label>
            <label className="thematics">
              {this.props.evento.thematics.map((tema) => (
                <label> {tema} - </label>
              ))}
            </label>
            <button
              type="button"
              className="buttonEdit"
              onClick={() => this.props.setActive("EDITAR", this.props.evento)}
            >
              Edit
            </button>
            <button
              type="button"
              className="buttonDelete"
              onClick={() => this.props.delete_ev(this.props.evento)}
            >
              Delete
            </button>
            <br></br>
          </label>
        </form>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </>
    );
  }
}
