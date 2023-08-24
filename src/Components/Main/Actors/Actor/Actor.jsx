import './Actor.css';

function Actor(actor) {
    return(
        <div className='actor-block'>
            <div>
                <img src={actor.link} alt="actor_photo" />
            </div>
            <div class="menu-info">
                <div>
                    <h2>{actor.name}</h2>
                </div>
                <div>
                    <h3>{actor.role}</h3>
                </div>
            </div>
        </div>
    );
}

export default Actor;