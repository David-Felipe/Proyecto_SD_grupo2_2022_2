import React from "react";
import "./Ventana_bev.css";
import Banner from "./Banner/Banner";

export default class Ventana_bev extends React.Component<{}> {
  render(): JSX.Element {
    return (
        <section className="home">
            {/* <!-- Aqui va lo que es el banner unicamente --> */}
            <Banner/>
            {/* <!-- Aqui va el resto --> */}
            <div className="Content">
                <div>
                    <div className="mapa">
                        {/* <!-- Aqui va implementado el mapa --> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15941.379358161692!2d-74.08466621092664!3d4.643676758242312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1666105674940!5m2!1ses-419!2sco" width="699" height="690" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mapa_google"></iframe>
                    </div>
                    <div className="consultas">
                        <label className="titulo">EVENTS CLOSE TO YOU</label>
                        {/* <!-- Aqui va la lista de resultados de consulta --> */}
                        <div></div>
                    </div>
                </div>                
            </div>
            <button type="button" className="button_ev" >
                <a href="D:\Desktop\juanXo\U\2022 - 2S\Estructuras de datos\Proyecto\Mockups Interfaz\Ventana Evento\Ventana Evento.html" className="text_button">CREATE YOUR EVENT</a>
            </button>
        </section>
    );
  }
}
