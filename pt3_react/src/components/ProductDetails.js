import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/Products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-600"><strong>Category:</strong> {product.category}</p>
        <p className="text-gray-600"><strong>Price:</strong> {product.price}</p>
        <p className="text-gray-600"><strong>Stock:</strong> {product.stock}</p>
        <p className="text-gray-600"><strong>Description:</strong> {product.description}</p>
        <button 
          onClick={() => navigate("/products")} 
          className="mt-4 w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition"
        >
          Back to Products
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;