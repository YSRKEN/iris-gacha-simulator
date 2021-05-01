import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Header: React.FC = () => <>
  <h1 className="text-nowrap d-none d-md-block">『あいミス』ガチャシミュレーター</h1>
  <h2 className="text-nowrap d-none d-sm-block d-md-none">『あいミス』ガチャシミュレーター</h2>
  <h3 className="d-block d-sm-none">
    <span className="text-nowrap">『あいミス』ガチャ</span>
    <span className="text-nowrap">シミュレーター</span>
  </h3>
</>;

const IndexPage = () => {
  return (
    <main>
      <title>『あいミス』ガチャシミュレーター</title>
      <Container>
        <Row className="my-3">
          <Col className="text-center">
            <Header />
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default IndexPage;
