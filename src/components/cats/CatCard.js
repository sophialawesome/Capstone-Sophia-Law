import { Link } from "react-router-dom";
import React from "react";

const CatCard = props => {
    return (
        <div className="card-content">
            <h3>
                Name: <span className="card-catname">{props.cat.name}</span>
            </h3>
            <p>Breed: {props.cat.breed}</p>
        </div>
    )
    
}
