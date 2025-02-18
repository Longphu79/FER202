import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function StudentCard({student}) {
  return (
    <Container fluid>
        <Card style={{ width: '18rem', margin: 'auto' }}>
      <Card.Img variant="top" src={student.image} alt={student.name} style={{ height: "250px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{student.id}</Card.Title>
        <Card.Text>{student.name} - {student.location}</Card.Text>
        <Button variant="primary">Submit</Button>
      </Card.Body>
    </Card>
    </Container>
    
  );
}

export default StudentCard;