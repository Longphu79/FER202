function FirstTeenager () {
    const people = [
        {age: 20,name: "Alice", occupation:"Dentist", gender: "female"},
        {age: 30,name: "Bob", occupation:"Doctor",gender: "male"},
        {age: 25,name: "Charlie", occupation:"Lawyer", gender: "male"},
        {age: 15,name: "Anna", occupation:"student", gender: "female"},
    ];
    const teenager = people.find(person => person.age >= 13 && person.age < 20);
      return teenager ? (
            <div>
        <h2>First Teenager</h2>
        <p>Name: {teenager.name}</p>
        <p>Age: {teenager.age}</p>
        <p>Occupation: {teenager.occupation}</p>
      </div>
      ) : (
        <p>No teenagers found in the list.</p>
      );
    }
    export default FirstTeenager;