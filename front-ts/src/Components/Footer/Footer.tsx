import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default function Footer() {
  const [showDateChanger, setShowDateChanger] = useState(false);

  function changeTime(e: any) {
    setShowDateChanger(false);
    alert(e.target.value);
  }

  return (
    <div>
      <Navbar fixed="bottom">
        <Container className="d-flex justify-content-center">
          <Navbar.Text
            onDoubleClick={() => setShowDateChanger((pre) => !pre)}
            className="d-flex align-items-center flex-column"
          >
            made in <a href="https://elbrusboot.camp/">Elbrus</a>
            {showDateChanger && (
              <input
                type="date"
                className="form-control"
                onChange={(e) => changeTime(e)}
              ></input>
            )}
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
}