import React, { useState } from 'react';
import CatManager from '../../modules/CatManager';


const CatForm = props => {
  const [cat, setCat] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...cat};
    stateToChange[evt.target.id] = evt.target.value;
    setCat(stateToChange);
  };

  const constructNewCat = evt => {
    evt.preventDefault();
    if (cat.name === "" || cat.breed === "") {
      window.alert("Please input a cat's name and breed");
    } else {
      setIsLoading(true);
     CatManager.post(cat)
        .then(() => props.history.push("/cats"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Cat name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="birthdate" 
              placeholder="Date of Birth"
            />
            <label htmlFor="birthdate">Date of Birth</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="gender"
              placeholder="Gender"
            />
            <label htmlFor="gender"> Gender </label>
            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="adoptionDate"
              placeholder="Adoption Date"
            />
         <label htmlFor="adoptionDate"> Adoption Date </label>
         <input
              type="text"
              required
              onChange={handleFieldChange}
              id="owner"
              placeholder="Owner"
            />
         <label htmlFor="Owner"> Owner </label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewCat}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default CatForm;