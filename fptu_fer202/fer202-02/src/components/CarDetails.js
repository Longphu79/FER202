import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCars] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/Cars/${id}`)
      .then((res) => setCars(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!car) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <image >{car.image}</image>
        <h2 className="text-2xl font-bold mb-4">{car.name}</h2>
        <p className="text-gray-600"><strong></strong> {car.brand}{car.model}</p>
        <p className="text-gray-600"><strong>Price:</strong> {car.price}</p>
        <p className="text-gray-600"><strong>Year:</strong> {car.year}</p>
    
        <button 
          onClick={() => navigate("/cars")} 
          
        >
          Back to CarList
        </button>
      </div>
    </div>
  );
};

export default CarDetails;