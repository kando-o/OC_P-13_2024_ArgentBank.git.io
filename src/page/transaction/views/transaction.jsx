import React, { useState } from 'react'
import "../assets/transaction.css"
import { useDispatch, useSelector } from 'react-redux'
import { setTransaction } from '../../../features/transaction'

export default function Transaction() {
	const data = useSelector(state => state.transaction || []) // Si state.transaction alors tableau vide
	const [isOpen, setIsOpen] = useState(false)
	const [isBorder, setIsBorder] = useState(false)
	
	const [categories, setCategories] = useState(data?.value?.map(item => item.category) || []) // Vérifie si data?.value existe avant d'y accéder
	const [isCategoryEditable, setIsCategoryEditable] = useState(false)
	
	const [notes, setNotes] = useState(data?.value?.map(item => item.note) || [])
	const [isNotesEditable, setIsNotesEditable] = useState(false)
	
	const dispatch = useDispatch()	
	
	const handlCategoryChange = (index, value) => {
		const newCategories = [...categories] // Spread opérateur pour ne pas directement modifier l'état state original créé un nouvelle objet *newCategories* à partir de *catégories*
		newCategories[index] = value // Value == newCategories uniquement de l'élément en cours
		setCategories(newCategories) // setCategories donc set *categories* avec newCategories
	}	
	
	const handleChangeNote = (index, value) => {
		const newType = [...notes]
		newType[index] = value
		setNotes(newType)
	}

	if (!data || !data.value) {
		return <div className="loading">Loading...</div>
	}

	return (
		<>
			<div className='transaction'>
				<div className='transaction-top'>

					<p>Argent Bank Cheking (x8349)</p>
					<p>$2,082.79</p>
					<p>Avaible Balance</p>
				</div>
				<div className="transaction-table">
					<div className='transaction-categories'>
						<p>Date</p>
						<p>Description</p>
						<p>Amount</p>
						<p>Balance</p>
					</div>
					<div className="transaction-dropdown">
						{ data && data.value &&
							data.value.map((item, index) => (
							<div className='transaction-containerDropdown' key={index}>
								
								<button className='transaction-btncontainerDropdown' 
									type="button" 
									onClick={() => {
										setIsOpen(isOpen === index ? null : index)
										dispatch(setTransaction())
										setIsBorder(true)
										console.log(isBorder);
										
									}}
								>
									<div className='transaction-dropdownContent relative'>
										<span className="absolute"> 
											<svg aria-hidden="true" 
												focusable="false" 
												data-prefix="fas" 
												data-icon="chevron-up" 
												className={"chevron svg-inline--fa fa-chevron-up"+ (isOpen === index ? "" : " open")}
												role="img" xmlns="http://www.w3.org/2000/svg" 
												viewBox="0 0 24 24"
											>
												<path fill="currentColor" 
												d="M19.71 15.29a1 1 0 0 1-1.42 0L12 8.83l-6.29 6.46a1 1 0 0 1-1.42-1.42l7-7a1 1 0 0 1 1.42 0l7 7a1 1 0 0 1 0 1.42z"
												></path>
											</svg>
										</span>

										<div className='transaction-text'>
											<p>
												{item.date}
											</p>
											<p>
												{item.description}
											</p>
											<p>
												{item.amount}
											</p>
											<p>
												{item.balance}
											</p>
										</div>
									</div>
								</button>

								<div className={`dropdown ${isOpen === index ? 'dropdownOpen' : ""}` }>
										<div className="dropdown-info">
											<p className="dropdown-typeTransaction">
												Transaction Type: {item.transaction}
											</p>
											{ isCategoryEditable ? (
													<div className='dropdown-category'>
														Category: <select 
															value={categories[index]}
															onChange={(e) => handlCategoryChange(index, e.target.value)} // set la valeur de category à chaque séléction d'option de l'user
															onBlur={() => setIsCategoryEditable(false)} // A la sortie du champ select, le select se ferme
														>
															<option value="Food">Food</option>
															<option value="Entertainement">Entertainement</option>
															<option value="Transporation">Transporation</option>
														</select>
													</div>
												
												) 
												: 
												(
													<div className='dropdown-category'>
														<p className="dropdown-typeContent">
															<span>Category: {categories[index]} </span>
															
															<button className='dropdown-btnsetIsCategoryEditable' type="button" 
																onClick={() => setIsCategoryEditable(true)}
															>
																🖍
															</button>
														</p>
													</div>
												)
											}

											{ isNotesEditable && isOpen === index ? ( 
												<div className={`btncontainerDropdown ${isBorder? "isBorder" : "1"}`}>
													<p>Notes:</p>
													<input type="text"
														value={notes[index]}
														className='dropdown-noteInput'
														onChange={(e) => handleChangeNote(index, e.target.value)}  // set la valeur de notes à chaque changement de l'user
														onBlur={() => setIsNotesEditable(false)}
													/> 
												</div>
													
												) 
												: 
												(

													<div className='dropdown-note'>
														<span>Notes: {notes[index]}</span>
														<button className="dropdown-noteContent" type="button" 
															onClick={() => setIsNotesEditable(true)}
														>
															<span>📝</span>
														</button>
													</div>

												)
											}
										</div>
								</div>
							</div>
						))}
						
					</div>
				</div>
			</div>
		</>
	)
}
