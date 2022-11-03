import React from "react";
import "./Banner.css";

export default class Banner extends React.Component<{}>{

    render(): JSX.Element {
        return(
            <div className="Banner">
                <h1>SMILE</h1>
                <label className="label_subtitle" id="labelTitle">conect with people</label>
                <a className="icono">
                    <img className="iconoImg"
                      src="./image_2022-10-01_182055546.png"
                    />
                </a>                
            </div>
        );
    }
}