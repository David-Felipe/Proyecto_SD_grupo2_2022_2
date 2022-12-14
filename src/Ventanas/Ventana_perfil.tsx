//Ventana donde se muestra toda la informacion del perfil.
import React, { ChangeEvent } from "react";
import "./Ventana_perfil.css";
import Perfil from "../Interface/InterfacePerfil";
import Banner from "Banner/Banner";
import Evento_comp_p from "./Mostrar evento/Evento_per";
import Evento from "../Interface/InterfaceEvento";

interface Props {
  perfil: Perfil;
  edit: (perfil: Perfil, username:string) => void;
  setActive: (input: string, retorno: any) => void;
  delete: (evento:Evento) => void;
  arrayEvento: Evento[];
}

export default class Ventana_perfil extends React.Component<Props, Perfil> {
  constructor(props: Props) {
    super(props);
    this.state = this.props.perfil;
  }

  edit = () => {
    this.props.edit(this.state,this.props.perfil.username);
    //imprime solo para verificar si se modifica
    // console.log(this.state);
  };

  changeName = (e: ChangeEvent) => {
    this.setState({ name: (e.target as HTMLInputElement).value });
  };

  changeLastname = (e: ChangeEvent) => {
    this.setState({ lastname: (e.target as HTMLInputElement).value });
  };

  changeUsername = (e: ChangeEvent) => {
    this.setState({ username: (e.target as HTMLInputElement).value });
  };

  changePassword = (e: ChangeEvent) => {
    this.setState({ password: (e.target as HTMLInputElement).value });
  };

  changeConfirmPassword = (e: ChangeEvent) => {
    this.setState({ confirm_password: (e.target as HTMLInputElement).value });
  };

  render(): JSX.Element {
    return (
      <section className="home">
        {/* <!-- Aqui va lo que es el banner unicamente --> */}
        <Banner setActive={this.props.setActive} />
        {/* <!-- Aqui va el resto --> */}
        <div className="informacion">
          <img
            className="arrow_p"
            src="./Arrow 2.png"
            onClick={() => this.props.setActive("BUSQUEDA", "")}
          />
          <img
            className="foto"
            src="./image_2022-10-01_182055546.png"
            width="300px"
          ></img>
          <button className="Editar" type="button" onClick={() => this.edit()}>
            Edit
          </button>
          <label className="titulo_information">INFORMATION ABOUT YOU</label>
          <form>
            <div className="nombre_p">
              <label className="name" id="etiquetaLastname">
                Name(s):{" "}
              </label>
              <br></br>
              <input
                className="input_name"
                id="inputName"
                value={this.state.name}
                onChange={this.changeName}
              ></input>
              <br></br>
            </div>
            <div className="apellido_p">
              <label className="lastname" id="etiquetaLastname">
                Last Name(s):{" "}
              </label>
              <br></br>
              <input
                className="input_lastname"
                id="inputLastName"
                value={this.state.lastname}
                onChange={this.changeLastname}
              ></input>
              <br></br>
            </div>
            <div className="username_p">
              <label className="etiquetausername" id="etiquetaEmail">
                Username:{" "}
              </label>
              <br></br>
              <input
                className="input_username"
                id="inputUsername"
                value={this.state.username}
                onChange={this.changeUsername}
              ></input>
              <br></br>
            </div>
            <div className="contrase??a_p">
              <label className="password" id="etiquetaPassword">
                Password:{" "}
              </label>
              <br></br>
              <input
                className="input_password"
                id="inputPassword"
                value={this.state.password}
                onChange={this.changePassword}
              ></input>
              <br></br>
            </div>
            <div className="confirm_contrase??a_p">
              <label className="confirm_password" id="etiquetaConfirmPassword">
                Confirm Password:{" "}
              </label>
              <br></br>
              <input
                className="input_confirmpassword"
                id="inputConfirmPassword"
                value={this.state.confirm_password}
                onChange={this.changeConfirmPassword}
              ></input>
              <br></br>
            </div>
          </form>
        </div>
        <div className="eventos">
          <br></br>
          {/* <!-- Aqui va el consumo de servicios de los eventos. --> */}
          {this.props.arrayEvento.map((minievent) => (
            <Evento_comp_p
              evento={minievent}
              setActive={this.props.setActive}
              delete_ev={this.props.delete}
            />
          ))}
        </div>
        <div></div>
      </section>
    );
  }
}
