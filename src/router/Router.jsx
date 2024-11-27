import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../page/home/views/home"
import SignIn from "../page/sign-in/view/singIn"
import User from "../page/user/views/user"
import Layout from "../page/layout/layout"

const Router = () => {
    return (

        <BrowserRouter>
            <Routes>
				<Route path="/" element={<Layout />}>
                	<Route index element={<Home/>} /> //rout par defaut de layout
                    <Route path="/sign-in" element={<SignIn/>} />
                    <Route path="/user" element={<User/>} />
				</Route >
            </Routes>
        </BrowserRouter>
    )
}

export default Router