import axios from 'axios'
import { NavLink } from "react-router-dom"

import { useState, useEffect } from "react"
import "../assets/styles/user.css"
import { useDispatch, useSelector } from "react-redux"
import { setName, resetName } from "../../../features/changeName"

function User () {
	const [isHidden, setIsHidden] = useState(false)
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')

	const dispatch = useDispatch()
	const userInfo = useSelector(state => state.changeName)

	useEffect(() => {
		// Si le token existe 
		if (localStorage.getItem("token")) {
			const tokenStr = localStorage.getItem("token")
			axios.post('http://localhost:3001/api/v1/user/profile', {}, { headers: {"Authorization" : `Bearer ${tokenStr}`}}) // Fait une requête vers l'API et valide le bon token pour la validation et la connexion
				.then(res => {
					dispatch(setName({
						firstName: res.data.body.firstName,
						lastName: res.data.body.lastName,
					}))
					
				})
				.catch(err => console.log('Une erreur c\'est produit lors de la récupération de l\'user ! Message error :', err ))
		} else {
			window.location.href = "/"
		}
	}, [])

	const btnHidden =  () => {
		setIsHidden(true)
		if (isHidden) {
			setIsHidden(false)
		}
	}	

    return (
        <div className="main" style={{ fontFamily: 'Nunito, sans-serif' }}>
			<main className="main bg-dark">
				<div className="header">

					<h1 className='header-fNameLName'>Welcome back {userInfo && userInfo.value.firstName} {userInfo && userInfo.value.lastName}</h1>
					<button 
						className={`edit-button ${!isHidden ? '' : "hidden" }`}
						onClick={() => {
							btnHidden()
						}}
					>
						Edit Name
					</button>
					<div className="testHidden">

					<div className={`edit ${isHidden ? 'noHidden' : "hidden" }`}>
						<div className={`edit-nameFirstName`}>
							<input className="edit-firstName" 
								type="text" 
								placeholder="firstName"
								value={firstName}
								onChange={(e) => { setFirstName(e.target.value) } }
							/>

							<input className="edit-name" 
								type="text"  
								placeholder="Name"
								value={lastName}
								onChange={(e) => { setLastName(e.target.value) }}
							/>
						</div>
						<div className={`edit-validation`}>
							<button className="edit-save" 
							type="button"
							//A chaque click prend la valeur de fName & lName la change dans l'API et met à jour le dom avec les nouvelles valeurs de Fname & lName
							onClick={() => {
									if (firstName && lastName) {
										dispatch(setName({
											firstName: firstName,
											lastName: lastName
										}))

										// call API
										const tokenStr = localStorage.getItem("token")
										axios.put('http://localhost:3001/api/v1/user/profile', {
											firstName: firstName,
											lastName: lastName
										}, 
										{ headers: {"Authorization" : `Bearer ${tokenStr}`}})
											.then(res => console.log('res', res))
										btnHidden()
									}
								}
							} 
							>
								Save
							</button>

							<button className={`edit-cancel`} 
								type="button"
								onClick={() => {
										btnHidden()
										resetName()
									}}
							>
								Cancel
							</button>
						</div>
					</div>
					</div>
				</div>
				<h2 className="sr-only">Accounts</h2>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Checking (x8349)</h3>
						<p className="account-amount">$2,082.79</p>
						<p className="account-amount-description">Available Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<NavLink className="nav-logo" to='transaction'>
							<button className="transaction-button">
								View transactions
							</button>
						</NavLink>
					</div>
				</section>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Savings (x6712)</h3>
						<p className="account-amount">$10,928.42</p>
						<p className="account-amount-description">Available Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<NavLink className="nav-logo" to='transaction'>
							<button className="transaction-button">
								View transactions
							</button>
						</NavLink>
					</div>
				</section>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
						<p className="account-amount">$184.30</p>
						<p className="account-amount-description">Current Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<NavLink className="nav-logo" to='transaction'>
							<button className="transaction-button">
								View transactions
							</button>
						</NavLink>
					</div>
				</section>
			</main>
    	</div>
    )
}

export default User
