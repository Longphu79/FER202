import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/Cars")
      .then((res) => setCars(res.data))
      .catch((err) => console.error(err));
  }, []);

//   const handleSort = () => {
//     setCars({ type: "SET_SORT", sortBy: cars.sortBy === "asc" ? "desc" : "asc" });
//   };

//   const sortedCars = [...cars.Cars].sort((a, b) => {
//     return cars.sortBy === "asc" ? a.price.localeCompare(b.price) : b.price.localeCompare(a.price);
//   });

  return (
    <Container className="min-vh-100 py-4">
      <h2 className="text-center mb-4">Car List</h2>
      <Row className="g-4">
        {cars.map((car) => (
          <Col key={car.id} xs={12} sm={6} md={4} lg={3}>
            {/* <Button variant="secondary" onClick={handleSort}>
              Sort ({cars.sortBy})
            </Button> */}
            <Card className="shadow-sm">
              <Card.Img 
                variant="top" 
                src={car.image} 
                alt={car.name} 
                style={{ height: "200px", objectFit: "cover" }} 
                onError={(e) => e.target.src = "/images/default.png"} // Ảnh mặc định nếu bị lỗi
              />
              <Card.Body>
                <Card.Title>{car.brand}{car.model}</Card.Title>
                <Card.Text>{car.year}</Card.Text>
                <Card.Text className="text-primary fw-bold">{car.price}</Card.Text>
                <Link to={`/cars/${car.id}`}>
                  <Button variant="primary" className="w-100">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CarList;