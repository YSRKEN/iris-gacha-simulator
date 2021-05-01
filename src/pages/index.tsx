import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';

const IndexPage: React.FC = () =>
  <main>
    <title>『あいミス』ガチャシミュレーター</title>
    <Container>
      <Row className="my-3">
        <Col className="text-center">
          <Header />
        </Col>
      </Row>
    </Container>
  </main>;

export default IndexPage;
