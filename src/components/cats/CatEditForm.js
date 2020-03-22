import React, { useState, useEffect } from "react"
import CatManager from "../../modules/CatManager"


const CatEditForm = props => {
  const [cat, setCat] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...cat };
    stateToChange[evt.target.id] = evt.target.value;
    setCat(stateToChange);
  };

  const updateExistingCat = evt => {
    evt.preventDefault()
    setIsLoading(true);

    const editedCat = {
      id: props.match.params.catId,
      name: cat.name,
      breed: cat.breed,
      gender: cat.gender,
      birthdate: cat.birthdate,
      adoptionDate: cat.adoptionDate
    };

    CatManager.update(editedCat)
      .then(() => props.history.push("/cats"))
  }

  useEffect(() => {
    CatManager.get(props.match.params.catId)
      .then(cat => {
        setCat(cat);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={cat.name}
            />
            <label htmlFor="name">Cat name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={cat.breed}
            />
            <label htmlFor="breed">Breed</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingCat}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default CatEditForm;