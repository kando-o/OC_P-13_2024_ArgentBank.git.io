import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Api() {
	const [users, setUsers] = useState([])

	// Récuperer les users
	useEffect(() => {
		axios.get('http://localhost:3001/api/v1/user')
		.then(res => setUsers(res.data))
		.catch(err => console.log('Error lors de la recupération des users! Message error:', err))
	},[] )

	// Ajouter un user
	const addUSer = () => {
		axios.post('http://localhost:3001/api/v1/user', {email: 'luv.k@live.fr', firstName : 'kyssii', lastName : "luv " })
		.then(res => setUsers([...users, res.data]))
		.catch(err => console.log('Une erreur c\'est produit lors de l\'ajout de l\'user ! Message error :', err ))
	}

  return (
	<div>
		<h1>Liste des Utilisateurs</h1>
		<ul>
			{users.map((user, index) => (
				<li key={index}> {user.firstName} - {user.lastName} - {user.email}</li>
			))}
		</ul>
		
		<button 
		 type="button"
		 onClick={addUSer}
		> 
			Ajouter Luv
		</button>
	</div>
  )
}
