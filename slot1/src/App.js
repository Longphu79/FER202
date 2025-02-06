
import './App.css';
function App() {
  const person ={
    name:"LongPhu",
    age: 20
  };
  const people = [
    { age: 26,name: "LongPhu"},
    { age: 27,name: "LongPhu"},
    { age: 28,name: "LongPhu"},
    { age: 29,name: "LongPhu"},
    { age: 30,name: "LongPhu"}
];
    
  return (
    <div className="App">
      <ul>
        {people.map((p,index) => (
          <li key ={index}>
            {p.name},{p.age}
          </li>
        ))}
      </ul>
      <h1>Hello, toi la {person.name},{person.age} </h1>
      
    </div>
  );
}

export default App;
