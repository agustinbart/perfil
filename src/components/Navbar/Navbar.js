import React from 'react'
import './Navbar.css';
import {Link} from 'react-scroll'

class Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar'>
                <div className='logo_content'>
                    <div className='logo'>
                        <i className='bx bxs-face'></i>
                        <div className='logo_name'>Perfil</div>
                    </div>
                </div>
                <ul className='nav_list'>
                    <Link to="imgdiv" spy={true} smooth={true} className='links'>
                    <li className='navli'>
                        <i className='bx bx-face iconli'></i>
                        <span className='links_name'>Sobre mí</span>
                    </li>
                    </Link>
                    <Link to="educationpoint" spy={true} smooth={true} className='links'>
                    <li className='navli'>
                        <i className='bx bx-book-content iconli'></i>
                        <span className='links_name'>Educación</span>
                    </li>
                    </Link>
                    <Link to="languagespoint" spy={true} smooth={true} className='links'>
                    <li className='navli'>
                        <i className='bx bx-microphone iconli'></i>
                        <span className='links_name'>Idiomas</span>
                    </li>
                    </Link>
                    <Link to="portfoliopoint" spy={true} smooth={true} className='links'>
                    <li className='navli'>
                        <i className='bx bx-briefcase-alt-2 iconli'></i>
                        <span className='links_name'>Proyectos</span>
                    </li>
                    </Link>
                    <Link to="contactpoint" spy={true} smooth={true} className='links'>
                    <li className='navli'>
                        <i className='bx bx-envelope iconli' ></i>
                        <span className='links_name'>Contacto</span>
                    </li>
                    </Link>
                    <li className='name'>
                        <span className='links_name'><i className='bx bxl-linkedin' /> bartelagustin</span>
                    </li>
                </ul>
            </nav >
        )
    }
}

export default Navbar;