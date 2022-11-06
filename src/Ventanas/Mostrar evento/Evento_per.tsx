import React from "react";
import "./Evento_per.css";
import Evento from "../../Interface/InterfaceEvento";

interface Props {
  evento: Evento;
  setActive: (input: string,retorno:any) => void;
}

export default class Evento_comp_p extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

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
            <label className="time_begin">
              {this.props.evento.time_begin.getHours()}
              {":"}
              {this.props.evento.time_begin.getMinutes()}
            </label>
            <label className="end">END: </label>
            <label className="time_end">
              {this.props.evento.time_end.getHours()}
              {":"}
              {this.props.evento.time_end.getMinutes()}
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
              onClick={() => this.props.setActive("EDITAR",this.props.evento)}
            >
              Edit
            </button>
            <button type="button" className="buttonDelete">
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
      </>
    );
  }
}
