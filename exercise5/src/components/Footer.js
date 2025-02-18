
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPhone, FaFax, FaEnvelope, FaGoogle, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#e1701a", padding: "20px 0", color: "#fff", textAlign: "center" }}>
      <Container>
        <Row>
          <Col md={6} className="text-left">
            <h5>Our Address</h5>
            <p>Khu đô thị FPT Đà Nẵng</p>
            <p><FaPhone /> +84023111111</p>
            <p><FaFax /> +852 8765 4321</p>
            <p><FaEnvelope /> fptdunh@fpt.edu.vn</p>
          </Col>
          <Col md={6} className="text-right">
            <h5>Follow Us</h5>
            <p>
              <FaGoogle /> <FaFacebook /> <FaLinkedin /> <FaTwitter /> <FaYoutube /> <FaEnvelope />
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; Copyright 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;