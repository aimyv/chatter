import React, { useState, useEffect } from 'react'
import { userAuth } from '../utils/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

const LoginPage = () => {
    const { user, handleUserLogin } = userAuth()
    const navigate = useNavigate()

    const [credentials, setCredentials] =  useState({
        email: '',
        password:  ''
    })

    useEffect(() => {
        if (user){
            navigate('/')
        }
    }, [])

    const  handleInputChange = (e)  => {
        let name = e.target.name
        let value =  e.target.value

        setCredentials({...credentials, [name]: value})
    }

    return (
        <div className='auth--container'>
            <div className='border'>
                <h1>Login</h1>
                <br />
                <div className='form-wrapper'>
                    <form onSubmit={(e) =>  {handleUserLogin(e, credentials)}}>
                        <div className='field--wrapper'>
                            <label>Email:</label>
                            <input type='email' 
                            required 
                            name='email' 
                            placeholder='Enter your email'
                            value={credentials.email}
                            onChange={handleInputChange} />
                        </div>

                        <div className='field--wrapper'>
                            <label>Password:</label>
                            <input type='password' 
                            required 
                            name='password' 
                            placeholder='Enter your password'
                            value={credentials.password}
                            onChange={handleInputChange} />
                        </div>

                        <div  className='field--wrapper'>
                            <input className='btn btn--lg btn--main' 
                            type='submit'
                            value='Login'  />
                        </div>
                    </form>

                    <br />
                    <p>Don't have an account yet? Register <Link to='/register'>here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
