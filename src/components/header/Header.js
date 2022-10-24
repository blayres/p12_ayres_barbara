import './Header.css';
import logo from '../../assets/logo.png';

function Header() {
    return(
        <div className='container h'>
            <div className='header'>
                <div className='headerLogo'>
                    <img src={logo} alt='logo' />
                </div>

                <div className='headerLinks'>
                    <a href="/">Accueil</a>
                    <a href="/">Profil</a>
                    <a href="/">Réglages</a>
                    <a href="/">Communauté</a>
                </div>
            </div>
        </div>
    )
}

export default Header;