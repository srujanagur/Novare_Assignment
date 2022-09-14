import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideos } from "../../redux/actions";
import { useEffect } from "react";

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
                <Row>
                  {video.map((item) => (
                    <Col>
                      <CardBody className="card">
                        <img
                          src={item.videoThumbnail}
                          alt=""
                          height="250px"
                          width="250px"
                        ></img>
                        <img
                          src={item.channelThumbnail}
                          alt=""
                          height="20px"
                          width="20px"
                        />
                        <p>
                          {item.channelName} views: {item.views}
                        </p>
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
