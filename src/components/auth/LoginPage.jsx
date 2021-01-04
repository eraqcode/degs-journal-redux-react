import React from 'react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
    return (
        <div className="login__page">
            <form className="login__form">
                <header className="login__header">
                    <h3> Login </h3>
                </header>
                <input 
                    className="login__input"
                    type="email"
                    name="email"
                    placeholder="Enter an email"
                    
                />
                <input 
                    className="login__input"
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    
                />

                <button 
                    type="submit"
                    className="btn btn__login"
                >
                    Log In
                </button>
                
                <div className="or">
                    <span></span>
                    <h4> Or </h4>
                    <span></span>
                </div>
                

                <div 
                   
                    className="google__btn"
                >
                    <div className="google__btn-img">
                        <img 
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7ZvVP00p4WDHmErvpPw88gHaHa%26pid%3DApi&f=1" 
                            alt="Google logo" 
                            className="google__img"
                        />
                    </div>
                    <div className="google__btn-text">
                        <span className="google__text">
                            Sign In With Google
                        </span>
                    </div>
                </div>

                <Link
                    to="/auth/register"
                    className="link"
                >
                    Create An Account
                </Link>
            </form>
        </div>
    )
}
