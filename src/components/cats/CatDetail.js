import React, { useState, useEffect } from "react";
import CatManager from "../../modules/CatManager";
//import {firstLetterCase} from '../../modules/helpers'

const CatDetail = props => {
  const [cat, setCat] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    CatManager.get(props.catId).then(cat => {
      setCat({
        name: cat.name,
        breed: cat.breed
      });
      setIsLoading(false);
    });
  }, [props.catId]);

  const handleDelete = () => {
    setIsLoading(true);
    CatManager.delete(props.catId).then(() =>
      props.history.push("/cats")
    );
  };
  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require("./mona1-cropped.jpg")} alt="My Cat" />
        </picture> */}
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{cat.name}</span>
        </h3>
        <p>Breed: {cat.breed}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete Cat
        </button>
      </div>
    </div>
  );

};

export default CatDetail;