import React, { useState, useEffect } from "react";
import VetCard from "./VetCard";
import VetManager from "../../modules/VetManager";

const VetList = props => {

  const [vets, setVets] = useState([]);

  const getVets = () => {
    return VetManager.getAll().then(vetsFromAPI => {
      setVets(vetsFromAPI);
    });
  };

  useEffect(() => {
    getVets();
  }, []);

  const deleteVet = id => {
   VetManager.delete(id).then(() =>
      VetManager.getAll().then(setVets)
    );
  };

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => props.history.push("/vets/new")}
        >
          Add Vet
        </button>
      </section>
      <div className="container-cards">
        {vets.map(vet => (
          <VetCard
          key={vet.id}
          vet={vet}
          deleteVet={deleteVet}
          {...props}
          />
  
        ))}
    
      </div>
      
    </>
  );
};

export default VetList;