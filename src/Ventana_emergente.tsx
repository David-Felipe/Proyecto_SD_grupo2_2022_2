import React from "react";
import "./Ventana_emergente.css";

export const Ventana_emergente = ({ showError, changeShowError }) => {
  return (
    <>
      {showError && (
        <div className="Overlay">
          <div className="Ventana">
            <img className="Cara" src="./image 7.png" />
            <label className="Texto">
              Ups No te encuentras Resgistrado ¿Quieres hacerlo?
            </label>
            <button className="button_yes">SI</button>
            {/* Cuando se oprime el boton no se llama a la funcion changeShowError para convertir el false el showError y asi cerrar la ventana emergente. */}
            <button
              className="button_no"
              onClick={() => changeShowError(false)}
            >
              NO
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Ventana_emergente;
