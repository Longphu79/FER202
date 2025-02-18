import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcom';
import UserProfile from './components/UserProfile';
import NameList from './components/NameList';
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StudentCard from './components/StudentCard';

const userData = {name:"phu", age:20};
const namesList = ["phu@fe.edu.vn", "test@fe.edu.vn"];
const students = [
      { name: "traltb1@fe.edu.vn", age: 39, avatar: "/images/student1.jpg" },
      { name: "traltb2@fe.edu.vn", age: 40, avatar: "/images/student2.jpg" },
      { name: "traltb3@fe.edu.vn", age: 41, avatar: "/images/student3.jpg" },
    ];

function App() {
  return (
    <div className="App">
      <Welcome name="Phu"/>
      <UserProfile user={userData}/>
      <NameList names={namesList}/>
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {/*Duyệt qua mảng students và truyền từng đối tượng student vào Student Card*/}
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={students} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
