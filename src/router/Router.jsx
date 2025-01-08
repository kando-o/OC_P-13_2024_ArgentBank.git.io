import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../page/home/views/home"
import SignIn from "../page/sign-in/view/singIn"
import User from "../page/user/views/user"
import Layout from "../page/layout/layout"
import Transaction from "../page/transaction/views/transaction"

const Router = () => {
    return (

        <BrowserRouter>
            <Routes>
				<Route path="/" element={<Layout />}>
                	<Route index element={<Home/>} /> //route par defaut de layout
                    <Route path="/sign-in" element={<SignIn/>} />
                    <Route path="/user" element={<User/>} />
                    <Route path="/user/transaction" element={<Transaction/>} />
				</Route >
            </Routes>
        </BrowserRouter>
    )
}

export default Router
