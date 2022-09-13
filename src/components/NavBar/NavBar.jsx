import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <div className="mainnavbar">
      <Navbar className="navbar" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="navButtons" to={"/"}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navButtons" to={"/videocontent"}>
                videos
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
