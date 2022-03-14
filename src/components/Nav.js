import React from "react";
import { Navbar,Container } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Nav = ({inputValue,handleInput}) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://react-bootstrap.netlify.app/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
        <input placeholder="search for a movie" value={inputValue} onChange={handleInput} />
        <ReactStars
              count={5}
              edit={true}
              
              size={24}
              activeColor="#ffd700"
            />
      </Container>
    </Navbar>
  );
};

export default Nav;
