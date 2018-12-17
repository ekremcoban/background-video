import React from 'react';
import './video.scss';
import Video from '../../assets/img/hanukkahh.mp4';

const video = () => {
    return (
        <div>
            <div className="bg-video u-margin-big">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={Video} type="video/mp4"></source>
                    <source src="img/video.webm" type="video/webm"></source>
                    Your browser is not supported!
            </video>
            </div>
            <div className="u-center-text u-margin-big u-position">TEST</div>
        </div>
    );
}

export default video;