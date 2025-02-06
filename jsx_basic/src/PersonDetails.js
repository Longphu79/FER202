function PersonDetails () {
    const details = [
        {age: 20,name: "Alice", occupation:"Dentist"},
        {age: 30,name: "Bob", occupation:"Doctor"},
        {age: 25,name: "Charlie", occupation:"Lawyer"}
    ];
      return (
        <div>
        <h2>details</h2>
          <ul>
            {details.map((p, index) => (
              <li key={index}> {p.name}, {p.age}, {p.occupation}</li>
            ))}
          </ul>
        </div>
      );
    }
    export default PersonDetails;