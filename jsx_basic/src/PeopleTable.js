function PeopleTable (){
    const people = [
        {age: 20,name: "Alice", occupation:"Dentist", gender: "female"},
        {age: 30,name: "Bob", occupation:"Doctor",gender: "male"},
        {age: 25,name: "Charlie", occupation:"Lawyer", gender: "male"}
    ];
    return (
        <div>
        <h2>People Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
            <th>gender</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
              <td>{person.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
         </div>
        );
}
export default PeopleTable;