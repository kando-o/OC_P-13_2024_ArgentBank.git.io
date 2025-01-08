import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value : {
		firstName : "",
		lastName : ""
	}
}

export const changeName = createSlice({
	name : "namechange",
	initialState,
	reducers : {
		setName : (state, action) => {
			state.value = action.payload
		},
		updateName : (state, action) => {
			userJson = JSON.stringify(res.data.body)
			state = action.payload
		},
		resetName : (state, action) => {
			console.log('reset', state.value);
			action.payload = ""
		}
	}
})

export const {setName, resetName, updateName} = changeName.actions
export default changeName.reducer
