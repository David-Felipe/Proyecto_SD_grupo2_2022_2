import React from "react";
import "./Banner.css";

interface Props {
  setActive: (input: string,retorno:any) => void;
}

export default class Banner extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="Banner">
        <h1>SMILE</h1>
        <label className="label_subtitle" id="labelTitle">
          conect with people
        </label>
        <button
          className="icono"
          onClick={() => this.props.setActive("PERFIL","")}
        >
          <img className="iconoImg" src="./image_2022-10-01_182055546.png" />
        </button>
      </div>
    );
  }
}
