import React from "react";

import VideosList from "../VideosList/VideosList";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Home.css";

export default function Home() {
  return (
    <div>
      <Container className="homepage">
        <Row>
          <Col className="videoslist">
            <VideosList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
