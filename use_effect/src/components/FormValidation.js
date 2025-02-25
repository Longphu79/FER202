import React, { useState, useEffect } from "react";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("Da Nang");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = name.length >= 3 ? "" : "Name must be at least 3 characters long.";
    tempErrors.gender = gender ? "" : "Please select your gender.";
    tempErrors.agree = agree ? "" : "You must agree to the terms and conditions.";
    setErrors(tempErrors);
    
    return Object.values(tempErrors).every((x) => x === "");
  };

  useEffect(() => {
    setIsValid(validate()); 
  }, [name, gender, agree]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div style={{ color: "red" }}>{errors.name}</div>
      </div>

      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> Male
        <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> Female
        <input type="radio" name="gender" value="Other" onChange={(e) => setGender(e.target.value)} /> Other
        <div style={{ color: "red" }}>{errors.gender}</div>
      </div>

      <div>
        <label>Country</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="Da Nang">Da Nang</option>
          <option value="Hanoi">Hanoi</option>
          <option value="Ho Chi Minh">Ho Chi Minh</option>
        </select>
      </div>

      <div>
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
        I agree to the terms and conditions
        <div style={{ color: "red" }}>{errors.agree}</div>
      </div>

      <button type="submit" disabled={!isValid}>Submit</button>
    </form>
  );
};

export default FormValidation;
