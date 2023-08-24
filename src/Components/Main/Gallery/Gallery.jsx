import './Gallery.css'

import PicGal1 from '../../../assets/img/gal/gal1.png'
import PicGal2 from '../../../assets/img/gal/gal2.png'
import PicGal3 from '../../../assets/img/gal/gal3.png'
import PicGal4 from '../../../assets/img/gal/gal4.png'
import PicGal5 from '../../../assets/img/gal/gal5.png'
import PicGal6 from '../../../assets/img/gal/gal6.png'
import PicGal7 from '../../../assets/img/gal/gal7.png'
import PicGal8 from '../../../assets/img/gal/gal8.png'
import PicGal9 from '../../../assets/img/gal/gal9.png'
import PicGal10 from '../../../assets/img/gal/gal10.png'
import PicGal11 from '../../../assets/img/gal/gal11.png'
import PicGal12 from '../../../assets/img/gal/gal12.png'
import PicGal13 from '../../../assets/img/gal/gal13.png'
import PicGal14 from '../../../assets/img/gal/gal14.png'
import PicGal15 from '../../../assets/img/gal/gal15.png'

function Gallery() {
    const galImg = document.querySelectorAll('#gallery img');
    //const blockPic = document.querySelector("#picture");
    //const button = document.querySelector("#picture button");
    //const imgPic = document.querySelector("#picture img");

    galImg.forEach(image => {
        image.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("work 1")
        })
    });
    /*

    button.addEventListener('click', () => {
        blockPic.style.display = "none";
    });
    */
    return(
        <section className='gall-pic'>
            <h1>Галерея сериала</h1>
            <article id='gallery'>
                <div><img src={PicGal1} alt="pic" /></div>
                <div><img src={PicGal2} alt="pic" /></div>
                <div><img src={PicGal3} alt="pic" /></div>
                <div><img src={PicGal4} alt="pic" /></div>
                <div><img src={PicGal5} alt="pic" /></div>
                <div><img src={PicGal6} alt="pic" /></div>
                <div><img src={PicGal7} alt="pic" /></div>
                <div><img src={PicGal8} alt="pic" /></div>
                <div><img src={PicGal9} alt="pic" /></div>
                <div><img src={PicGal10} alt="pic" /></div>
                <div><img src={PicGal11} alt="pic" /></div>
                <div><img src={PicGal12} alt="pic" /></div>
                <div><img src={PicGal13} alt="pic" /></div>
                <div><img src={PicGal14} alt="pic" /></div>
                <div><img src={PicGal15} alt="pic" /></div>
            </article>
            <article id='picture' style={{display: 'none'}}>
                <button id="button">&times;</button>
                <img src={PicGal1} alt=""></img>
            </article>
        </section>
    )
}

export default Gallery;