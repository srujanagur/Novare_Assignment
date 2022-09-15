import React from "react";
// import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { fetchVideos } from "../../redux/actions";

import { Button } from "bootstrap";

import "./VideoContent.css";

export default function VideoContent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  const videos = useSelector((state) => state.searchForKeyword);
  const { name } = useParams();

  const eachVideo = videos.filter((video) => video.videoName === name);

  console.log(
    eachVideo.map((thing) => {
      return thing.videoName.trim(0, 5);
    })
  );

  return (
    <div>
      {eachVideo.map((item) => {
        return (
          <div>
            <div>
              {/* <ReactPlayer
                controls
                url={item.videoId}
                width="640px"
                height="360px"
              /> */}
            </div>
            <div>
              <Button
                className="cartbtn"
                variant="success"
                onClick={() => navigate("/")}
              >
                Back
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
