import './Main.css'

import Actors from './Actors/Actors';
import Description from './Description/Description';
import Epizodes from './Epizodes/Epizodes';
import Trailers from './Trailers/Trailers';
import Gallery from './Gallery/Gallery';

function Main() {
    return(
        <main>
            <Epizodes />
            <Actors />
            <Description />
            <Gallery />
            <Trailers />
        </main>
    );
}

export default Main;