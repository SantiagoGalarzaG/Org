import "./footer.css"

const Footer =() =>{
    return <footer className='footer' style={{ backgroundImage: 'url(./img/Footer_fondo.png)' }}>
        <div className='redes'>
            <a href='https://www.facebook.com/DeyvidGalarzaG04/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo (1).png' alt='org' />
        <strong>Desarrollado por Santiago Galarza</strong>
    </footer>
}

export default Footer