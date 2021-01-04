import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
    return (
        <footer className="footer">
            <h3 className="footer__title">
                DEGS Journal
            </h3>
            <p className="copyrights"> All Rigths Reserved &copy; 2020 <br/> Erik Carcelén </p>
            <div className="social-networks">
                <FaInstagram
                    className="react__icons-footer"
                />
                <FaLinkedin
                    className="react__icons-footer"
                />
                <FaGithub
                    className="react__icons-footer"
                />
            </div>
            <p className="location"> Quito - Ecuador </p>
        </footer>
    )
}
