import axios from 'axios'

import { useState } from 'react'
import "../assets/styles/sign-in.css";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../../features/user"

function SignIn() {
	const dispatch = useDispatch()
	const {token} = useSelector((state) => state.user)
	const [form, setForm] = useState({
		username: "",
		password: "",
		rememberme: false,
	})
	const [failed, setFailed] = useState("")

	// Au clique sur le btn Sign In
	const handleSignIn = async (ev) => {
		ev.stopPropagation()
		ev.preventDefault()
		//Lance une requête post à l'API avec en paramètre * email & passeword *
			axios.post('http://localhost:3001/api/v1/user/login', {email: form.username, password: form.password})
					.then(res => {
							console.log("User logged in successfully");
							dispatch(login({
								token: res.data.body.token,
								rememberme: form.rememberme,
							}))
					})
					.catch(err => {
						console.log("User not logged in", err);
						setFailed("Mot de passe ou Email incorrect")
					})
	}

	const handleChange = (e) => {
		if(form[e.target.name] !== e.target.value) {
			setForm(c => ({
				...c,
				[e.target.name]: e.target.value
			}))
		}
		// à chaque changement copie le contenue de l'ancien form remplace la valeur du champ name par la modification de l'user
	}

	if (token !=="") {
		return null;
	}

	return (
		<div className="main">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon" />
				<h1>Sign In</h1>
				<form onSubmit={handleSignIn}>
					<div className="input-wrapper">
							<label>Username</label>
							<input name="username" type="text" id="username" value={form.username} onChange={handleChange} />
					</div>
					<div className="input-wrapper">
							<label>Password</label>
							<input name="password" type="password" id="password" value={form.password} onChange={handleChange} />
					</div>
					<div className="input-remember">
							<input name="rememberme" type="checkbox" id="remember-me" value={form.rememberme} onChange={handleChange} />
							<label>Remember me</label>
					</div>
					<button className="sign-in-button" type="submit">
						Sign In
					</button>
					<div className='sign-in-error'>
						<p>{failed}</p>
					</div>
				</form>
			</section>
		</div>
	);
}

export default SignIn;
