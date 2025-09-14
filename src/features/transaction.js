import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value :[{
			transaction: "Electronic",
			category: "Food",
			date: "June 20th, 2020",
			description: "Golden Sun Bakery",
			amount: "$5.00",
			balance: "$2082.79",
			note: [],
		},
		{
			transaction: "Electronic",
			category: "Food",
			date: "June 20th, 2020",
			description: "Golden Sun Bakery",
			amount: "$10.00",
			balance: "$2097.79",
			note: [],
		},
		{
			transaction: "Electronic",
			category: "Food",
			date: "June 20th, 2020",
			description: "Golden Sun Bakery",
			amount: "$20.00",
			balance: "$2117.79",
			note: [],
		},
		{
			transaction: "Electronic",
			category: "Food",
			date: "June 20th, 2020",
			description: "Golden Sun Bakery",
			amount: "$40.00",
			balance: "$2147.79",
			note: [],
		},
		{
			transaction: "Electronic",
			category: "Food",
			date: "June 20th, 2020",
			description: "Golden Sun Bakery",
			amount: "$50.00",
			balance: "$2187.79",
			note: [],
		},
	]
}

export const transaction = createSlice({
	name : "transaction",
	initialState,
	reducers : {
		setTransaction : (state, action) => {
			state = state.value
		}
	} 
})

export const {setTransaction} = transaction.actions
export default transaction.reducer
