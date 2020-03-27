import { Link } from "react-router-dom";
import React from "react";

// const VetCard = props => {
//     return (
//         <div className="card-content">
//             <h3>
//                 Name: <span className="card-vetname">{props.vet.name}</span>
//             </h3>
//             <p>Phone Number: {props.vet.phoneNumber}</p>
//             <p>Email: {props.vet.email}</p>
//             <p>Hospital Address: {props.vet.hospitalAddress}</p>
           
          
//           <button
//           type="button"
//           onClick={() => props.deleteVet(props.vet.id)}
//         >
//           Delete Vet
//         </button>
//         <Link to={`/vets/${props.vet.id}`}>
//           <button>Details</button>
//         </Link>
//       <button
//         type="button"
//         onClick={() => props.history.push(`/vets/${props.vet.id}/edit`)}
//       >
//         Edit
//       </button>
//     </div>
//   );
// };

const VetCard = props => {
  return (
      <div className="eventCard">
          <div className="card-content">
              <h3>Name: <span className="card-vetName">
                  {props.vet.name}
              </span></h3>
              <p>Phone Number: {props.vet.phoneNumber}</p>
              <p>Email: {props.vet.email}</p>             
              <p>Hospital Address: {props.vet.hospitalAddress}</p>
              <button type="button" onClick={() => props.deleteEvent(props.vet.id)}>Delete</button>
              <button type="button" onClick={() => props.history.push(`/vets/${props.vet.id}/edit`)}>Edit</button>
          </div>
      </div>
  )
}

export default VetCard;
     
        

