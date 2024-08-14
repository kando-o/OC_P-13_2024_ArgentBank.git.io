import "../assets/styles/sign-in.css"
import { NavLink } from "react-router-dom"


function SignIn () {
    return<div className="main">
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to='/'>
                <img
                    className="main-nav-logo-image"
                    src="./public/assets/img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <a className="main-nav-item" href="/sign-in">
                <i className="fa fa-user-circle"></i>
                    Sign In
                </a>
            </div>
        </nav>
        <main className="main bg-dark">
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
            <div className="input-wrapper">
                <label >Username</label>
                <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
                <label >Password</label>
                <input type="password" id="password" />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label>Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            <a href="./user.html" className="sign-in-button">Sign In</a>
            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            {/* <!-- <button className="sign-in-button">Sign In</button> --> */}
            {/* <!--  --> */}
            </form>
        </section>
        </main>
        <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
        </div>
}

export default SignIn