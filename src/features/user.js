import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value : {
		firstName : "",
		lastName : "",
	},
	rememberme: false,
	token: "",
	connected: false,
}

export const user = createSlice({
	name : "user",
	initialState,
	reducers : {
		setName : (state, action) => {
			state.value.firstName = action.payload.firstName
			state.value.lastName = action.payload.lastName
		},
		login: (state, action) => {
			state.token = action.payload.token;
			state.rememberme = action.payload.rememberme;
			const storage = state.rememberme ? localStorage : sessionStorage; // Si le rememberme est true, on utilise localStorage *(les infos restent même si tu fermes le navigateur* , sinon on utilise sessionStorage *les infos disparaissent quand tu fermes le navigateur*
			storage.setItem("token", state.token);
		},
		onConnect: (state, action) => {
			state.value.firstName = action.payload.firstName
			state.value.lastName = action.payload.lastName
			state.connected = true
			state.token = action.payload.token
		},
		onSignout: (state) => {
			state.value = initialState.value
			state.token = ""
			state.connected = false
			localStorage.removeItem("token")
			sessionStorage.removeItem("token")
		}
	}
})

export const {setName, login, onConnect, onSignout} = user.actions
export default user.reducer
