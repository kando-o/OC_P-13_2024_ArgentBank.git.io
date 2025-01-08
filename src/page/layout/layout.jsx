import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/views/header'
import Footer from '../../components/footer/views/footer'
import "../layout/assets/layout.css"

export default function layout() {
	
	return (
		<>
			<Header />

				<div className='layoutContainer'>
					<div className="layoutContainer-content">
						<Outlet />
					</div>
				</div>
			<Footer />

		</>
	)
}
