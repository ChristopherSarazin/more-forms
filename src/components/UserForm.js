import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confPassword };
        console.log("Welcome", newUser);
    };

    return (
        <div class="maindiv">
            <form onSubmit={createUser}>
                <div>
                    <label>First name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />

                    {
                        firstName.length < 3 || firstName.length > 20 ?
                            <p>First Name must be between 3-20 characters</p> :
                            ""
                    }

                </div>
                <div>
                    <label>Last name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                    {
                        lastName.length < 3 || lastName.length > 20 ?
                            <p>Last Name must be between 3-20 characters</p> :
                            ""
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                    {
                        email.length < 3 || email.length > 20 ?
                            <p>email must be between 3-20 characters</p> :
                            ""
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                    {
                        password.length < 3 || password.length > 20 ?
                            <p>Password must be between 8-20 characters</p> :
                            ""
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfPassword(e.target.value)} value={confPassword} />
                    {
                        password != confPassword?
                        <p>Passwords much match</p>:
                        ""
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>

            <h3>First Name: {firstName}</h3>
            <h3>Last Name: {lastName}</h3>
            <h3>Email: {email}</h3>
            <h3>Password: {password}</h3>
            <h3>Confirmed Password: {confPassword}</h3>

        </div>
    );
};

export default UserForm;
