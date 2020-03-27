import { Link } from "react-router-dom";
import React from "react";

const OwnerCard = props => {
    return (
        <div className="card-content">
            <h3>
                Name: <span className="card-ownername">{props.owner.name}</span>
            </h3>
            <p>Phone Number: {props.owner.phoneNumber}</p>
            <p>Email: {props.owner.email}</p>
           
          
          <button
          type="button"
          onClick={() => props.deleteOwner(props.owner.id)}
        >
          Delete Owner
        </button>
        <Link to={`/cats/${props.owner.id}`}>
          <button>Details</button>
        </Link>
      <button
        type="button"
        onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}
      >
        Edit
      </button>
    </div>
  );
};

export default OwnerCard;
     
        

