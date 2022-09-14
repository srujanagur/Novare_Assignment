import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import {
  BsJustify,
  BsHouseDoorFill,
  BsCompass,
  BsFillCameraReelsFill,
  BsFileEarmarkPlay,
  BsCollectionPlay,
} from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./SideBar.css";

export default function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        <BsJustify size={30} />
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup className="sidebarmenu">
            <ListGroup.Item action variant="light">
              <BsHouseDoorFill /> {""}Home
            </ListGroup.Item>
            <ListGroup.Item action variant="light">
              <BsCompass />
              {""} Explore
            </ListGroup.Item>
            <ListGroup.Item action variant="light">
              <BsFillCameraReelsFill />
              {""}Shorts
            </ListGroup.Item>
            <ListGroup.Item action variant="light">
              <BsCollectionPlay />
              {""}Subscriptions
            </ListGroup.Item>
            <ListGroup.Item action variant="light">
              <BsFileEarmarkPlay />
              {""} Library
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
