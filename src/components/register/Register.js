import React, { useState } from "react"
import OwnerManager from "../../modules/OwnerManager"
import { Form, Button} from "react-bootstrap"



const Register = props => {
  const [owner, setOwner] = useState({ email: "", username: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...owner};
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  const constructNewOwner = evt => {
    evt.preventDefault();
        setIsLoading(true);
        const newOwner = {
            ...owner, 
        }
        OwnerManager.postOwner(newOwner)
            .then(() => props.history.push("/login"));
    
};


  return (
    <Form onSubmit={constructNewOwner} className="register_form">
        <Form.Label>Register an Account</Form.Label>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="email"
            id="email"
            placeholder="Email address"
            required="" autoFocus="" />
        </div>
        <div>
        <input onChange={handleFieldChange} type="username"
            id="username"
            placeholder="Username"
            required="" autoFocus="" />
        </div>
        <Button type="submit" bg="dark" variant="dark" disabled={isLoading} >Submit</Button>
    </Form>
  );
};


export default Register;