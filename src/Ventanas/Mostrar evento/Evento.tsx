import React from "react";
import "./Evento.css";
import Evento from "../../Interface/InterfaceEvento";

interface Props {
  evento: Evento;
}

export default class Evento_comp extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

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
          <label className="time_begin">
            {this.props.evento.time_begin.getHours()}{":"}{this.props.evento.time_begin.getMinutes()}
          </label>
          <label className="end">END: </label>
          <label className="time_end">
            {this.props.evento.time_end.getHours()}{":"}{this.props.evento.time_end.getMinutes()}
          </label>
          <br></br>
          <label>THEMATIC(S): </label>
          {this.props.evento.thematics.map((tema) => (
            <label> {tema}{" "}</label>
          ))}
          <br></br>
          <br></br>
        </form>
        <br></br>
      </>
    );
  }
}
