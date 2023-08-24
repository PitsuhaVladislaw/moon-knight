import './Logo.css'
import Moon from '../../../assets/svg/moon.png'


function Logo() {
    return(
        <section class="logo">
            <div class="logo_menu">
                <div class="img_png">
                    <img 
                    class="img_png" 
                    src={Moon} alt="Скрин луны" />
                </div>
                <div> 
                    <h1 class="main_text"> MOON KNIGHT </h1>
                </div>
            </div>
        </section>
    );
}

export default Logo