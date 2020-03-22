import { Link } from "react-router-dom";
import React from "react";

const CatCard = props => {
    return (
        <div className="card-content">
            <h3>
                Name: <span className="card-catname">{props.cat.name}</span>
            </h3>
            <p>Breed: {props.cat.breed}</p>
            <p>Date of Birth: {props.cat.birthdate}</p>
            <p>Gender: {props.cat.gender}</p>
            <p>Adoption Date: {props.cat.adoptionDate}</p>
            
          
          <button
          type="button"
          onClick={() => props.deleteCat(props.cat.id)}
        >
          Delete
        </button>
        <Link to={`/cats/${props.cat.id}`}>
          <button>Details</button>
        </Link>
      <button
        type="button"
        onClick={() => props.history.push(`/cats/${props.cat.id}/edit`)}
      >
        Edit
      </button>
    </div>
  );
};

export default CatCard;
     
        

