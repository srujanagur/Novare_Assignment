import React from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import "./VideoContent.css";
import { fetchVideos } from "../../redux/actions";

export default function VideoContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  const { videos } = useSelector((state) => state.playlistReducer);
  return (
    <div>
      {videos.map((video) => {
        return (
          <div>
            <ReactPlayer
              controls
              url={video.videoId}
              width="640px"
              height="360px"
            />
          </div>
        );
      })}
    </div>
  );
}
