import React from 'react'
import { FaBars } from 'react-icons/fa'

export const Header = ({ showSidebar, setShowSidebar }) => {
    return (
        <header className="header__dashboard">
            <div 
                onClick={ () => setShowSidebar( !showSidebar ) }
                className="left__area"
            >
                <FaBars className="react__icons-headerNav" />
            </div>
            <div className="center__area">
                <h2> DEGS Journal </h2>
            </div>
            <div className="right__area">
                <button 
                    className="btn btn__logout"
                >
                    Log Out
                </button>
            </div>
        </header>
    )
}
