import axios from 'axios'

import { useState } from 'react'
import "../assets/styles/sign-in.css";

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
	const [failed, setFailed] = useState("")

	// Au clique sur le btn Sign In
    const handleSignIn = async () => {
		//Lance une requête poste à l'API avec en paramètre * email & passeword *
        axios.post('http://localhost:3001/api/v1/user/login', {email: username, password: password})
            .then(res => {
                console.log("User logged in successfully");
                localStorage.setItem("token", res.data.body.token); // Création du token dans le Lstorage
                window.location.href = "/user";
            })
            .catch(err => {
                console.log("User not logged in", err);
				setFailed("Mot de passe ou Email incorrect")
            })
    }

    return (
        <div className="main">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon" />
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label>Username</label>
                            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="input-wrapper">
                            <label>Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label>Remember me</label>
                        </div>
                        <button className="sign-in-button" type="button" onClick={handleSignIn}>Sign In</button>
						<div className='sign-in-error'>
							<p>{failed}</p>
						</div>
                    </form>
                </section>
        </div>
    );
}

export default SignIn;
