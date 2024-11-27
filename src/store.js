import {configureStore} from "@reduxjs/toolkit"
import  changeName  from "./features/changeName"

export const store = configureStore ({

	reducer : {
		changeName
	}
})