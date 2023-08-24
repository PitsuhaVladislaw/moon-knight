import './NavMenu.css';

const NavMenu = () => {
    function openNav() {
        const header = document.querySelector('#header');
        header.style.display = "none";
        NavEpizodes();
    }

    function NavEpizodes() {
        const epizodes = document.querySelector('#epizodes');
        epizodes.classList.remove("closeNav");
    }

    return(
        <nav className='nav-menu'>
            <h1 id='header' onClick={openNav}>Эпизоды</h1>
            <div className='closeNav' id='epizodes'>
                <button>Эпизод 1</button>
                <button>Эпизод 2</button>
                <button>Эпизод 3</button>
                <button>Эпизод 4</button>
                <button>Эпизод 5</button>
                <button>Эпизод 6</button>
            </div>
        </nav>
    )
}

export default NavMenu;