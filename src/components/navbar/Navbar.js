import React from 'react'

import NavbarOption from './NavbarOption'

const Navbar = () => {
    return (
        <div className='navbar'>
            <i className="nav-icon fs-lg fab fa-twitter"></i>
            <NavbarOption icon={<i class="fas fa-home"></i>} text='Home' />
            <NavbarOption icon={<i class="fas fa-hashtag"></i>} text='Explore' />
            <NavbarOption icon={<i class="far fa-bell"></i>} text='Notifications' />
            <NavbarOption icon={<i class="far fa-envelope"></i>} text='Messages' />
            <NavbarOption icon={<i class="far fa-bookmark"></i>} text='Bookmarks' />
            <NavbarOption icon={<i class="far fa-list-alt"></i>} text='Lists' />
            <NavbarOption icon={<i class="far fa-user"></i>} text='Profile' />
            <NavbarOption icon={<i class="fas fa-ellipsis-h"></i>} text='More' />
            <button className='nav-tweet fs-sm-3 ft-b'>Tweet</button>
        </div>
    )
}

export default Navbar
