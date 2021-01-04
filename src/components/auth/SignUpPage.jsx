import React from 'react'
import { Link } from 'react-router-dom'

export const SignUpPage = () => {
    return (
        <div className="signUp__page">
            <form  className="signUp__form">
                <header className="signUp__header">
                    <h3> Sign Up </h3>
                </header>
                <input 
                    className="signUp__input"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    
                />
                <input 
                    className="signUp__input"
                    type="text"
                    name="lastname"
                    placeholder="Enter your lastname"
                    
                />
                <input 
                    className="signUp__input"
                    type="email"
                    name="email"
                    placeholder="Enter an email"
                    
                />
                <input 
                    className="signUp__input"
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    
                />
                <input 
                    className="signUp__input"
                    type="password" 
                    name="password2" 
                    placeholder="Confirm your Password"
                    
                />

                <button 
                    type="submit"
                    className="btn btn__signUp"
                >
                    Sign Up
                </button>
                
                <div className="link__container">
                    <span className="link__title">
                        Already have an account?
                    </span>
                   <Link
                        to="/auth/login"
                        className="link"
                    >
                        Log In
                   </Link>
                </div>
                
            </form>
        </div>
    )
}
