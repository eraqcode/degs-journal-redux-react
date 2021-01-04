import React from 'react'
import { Footer } from './Footer'
import { NavbarSide } from './NavbarSide'

export const Sidebar = ({ showSidebar }) => {
    return (
        <aside className={ showSidebar ? 'aside__main-active' : 'aside__main-desactive' }>
            <div className="profile__area">
                <div className="profile__area-img">
                    <img 
                        className="profile__img"
                        src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/12/24144941/grinch_navidad.jpg" 
                        alt="Profile Picture"
                    />
                </div>
                <div className="profile__area-text">
                    <p className="profile__displayName"> Pepito Vigrini </p>
                    <p className="profile__email"> pepito1874@amazon.com </p>
                </div>
            </div>
            <hr/>
            <div className="nav__area">
                <NavbarSide />
            </div>
            <div className="footer__area">
                <Footer />
            </div>
        </aside>
    )
}
