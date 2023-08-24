import './Actors.css'

import LeftArrow from '../../../assets/svg/Arrow 1.png';
import RightArrow from '../../../assets/svg/Arrow 2.png'
import Actor from './Actor/Actor';

import Photo1 from '../../../assets/img/act/act 1.png'
import Photo2 from '../../../assets/img/act/act 2.png'
import Photo3 from '../../../assets/img/act/act 3.png'
import Photo4 from '../../../assets/img/act/act 4.png'

function Actors() {
    return(
        <section className="actors">
            <header>
                <div class="arrow">
                    <img src={LeftArrow} alt="left arrow" />
                </div>
                <div class="header_text">
                    <h1 id="2"> Актерский состав сериала </h1>
                </div>
                <div class="arrow">
                    <img src={RightArrow} alt="right arrow" />
                </div>
            </header>
            <article className='list'>
                <Actor  
                    name="Оскар Айзек"
                    link={Photo1}
                    role="Марк спектор/Стивен Грант/Джейк Локли"
                />
                <Actor  
                    name="Итан Хоук"
                    link={Photo3}
                    role="Артур Хэрроу"
                />
                <Actor  
                    name="Мэй Каламави"
                    link={Photo2}
                    role="Лейлу Эль-Фаули"
                />
                <Actor  
                    name="Гаспар Ульель"
                    link={Photo4}
                    role="Антон Могарт"
                />
            </article>
        </section>
    )
}

export default Actors;