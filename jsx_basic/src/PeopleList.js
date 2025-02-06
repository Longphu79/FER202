function PeopleList () {
    const people = [
        {age: 20,name: "Alice", occupation:"Dentist", gender: "female"},
        {age: 30,name: "Bob", occupation:"Doctor",gender: "male"},
        {age: 25,name: "Charlie", occupation:"Lawyer", gender: "male"}
    ];
      return (
        <div>
        <h2>PeopleList</h2>
          <ul>
        {people.map((person, index) => (
          <li key={index}>
            <h3>{person.name}</h3>
            <p>Age: {person.age}</p>
            <p>Occupation: {person.occupation}</p>
            <p>gender: {person.gender}</p>
          </li>
        ))}
      </ul>
        </div>
      );
    }
    export default PeopleList;