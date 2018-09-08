import React from 'react';
import VideoListItem from './Video_List_Item'

const VideoList = (props) => {
   const videoItems = props.video.map((video) => {
        return <VideoListItem video={video} />
    });

    return (
        <ul className="col-mid-4 list-group">
           {videoItems}
        </ul>
    );
};

export default VideoList
