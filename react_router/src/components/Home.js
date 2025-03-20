import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Image } from "react-bootstrap";

function Home() {
  return (
    <div>
      {/* Carousel */}
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/slide1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/slide2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/slide3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Danh sách hình ảnh tròn */}
      <Container className="text-center mt-4">
        <Row>
          <Col>
            <Image src="./images/menu-01.jpg" roundedCircle className="food-image" />
          </Col>
          <Col>
            <Image src="./images/menu-02.jpg" roundedCircle className="food-image" />
          </Col>
          <Col>
            <Image src="./images/menu-03.jpg" roundedCircle className="food-image" />
          </Col>
          <Col>
            <Image src="./images/menu-04.jpg" roundedCircle className="food-image" />
          </Col>
          <Col>
            <Image src="./images/menu-05.jpg" roundedCircle className="food-image" />
          </Col>
          <Col>
            <Image src="./images/menu-06.jpg" roundedCircle className="food-image" />
          </Col>
        </Row>
        <h1 style={{ color: "red", marginTop: "20px", textAlign: "left", paddingLeft: "20px" }}>This is Home Page</h1>
      </Container>
    </div>
  );
}

export default Home;
