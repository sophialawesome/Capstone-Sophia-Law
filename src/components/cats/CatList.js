import React, { useState, useEffect } from "react";
import CatCard from "./CatCard";
import CatManager from "../../modules/CatManager";

const CatList = props => {

  const [cats, setCats] = useState([]);

  const getCats = () => {

    return CatManager.getAll().then(catsFromAPI => {
      setCats(catsFromAPI);
    });
  };



  const deleteCat = id => {
   CatManager.delete(id).then(() =>
      CatManager.getAll().then(setCats)
    );
  };

  useEffect(() => {
    getCats();
  }, []);

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => props.history.push("/cats/new")}
        >
          Add Cat
        </button>
      </section>
      <div className="container-cards">
        {cats.map(cat => (
          <CatCard
          key={cat.id}
          cat={cat}
          deleteCat={deleteCat}
          {...props}
          />
  
        ))}
    
      </div>
      
    </>
  );
};

export default CatList;