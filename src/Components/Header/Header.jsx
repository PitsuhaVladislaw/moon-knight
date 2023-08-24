import Description from './Description/Description';
import './Header.css'
import Logo from './Logo/Logo';

function Header() {
    return(
        <header>
            <Logo />
            <Description />
        </header>
    )
}

export default Header;