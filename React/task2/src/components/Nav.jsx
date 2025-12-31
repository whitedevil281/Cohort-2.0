import React from 'react'
import searchIcon from "../assets/search.png"
import notificationIcon from "../assets/notification.png"

const Nav = () => {
    return (

        <nav className='flex justify-between items-center'>
            <div className='flex items-center gap-2  border rounded-xl border-white/15 bg-white/10 backdrop-blur-3xl px-4'>
                <img src={searchIcon} alt="" />
                <input type="text" className='border-none p-2 w-2xs text-white outline-none focus:outline-none focus:ring-0 border-0 focus:border-0' placeholder='Search' />
            </div>
            <div className='flex items-center gap-6'>
                <img className='w-6 h-6' src={notificationIcon} alt="" />
                <div className='w-12 h-12 rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvtiIpmWQg-AbQ4dBOgIz2unuXJrIMGtlUVQ&s" alt="" />
                </div>
                </div>
        </nav>

    )
}

export default Nav
