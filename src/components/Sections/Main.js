import '../../App.css';
import Perfil from '../../images/perfil.jpeg';
import Cards from '../Cards/Cards';
import ContactUs from '../Mail/Mail';

const Main = () => {
    return(
        <div className="main">
    <div className='imgdiv' id='imgdiv'>
    <img src={Perfil} className='imgprofile' />
  </div>

  <section>
    <div className='aboutme'>
      <p className='profiletitle'>Sobre mí</p>
      <p className='profileinfo'>• Nombre: Agustín Bartel.</p>
      <p className='profileinfo'>• Fecha de nacimiento: 05/03/2003.</p>
      <p className='profileinfo'>• Residencia: Juan Lacaze, Colonia, Uruguay.</p>
    </div>

  <div className='espacio' id='educationpoint'></div>

    <div className='education' id='educationdiv'>
      <p className='profiletitle'>Educación</p>
      <p className='profileinfo'>• Escuela 105, Juan Lacaze (2007-2014).</p>
      <p className='profileinfo'>• UTU, Juan Lacaze (2015-2020).</p>
      <p className='profileinfo'>• Analista Programador - CTC, Rosario (2021 - act.).</p>
    </div>

  <div className='espacio' id='languagespoint'></div>

    <div className='languages' id='languagesdiv'>
      <p className='profiletitle'>Idiomas</p>
      <p className='profileinfo'>• Español - nativo.</p>
    </div>

  <div className='espacio' id='portfoliopoint'></div>

    <div className='portfolio' id='portfoliodiv'>
      <p className='profiletitle'>Proyectos</p>
      <div className='cards'>
        <Cards />
      </div>
    </div>
  </section>

  <div className='espacio' id='contactpoint'></div>

  <div className='contactocontainer'>
  <p className='profiletitle'>Contacto</p>
    <div className="contacto">
      <ContactUs />
    </div>
  </div>
  </div>);
}

export default Main;