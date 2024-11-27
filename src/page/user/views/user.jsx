import { useState } from "react"
import "../assets/styles/user.css"
import { useDispatch, useSelector } from "react-redux"
import { setName, resetName } from "../../../features/changeName"

function User () {
	
	const [isHidden, setIsHidden] = useState(false)
	const dispatch = useDispatch()
	const name = useSelector(state => state.changeName)
	const firstName = document.querySelector('.edit-firstName')
	const inputeName = document.querySelector('.edit-name')

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

					<h1>Welcome back  {firstName ? firstName.value +" "+ inputeName.value : "" || inputeName ? name.value : ""}</h1>
						<button 
							className={`edit-button ${!isHidden ? '' : "hidden" }`}
							onClick={() => {
								btnHidden() 
								dispatch(setName())
							}}
						>
							Edit Name
						</button>
					<div className={`edit ${isHidden ? 'noHidden' : "hidden" }`}>
						<div className={`edit-nameFirstName`}>
							<input className="edit-firstName" 
								type="text" 
								placeholder="firstName" 
							/>

							<input className="edit-name" 
								type="text"  
								placeholder="Name" 
							/>
						</div>
						<div className={`edit-validation`}>
							<button className="edit-save" 
							type="button"
							onClick={() => {
									if (firstName !== "" ) {
										dispatch(setName(firstName.value + inputeName.value))
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
										resteName()
									}}
							>
								Cancel
							</button>
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
						<button className="transaction-button">View transactions</button>
					</div>
				</section>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Savings (x6712)</h3>
						<p className="account-amount">$10,928.42</p>
						<p className="account-amount-description">Available Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<button className="transaction-button">View transactions</button>
					</div>
				</section>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
						<p className="account-amount">$184.30</p>
						<p className="account-amount-description">Current Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<button className="transaction-button">View transactions</button>
					</div>
				</section>
			</main>
    	</div>
    )
}

export default User
