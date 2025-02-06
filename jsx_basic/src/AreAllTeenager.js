function AreAllTeenager () {
    const people = [
        {age: 20,name: "Alice", occupation:"Dentist", gender: "female"},
        {age: 30,name: "Bob", occupation:"Doctor",gender: "male"},
        {age: 25,name: "Charlie", occupation:"Lawyer", gender: "male"},
        {age: 15,name: "Anna", occupation:"student", gender: "female"},
    ];
    const Allteenager = people.every(person => person.age >= 13 && person.age < 20);
      return Allteenager ? (
            <div>
      <h2>Are All Teenagers?</h2>
        <p>Yes, all the people in the list are teenagers.</p>
    </div>
    ) : (
        <p>No, not all the people in the list are teenagers.</p>
      );
    }
    export default AreAllTeenager;