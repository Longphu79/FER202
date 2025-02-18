import logo from './logo.svg';
import './App.css';
import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import StudentCard from './components/StudentCard';
import NavBar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

const students = [
  { id: "DE160182", name: "Nguyễn Hữu Quốc Khánh", location: "Đà Nẵng", image: "student1.jpg" },
  { id: "DE160377", name: "Choy Vĩnh Thiện", location: "Quảng Nam", image: "student2.jpg" },
  { id: "DE160547", name: "Đỗ Nguyễn Phúc", location: "Quảng Nam", image: "student3.jpg" },
  { id: "DE170049", name: "Lê Hoàng Minh", location: "Đà Nẵng", image: "student4.jpg" },
];


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      
      <Container fluid>
      <h2 className="text-center">Students Detail</h2>
      <Row>
        {students.map((student) => (
          <Col sm={6} md={6} key={student.id} className="mb-3">
            <StudentCard student={student} />
          </Col>
        ))}
      </Row>
    </Container>
    <Footer/>
    </div>
  );
}

export default App;
