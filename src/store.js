import {configureStore} from "@reduxjs/toolkit"
import  changeName  from "./features/changeName"
import transaction from "./features/transaction"

export const store = configureStore ({

	reducer : {
		changeName,
		transaction
	}
})