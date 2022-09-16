import React from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Button, Form } from "react-bootstrap";

import { fetchVideos } from "../../redux/actions";

import "./VideoContent.css";

export default function VideoContent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  const videos = useSelector((state) => state.searchForKeyword);
  const { vid } = useParams();

  const eachVideo = videos.filter((video) => video.id == vid);

  return (
    <div className="videocontent">
      <h3>{videos[0].videoName}</h3>
      <div>
        <ReactPlayer
          controls
          url={eachVideo[0].videoId}
          width="640px"
          height="340px"
        />
      </div>
      <div>
        <h4>{eachVideo[0].channelName}</h4>
        <h5> Views: {eachVideo[0].views}</h5>
        <Form className="d-flex">
          <Button variant="outline-success" onClick={() => navigate(`/`)}>
            comments
          </Button>
          <Form.Control
            type="text"
            placeholder="any comments"
            className="menubarsearch"
            aria-label="comments"
            disabled
          />
        </Form>
      </div>
    </div>
  );
}
