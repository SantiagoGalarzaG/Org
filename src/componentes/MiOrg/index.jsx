import { useState } from "react"
import "./MiOrg.css"
const MiOrg = (props) => {
        //Estado - hook
        //useState
        //const [nombreVariable, FuncionActualiza] = useState("valorInicial")

    // const [mostrar,actualizarMostrar] = useState(true);
    // const manejarClick = () => {
    //     actualizarMostrar(!mostrar)
    // }
    

    return (
        <section className="orgSection">
            <h3 className="title">Mi organización</h3>
            <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
        </section>
    )
}

export default MiOrg;