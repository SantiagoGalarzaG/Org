import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import Header from './componentes/Header/header'
import Formulario from './componentes/Formulario/formulario'
import MiOrg from './componentes/MiOrg'
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

import './App.css'



function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
      id: uuid(),
      equipo:"Front End",
      foto:"https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--914bcfe0-f610-4610-a77e-6ea53c53f630/_330603286208.app.webp?preferwebp=true&width=312",
      nombre:"Deyvid Santiago Galarza Gonzalez",
      puesto:"Desarrollador",
      fav: true
    },
    {
      id: uuid(),
      equipo:"Programación",
      foto:"https://assets.laliga.com/squad/2024/t186/p220160/1024x1024/p220160_t186_2024_1_002_000.jpg",
      nombre:"Pepe Garza",
      puesto:"Instructor",
      fav: false

    },
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
])
  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }


  //registrar colaborador
  const  registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador )
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }



  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("eliminar", id)
    const nuevoscolaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id)
    actualizarColaboradores(nuevoscolaboradores)
  }


  // Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos,{...nuevoEquipo, id: uuid()}])
  }

  const like =(id)=>{
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
}

  //actualizar color de equipo
  const actualizarColor = (color,id) => {
    console.log("color", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color 
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }



  return (
    <>
      <div>
        <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario  
          equipos={equipos.map((equipo)=>equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          /> 
      }
        <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map( (equipo) =><Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador =>colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
      )
      }
        
      </div>
      <Footer />
    </>
  )
  
}

export default App
