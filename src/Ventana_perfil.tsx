//Ventana donde se muestra toda la informacion del perfil.
import React, { ChangeEvent } from "react";
import "./Ventana_perfil.css";
import {Perfil} from "./App";

interface Props {
    perfil: Perfil;
    edit: (perfil: Perfil) => void;
}

export default class Ventana_perfil extends React.Component<Props,Perfil>{

    constructor(props:Props){
        super(props) 
        this.state = this.props.perfil;       
    }

    edit = () => {
        this.props.edit(this.state);
        // codigo para editar

    }

    changeName = (e:ChangeEvent) => {
        this.setState({name: (e.target as HTMLInputElement).value})
    }

    changeLastname = (e:ChangeEvent) => {
        this.setState({lastname: (e.target as HTMLInputElement).value})
    }

    changeEmail = (e:ChangeEvent) => {
        this.setState({email: (e.target as HTMLInputElement).value})
    }
    changeUsername = (e:ChangeEvent) => {
        this.setState({username: (e.target as HTMLInputElement).value})
    }

    changePassword = (e:ChangeEvent) => {
        this.setState({password: (e.target as HTMLInputElement).value})
    }

    changeConfirmPassword = (e:ChangeEvent) => {
        this.setState({confirm_password: (e.target as HTMLInputElement).value})
    }
    
    render():JSX.Element{
        return(
            <section className="home">
                {/* <!-- Aqui va lo que es el banner unicamente --> */}
                <div className="Banner">
                    <h1>SMILE</h1>
                    <label className="label_subtitle" id="labelTitle">connect with people</label>
                    <a className="icono" href="D:\Desktop\juanXo\U\2022 - 2S\Estructuras de datos\Proyecto\Mockups Interfaz\Ventana Perfil\Ventana Perfil.html">
                        <img
                        src="./image_2022-10-01_182055546.png"
                        width="135px"
                        />
                    </a>                
                </div>
                {/* <!-- Aqui va el resto --> */}
                <div className="informacion">
                    <img className="foto" src="./image_2022-10-01_182055546.png" width="300px"></img>
                    <button className="Editar" type="button" onClick={this.edit}>Edit</button>
                    <label className="titulo" >INFORMATION ABOUT YOU</label>
                    <form>
                        <div className="nombre">
                            <label  className="name" id="etiquetaLastname">Name(s): </label>
                            <br></br>
                            <input className="input_name"  id="inputName" value={this.state.name} onChange={this.changeName}></input>
                            <br></br>
                        </div>
                        <div className="apellido">
                            <label  className="lastname" id="etiquetaLastname">Last Name(s): </label>
                            <br></br>
                            <input className="input_lastname"  id="inputLastName" value ={this.state.lastname} onChange={this.changeLastname}></input>
                            <br></br>
                        </div>
                        <div className="correo">
                            <label  className="email" id="etiquetaEmail">Email unal: </label>
                            <br></br>
                            <input className="input_email"  id="inputEmail" value ={this.state.email} onChange={this.changeEmail}></input><br></br>
                        </div>
                        <div className="username">
                            <label  className="etiquetausername" id="etiquetaEmail">Username: </label>
                            <br></br>
                            <input className="input_username"  id="inputUsername" value ={this.state.username} onChange={this.changeUsername}></input>
                            <br></br>
                        </div>
                        <div className="contraseña">
                            <label  className="password" id="etiquetaPassword">Password: </label>
                            <br></br>
                            <input className="input_password"  id="inputPassword" value ={this.state.password} onChange={this.changePassword}></input>
                            <br></br>
                        </div>
                        <div className="confirm_contraseña">
                            <label  className="confirm_password" id="etiquetaConfirmPassword">Confirm Password: </label>
                            <br></br>
                            <input className="input_confirmpassword"  id="inputConfirmPassword" value ={this.state.confirm_password} onChange={this.changeConfirmPassword}></input>
                            <br></br>
                        </div>
                    </form>
                </div>
                <div className="eventos">
                    {/* <!-- Aqui va el consumo de servicios de los eventos. --> */}
                </div>
            </section>
        );
    }
}
