import React from "react";
import "./Ventana_emergente.css";

interface Props {
  changeShowError: (condition: boolean) => void;
  setActive: (input: string) => void;
}

export class Ventana_emergente extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <>
        <div className="Overlay">
          <div className="Ventana">
            <img className="Cara" src="./image 7.png" />
            <label className="Texto">
              Ups No te encuentras Resgistrado ¿Quieres hacerlo?
            </label>
            <button
              className="button_yes"
              onClick={() => this.props.setActive("REGISTRO")}
            >
              SI
            </button>
            {/* Cuando se oprime el boton no se llama a la funcion changeShowError para convertir el false el showError y asi cerrar la ventana emergente. */}
            <button
              className="button_no"
              onClick={() => this.props.changeShowError(false)}
            >
              NO
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Ventana_emergente;
