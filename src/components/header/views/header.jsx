import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from "react-router-dom"
import "../assets/header.css"
import axios from "axios"

export default function Header() {
	const location = useLocation()	
	
	const [nameProfil, setNameProfil] = useState("")
	
	// Récuperer les users avec le bon profil
	useEffect(() => {
		// Si le token existe 
		if (localStorage.getItem("token")) {
			const tokenStr = localStorage.getItem("token")
			axios.post('http://localhost:3001/api/v1/user/profile', {}, { headers: {"Authorization" : `Bearer ${tokenStr}`}}) // Fait une requête vers l'API vérifie la validité du token pour autorisé la récupération du profil
				.then(res => {
					setNameProfil(res.data.body.firstName)					
				})
				.catch(err => console.log('Une erreur c\'est produit lors de la récupération de l\'user ! Message error :', err ))
		}
	}, [])		

	return (
		<>
			<nav className="nav">
                <NavLink className="nav-logo" to='/'>
                    <img
                        className="nav-logo-image"
                        src="/public/assets/img/argentBankLogo.png"
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>

                <div className='nav-link'>
					{/* Ne pas oublier les parenthèse pour la priorité des opérateurs */}
					{
						<i className="fa fa-user-circle"></i> // Logo profil
					} 
					{
						nameProfil &&
						(
							location.pathname === "/user" || 
							location.pathname === "/user/transaction"
						) 
						&& 
						<p>
							{nameProfil}
						</p>
					}
					{
						(
							location.pathname === "/user" || 
							location.pathname === "/user/transaction"
						)
						&& 
						<i className="fa fa-sign-out outColor"></i>
					}

                    <a className="nav-item" href="/sign-in">
					{
						location.pathname === "/user" || 
						location.pathname === "/user/transaction" ?
						"Sign Out" : "Sign in"
					}
                    </a>
                </div>
            </nav>
		</>
	)
}
