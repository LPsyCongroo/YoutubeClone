import React from 'react';

const VideoListItem = ({video}) => {
  // const video = props.video;
  console.log(video);

  const imageURL = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="video-list-item media">
        <div className="media-left">
          <img src={imageURL} alt="" className="media-object"/>
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;