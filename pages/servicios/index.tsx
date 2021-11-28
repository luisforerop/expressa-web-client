import React from "react";
import styles from "./servicios.module.css";

const Servicios = () => {
    const {general, titleservicios, servicio1, servicio2, servicio3, servicio4, boton1, boton2, boton3, boton4} = styles
    return(
        <div className={general}>
            <div  className={titleservicios}>
               <h2>Servicios</h2> 
            </div>
            <button className={boton1}>Servicio 1. Identificador de Violencia</button>
            <button className={boton2}>Servicio 2. Sistema de Evaluaciòn de Violencia por genero en la Empresa</button>
            <button className={boton3}>Servicio 3. Alertas Tempranas y apoyo</button>
            <button className={boton4}>Servicio 4. Emisión de alertas según los niveles de violencia</button>
        </div>
    );
}

export default Servicios