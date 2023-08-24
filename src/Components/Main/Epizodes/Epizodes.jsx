import Epizode from './Epizode/Epizode';
import './Epizodes.css'

import Epizode1 from '../../../assets/img/ep/ep 1.png';
import Epizode2 from '../../../assets/img/ep/ep 2.png';
import Epizode3 from '../../../assets/img/ep/ep 3.png';
import Epizode4 from '../../../assets/img/ep/ep 4.png';
import Epizode5 from '../../../assets/img/ep/ep 5.png';
import Epizode6 from '../../../assets/img/ep/ep 6.png';


function Epizodes() {
    return(
        <section className="epizodes">
            <h1 id="5"> Эпизоды сериала </h1>
            <article class="blocks_epi">
                <Epizode 
                    name="Epizode 1" 
                    link={Epizode1}
                />
                <Epizode 
                    name="Epizode 2" 
                    link={Epizode2}
                />
                <Epizode 
                    name="Epizode 3" 
                    link={Epizode3}
                />
                <Epizode 
                    name="Epizode 4" 
                    link={Epizode4}
                />
                <Epizode 
                    name="Epizode 5" 
                    link={Epizode5}
                />
                <Epizode 
                    name="Epizode 6" 
                    link={Epizode6}
                />
            </article>
        </section>
    )
}

export default Epizodes;