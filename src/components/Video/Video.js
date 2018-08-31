import React from 'react';

export default function Video(props) {
    return (
        <div>
            
        <p>{props.title}</p>
        <iframe
            src={props.vidSrc}
            frameBorder="0"
            allowFullScreen
            ng-show="showvideo"/>
            </div>
    )
}

