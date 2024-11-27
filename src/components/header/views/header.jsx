import React, { useState } from 'react'
import { NavLink, useLocation } from "react-router-dom"
import "../assets/header.css"
import { useDispatch } from 'react-redux'

export default function header() {
	const location = useLocation()	

	return (
		<>
			<nav className="nav">
                <NavLink className="nav-logo" to='/'>
                    <img
                        className="nav-logo-image"
                        src="./public/assets/img/argentBankLogo.png"
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <a className="nav-item" href="/sign-in">
                    <i className="fa fa-user-circle"></i>
                    {location.pathname === "/user" ? "Sign Out" : "Sign in"}
                    </a>
                </div>
            </nav>
		</>
	)
}
