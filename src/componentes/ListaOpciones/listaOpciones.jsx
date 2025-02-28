import { useState } from "react";
import "./listaOpciones.css";

const ListaOpciones=(props)=>{

    //Metodo map -> arreglo.map( (equipo,index) => {
    //  return <option></option>
    // })


    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }
    return(
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>  
                <option 
                    value=""
                    disable defaultValue="" 
                    hidden
                >
                    Seleccionar Equipo
                </option>
                {props.equipos.map( (equipos, index)=><option key={index} value={equipos}>{equipos}</option>)}
            </select>
        </div>
    )
}

export default ListaOpciones;