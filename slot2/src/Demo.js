function findFirstTeenager(people) {
    for (let i = 0; i < people.length; i++) {
      const person = people[i];
      if (person.age >= 10 && person.age <= 20) {
        return person;
      }
    }
    return null; // No teenager found
  };
