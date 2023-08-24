import './Trailers.css';
import YoutubeEmbed from './YouTube/YouTube';

function Trailers() {
    return(
        <section className='trailers' id='#trailers'>
            <h1>Трейлеры сериала</h1>
            <article>
                <YoutubeEmbed embedId='x7Krla_UxRg' />
                <YoutubeEmbed embedId='ZPCJvTq9wiU' />
                <YoutubeEmbed embedId="KM3Yx-5Ymiw" /> 
            </article>
        </section>
    )
}

export default Trailers;