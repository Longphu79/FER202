
import './App.css';
import React from "react";
import { CartProvider } from "./components/CartContext";
import DishesList from "./components/DishesList";
import Cart from "./components/Cart";
import "./style.css";
import FoodFilter from './components/FoodFilter';
import { useState } from "react";
import ThemeToggle from './components/ThemeToggle';
import ThemeContexts, { ThemeProvider } from './components/ThemeContexts';
// Sample dishes array
const dishes = [
  {
    id: 0,
    name: "Uthappizza",
    image: "uthappizza.jpg",
    price: "4.99",
    description: "A unique combination of Indian Uthappam and Italian pizza.",
  },
  {
    id: 1,
    name: "Zucchipakoda",
    image: "Zucchipakoda.jpg",
    price: "1.99",
    description: "Deep fried Zucchini with chickpea batter.",
  },
  {
    id: 2,
    name: "Vadonut",
    image: "Vadonut.jpg",
    price: "1.99",
    description: "A combination of vada and donut.",
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    image: "Elaicheesecake.jpg",
    price: "2.99",
    description: "New York Style Cheesecake with Indian cardamoms.",
  },
];



function App() {
  const [filteredFoods, setFilteredFoods] = useState(dishes);

  const handleFilter = (keyword) => {
    if (keyword.trim() === "") {
      setFilteredFoods(null); // Không hiển thị nếu ô tìm kiếm trống
    } else {
      const result = dishes.filter((dish) =>
        dish.name.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredFoods(result.length > 0 ? result : []); // Hiển thị danh sách hoặc thông báo không tìm thấy
    }
  };

  return (
    <CartProvider>
     <ThemeProvider>
      <div className="App">
        <ThemeContexts/>
        <ThemeToggle/>
        <DishesList dishes={dishes} />
        <Cart />
        <FoodFilter dishes={dishes} onFilter={handleFilter}/>
        {filteredFoods.length > 0 ? (
            <ul>
              {filteredFoods.map((dish) => (
                <li key={dish.id}>{dish.name}</li>
              ))}
            </ul>
          ) : (
            <p>Không tìm thấy món ăn nào</p>
          )}
      </div>
     </ThemeProvider>
    </CartProvider>
  );
}

export default App;