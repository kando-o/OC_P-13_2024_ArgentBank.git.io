import { BrowserRouter, Route, Routes } from "react-router-dom"
import  "./assets/styles/router.css"
import Home from "../page/home/views/home"
import SignIn from "../page/sign-in/view/singIn"
import User from "../page/user/views/user"

const Router = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}  />
                    <Route path="/sign-in" element={<SignIn/>} />
                    <Route path="/user" element={<User/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router