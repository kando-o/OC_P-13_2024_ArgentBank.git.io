import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Api() {
	const [users, setUsers] = useState([])

	// Récuperer les users
	useEffect(() => {
		// Au chargement récupé les utilisateurs depuis le Back
		axios.get('http://localhost:3001/api/v1/user')
			.then(res => setUsers(res.data))
			.catch(err => console.log('Une erreur c\'est produit lors de la récupération des users ! Message error :', err ))
	},[])

	// Ajouter un user
	const addUser = async () => {
		// Ajout des user dans Le Back
		axios.post('http://localhost:3001/api/v1/user/signup', {email: 'Kyssii.luvk@live.fr', firstName : 'kyssii', lastName : "luv", password: '890lovecharger' })
			.then(res => setUsers([...users, res.data]))
			.catch(err => console.log('Une erreur c\'est produit lors de l\'ajout de l\'user ! Message error :', err ))
	}
}
