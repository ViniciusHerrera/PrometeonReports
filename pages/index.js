import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Navbar from '../src/components/NavbarPro';
import Sidebar from '../src/components/Sidebar';

export default function Home() {
  return (
    <>
      <Navbar />

      <Container fluid>
        <Row>
          <Sidebar />
        </Row>
      </Container>
    </>
  );
}
