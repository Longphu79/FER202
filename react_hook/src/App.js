import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import ProductList from './components/ProductList';
function App() {
  const [name, setName] = useState('Adam');
  const [age, setAge] = useState(35);

  return (
    <div className="App">
      <Counter/>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => {setName(e.target.value);
          console.log(e.target.value)
        }} 
      />
      <p>My name is {name}</p>

      <input 
        type="number" 
        value={age}   
        onChange={(e) => setAge(parseInt(e.target.value, 10))} 
      />
      <p>My age is {age}</p>
      <ProductList/>
    </div>
  );
}

export default App;
