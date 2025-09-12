import { BrowserRouter, Outlet, Route, Routes, useNavigate } from "react-router-dom"
import Home from "../page/home/views/home"
import SignIn from "../page/sign-in/view/singIn"
import User from "../page/user/views/user"
import Layout from "../page/layout/view/layout"
import Transaction from "../page/transaction/views/transaction"
import { useSelector } from "react-redux"
import { useEffect } from "react"

const ProtectedRoute = () => {
	const { connected } = useSelector((state) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (!connected) {
			navigate("/sign-in");
			return ;
		}
	}, [connected, navigate]);
	
	if (!connected) {
		return null;
	}

	return <Outlet />;
};

const Router = () => {
    return (

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						{/* route par défaut de layout */}
						<Route index element={<Home/>} />
						<Route path="/sign-in" element={<SignIn/>} />
						<Route path="/user" element={<ProtectedRoute/>}>
							<Route index element={<User/>} />
							<Route path="transaction" element={<Transaction/>} />
						</Route>
					</Route >
				</Routes>
			</BrowserRouter>
    )
}

export default Router
