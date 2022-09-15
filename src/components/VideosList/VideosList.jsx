import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideos } from "../../redux/actions";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import {
  BsHouseDoorFill,
  BsCompass,
  BsFillCameraReelsFill,
  BsFileEarmarkPlay,
  BsCollectionPlay,
} from "react-icons/bs";
import { CardBody } from "reactstrap";
import ListGroup from "react-bootstrap/ListGroup";

import "./VideosList.css";

export default function VideosList() {
  const video = useSelector((state) => state.searchForKeyword);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  return (
    <div>
      <Container>
        <Row>
          <Col className="listitems" sm={1}>
            <ListGroup className="sidebarmenu1">
              <ListGroup.Item action variant="light">
                <BsHouseDoorFill />
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <BsCompass />
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <BsFillCameraReelsFill />
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <BsCollectionPlay />
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <BsFileEarmarkPlay />
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={11}>
            <div>
              <Container>
                <Row sm={2}>
                  {video.map((item) => (
                    <Col>
                      <CardBody className="card">
                        <ReactPlayer
                          controls
                          url={item.videoId}
                          width="400px"
                          height="300px"
                        />
                        <div className="channelinfosection">
                          <img
                            className="thumbnail"
                            src={item.channelThumbnail}
                            alt=""
                          />
                          <Link to={`/videocontent/${item.videoName}`}>
                            {item.videoName}
                          </Link>
                          <p>{item.videoName}</p>
                        </div>
                        <div>
                          <p>{item.channelName} </p>
                          <p>views: {item.views}</p>
                        </div>
                      </CardBody>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
