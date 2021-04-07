import React from 'react';
import { Container, Row, CardDeck, Card } from 'react-bootstrap';
import { CardBody } from 'reactstrap';
import Navbar from '../src/components/NavbarPro';
import Sidebar from '../src/components/Sidebar';

export default function Home() {
  return (
    <>
      <Navbar />

      <Container fluid>
        <Row>
          <Sidebar className="col-sm-4 col-md-3 col-lg-3 col-xl-2"/>

          <main className="col-sm-8 col-md-9 col-lg-9 col-xl-10 ml-auto">
            <div className="d-flex flex-nowrap align-items-center justify-content-between border-bottom pt-3 pb-2 mb-3">
              <h2>Home</h2>
            </div>

            <h3>Principais Aplicações</h3>
            <br /><br />
            
            <CardDeck>
              <Card>
                <Card.Header as="h5">Dashboard 4.PRO</Card.Header>
                <CardBody className="justify-content-center align-items-center">
                  <Card.Img src="/images/pages/dftImagem.png"/>
                </CardBody>
              </Card>

              <Card>
                <Card.Header as="h5">Grafana</Card.Header>
                <CardBody className="justify-content-center align-items-center">
                  <Card.Img src="/images/pages/grafana.png"/>
                </CardBody>
              </Card>
            </CardDeck>
          </main>
        </Row>
      </Container>
    </>
  );
}
