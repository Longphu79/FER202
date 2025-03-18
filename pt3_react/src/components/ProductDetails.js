import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button } from "react-bootstrap";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/Products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p className="text-center mt-5">Loading product details...</p>;

  return (
    <Container className="min-vh-100 py-4 d-flex justify-content-center">
      <Card className="shadow-lg" style={{ width: "30rem" }}>
        <Card.Img 
          variant="top" 
          src={product.image} 
          alt={product.name} 
          style={{ height: "300px", objectFit: "cover" }}
          onError={(e) => e.target.src = "/images/default.png"}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text className="text-primary fw-bold">{product.price}</Card.Text>
          <Link to="/">
            <Button variant="secondary" className="w-100">Back to Products</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetails;