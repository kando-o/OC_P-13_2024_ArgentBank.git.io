import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import "../assets/header.css"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { onConnect, onSignout } from "../../../features/user"

function Header() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { value, connected, token } =  useSelector((state) => state.user)

	// Reconnection automatique
	useEffect(() => {
		if (connected && token) {
			navigate('/user')
			return
		}
	
		// Si le token existe
		const tokenStr = localStorage.getItem("token") || sessionStorage.getItem("token")
		if (tokenStr) {
			// Fait une requête vers l'API vérifie la validité du token pour autorisé la récupération du profil
			axios.post('http://localhost:3001/api/v1/user/profile', {}, { headers: {"Authorization" : `Bearer ${tokenStr}`}})
				.then(res => {
					dispatch(onConnect({...res.data.body, token: tokenStr}))
				})
				.catch(err => console.log('Une erreur c\'est produit lors de la récupération de l\'user ! Message error :', err ))
		}
	}, [token, connected])

	const signOut = () => {
		dispatch(onSignout())
		navigate("/")
	}

	return (
		<>
			<nav className="nav">
				<Link className="nav-logo" to='/'>
					<img
							className="nav-logo-image"
							src="/public/assets/img/argentBankLogo.png"
							alt="Argent Bank Logo"
					/>
					<h1 className="sr-only">Argent Bank</h1>
				</Link>

				<div className='nav-link'>
					{/* Ne pas oublier les parenthèse pour la priorité des opérateurs */}
					
					{connected ? (<>
						<Link className="nav-user-profile" to='/user'>
							<i className="fa fa-user-circle" /> {value.firstName}
						</Link>
						<div className="nav-user-profile">
							<i className="fa fa-sign-out outColor" />
							<div className="nav-item" onClick={signOut}>Sign Out</div>
						</div>
					</>) : (<>
							<i className="fa fa-user-circle" />
							<Link className="nav-item" to="/sign-in">
									Sign in
							</Link>
						</>
					)}
				</div>
			</nav>
		</>
	)
}

export default Header