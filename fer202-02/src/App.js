import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import CarList from "./components/CarList";
import CarDetails from "./components/CarDetails";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/cars/:id" element={<CarDetails />} />
      </Routes>
    </Router>
  );
}

export default App;