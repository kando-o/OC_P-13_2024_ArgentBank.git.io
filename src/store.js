import {configureStore} from "@reduxjs/toolkit"
import  user  from "./features/user"
import transaction from "./features/transaction"

export const store = configureStore ({

	reducer : {
		user,
		transaction
	}
})