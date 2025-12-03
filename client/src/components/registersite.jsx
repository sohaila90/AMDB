import { useState } from "react";

const RegisterSite = () => {
    // eslint-disable-next-line no-unused-vars
    const [register, setRegister] = useState([]);



return(
    <div>
        <input id="name" placeholder="Name" type="text" />
        <br />
        <input id="email" placeholder="Email" type="text" />
        <br />
        <input id="dob" placeholder="Birthday" type="date" />
        <br />
        <input id="password" placeholder="Password" type="text" />
        <br />
        <input id="confirmPassword" placeholder="Confirm Password" type="text" />
        <br />
        <button onClick={regBtn}>Register</button>
    </div>
)


}


export default RegisterSite;