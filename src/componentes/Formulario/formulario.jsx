import { useState } from "react";
import "./formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones/listaOpciones";
import Boton from "../Boton/boton";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto]     = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const {registrarColaborador, crearEquipo}=props

    const manejarEnvio = (event) => {
        event.preventDefault(); 
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
        };

        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault();
        crearEquipo({titulo, colorPrimario:color})    
    } 
    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>   
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo
                    titulo = "Nombre"
                    placeholder = "Ingresar nombre" 
                    required = {true} 
                    valor = {nombre} 
                    actualizarValor = {actualizarNombre}
                />
                <Campo 
                    titulo= "Puesto" 
                    placeholder="Ingresar puesto" 
                    required 
                    valor = {puesto} 
                    actualizarValor = {actualizarPuesto}
                />
                <Campo 
                    titulo= "Foto" 
                    placeholder="Ingresar enlace de foto" 
                    required 
                    valor = {foto} 
                    actualizarValor = {actualizarFoto}
                />
                <ListaOpciones  
                    valor = {equipo} 
                    actualizarValor = {actualizarEquipo}
                    equipos = {props.equipos}
                />
                <Boton>
                    Crear
                </Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>   
                <h2>Rellena el formulario para crear el Equipo.</h2>
                <Campo
                    titulo = "Titulo"
                    placeholder = "Ingresar titulo" 
                    required = {true} 
                    valor = {titulo} 
                    actualizarValor = {actualizarTitulo}
                />
                <Campo 
                    titulo= "Color" 
                    placeholder="Ingresar color en Hex..." 
                    required 
                    valor = {color} 
                    actualizarValor = {actualizarColor}
                    type="color"
                />
                <Boton>
                    Registrar equipo
                </Boton>
                </form>


        </section>
    )
}

export default Formulario;