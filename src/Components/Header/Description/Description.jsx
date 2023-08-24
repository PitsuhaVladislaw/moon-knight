import './Description.css'
import PicOfMoonKnight from '../../../assets/img/page/page 2.png'

function Description() {
    return(
        <article class="description">
            <div className='desc-text'>
                <p>
                    Марк Спектор, наёмник, страдающий диссоциативным расстройством личности, 
                    втянут в смертельную тайну, связанную с египетскими богами, вместе со 
                    своими множественными личностями, такими как Стивен Грант.
                </p>
                <p>
                    Теперь он призрак... призрак луны... рыцарь мести луны... и у 
                    него есть работа. 
                </p>
                <p>
                    Он - Лунный Рыцарь, носитель мантии Хонсу. Хонсу - вершитель правосудия. 
                    Он - месть…
                </p>
            </div>
            <div>
                <img src={PicOfMoonKnight} alt="Moon Knight" />
            </div>
        </article>
    );
}

export default Description;