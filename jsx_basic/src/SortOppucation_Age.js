function SortOppucation_Age () {
    const people = [
        {age: 20,name: "Alice", occupation:"Dentist", gender: "female"},
        {age: 30,name: "Bob", occupation:"Doctor",gender: "male"},
        {age: 25,name: "Charlie", occupation:"Lawyer", gender: "male"},
        {age: 15,name: "Anna", occupation:"student", gender: "female"},
    ];

    const sortPeopleByOccupationAndAge = (people) => {
        return people.sort((a, b) => {
          // Sort by occupation alphabetically
          if (a.occupation < b.occupation) return -1;
          if (a.occupation > b.occupation) return 1;
    
          // Sort by age within each occupation group
          if (a.age < b.age) return -1;
          if (a.age > b.age) return 1;
    
          return 0;
        });
      };
      const sortedPeople = sortPeopleByOccupationAndAge(people);
        return (
        <div>
          <h2>Sorted by Occupation and Age</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
              </tr>
            </thead>
            <tbody>
              {sortedPeople.map((person, index) => (
                <tr key={index}>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                  <td>{person.occupation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    export default SortOppucation_Age;