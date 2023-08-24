import './Episode.css'

function Epizode(props) {
    return (
        <div class="block_episode">
            <div>
                <img src={props.link} alt="Epizodes" />
            </div>
            <div class="block_text_epi">
                <h4>{props.name}</h4>
            </div>
        </div>
    );
}

export default Epizode;