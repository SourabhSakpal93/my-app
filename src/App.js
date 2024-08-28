import { Card, Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Footer_Section from './Footer_Section';
import Header from './Header';
import { Button } from 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Container>
          <Row>
            <Col className='col-12  text-center py-4'>
              <h1>Our Courses</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card></Col>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card></Col>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card></Col>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card></Col>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card></Col>

          </Row>
        </Container>
      </Container>
      <Footer_Section />

    </div>
  );
}

export default App;
