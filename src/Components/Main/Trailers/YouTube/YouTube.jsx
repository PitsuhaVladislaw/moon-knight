import React from "react";
import PropTypes from "prop-types";

import './YouTube.css'

const YoutubeEmbed = ({ embedId, number }) => (
    <div>
        <div className="video-responsive">
            <iframe
            width="auto"
            height="auto"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
        </div>
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;