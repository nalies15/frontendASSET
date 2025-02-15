import React from 'react'
import logo from '../../assets/images/allValue.png'
import '../../assets/css/global.css'

const Navbar = () => {
  return (
    <nav className='d-flex justify-content-between pt-4 container'>
        {/* logo */}
        <img src={logo} alt="AllDay Logo" />

        {/* time,day,date */}
        <div className='d-flex align-items-center gap-3'>
            <p className='time m-0'>7:12:00 PM</p>
            <p className="m-0">|</p>
            <p className="day m-0">Friday</p>
            <p className="m-0">|</p>
            <p className="date m-0">07/10/2025</p>
        </div>
    </nav>
  )
}

export default Navbar
