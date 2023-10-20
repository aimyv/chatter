import React from 'react'
import { LogOut } from 'react-feather'
import { userAuth } from '../utils/AuthContext'

const Header = () => {
    const {user, handleUserLogout} = userAuth()
    return (
        <div id='header--wrapper'>
            {user ? (
                <>
                    <h2>{user.name}</h2>
                    <LogOut className='header--link' onClick={handleUserLogout} />
                </>
            ) : (
                <button>Login</button>
            )}
        </div>
    )
}

export default Header
