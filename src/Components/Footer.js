import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <footer className='mx-auto'>
                <div class="contact">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/shakila.shely.7" alt="" target="_blank"><FaFacebookSquare className='fs-1 text-black'></FaFacebookSquare></a>
                        </li>
                        <li>

                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/shakila-shely-a926aa1a7/" target="_blank"><FaLinkedin className='fs-1 text-black'></FaLinkedin></a>
                        </li>
                        <li>
                            <a href="https://github.com/shely25" target="_blank"><FaGithub className='fs-1 text-black'></FaGithub></a>
                        </li>
                    </ul>
                </div>
                <p>All are caught</p>
                <p>Copyright © 2020 all rights reserves</p>
            </footer>
        </div >

    );
};

export default Footer;