import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value : ""
}

export const changeName = createSlice({
	name : "namechange",
	initialState,
	reducers : {
		setName : (state, action) => {
			console.log("changename", state.value);
			state.value = action.payload
			
		},
		resetName : (state, action) => {
			console.log('reset', state.value);
			state.value = ""
		}
	}
})

export const {setName, resetName} = changeName.actions
export default changeName.reducer