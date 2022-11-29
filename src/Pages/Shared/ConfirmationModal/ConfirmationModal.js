import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, successAction, modalData }) => {
    return (
        <div>

            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn">Delete</label>
                        <button onClick={closeModal} className='btn btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;


/**
 * 
 * import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            this us footer
            <footer
                // style={{
                //     background: `url(${footer})`,
                //     backgroundSize: 'cover'
                // }}
                className='p-10'>
                <div className="footer">
                    <div>
                        <span className="footer-title">Services</span>
                        <Link to='/' className="link link-hover">Branding</Link>
                        <Link to='/' className="link link-hover">Design</Link>
                        <Link to='/' className="link link-hover">Marketing</Link>
                        <Link to='/' className="link link-hover">Advertisement</Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link to='/' className="link link-hover">About us</Link>
                        <Link to='/' className="link link-hover">Contact</Link>
                        <Link to='/' className="link link-hover">Jobs</Link>
                        <Link to='/' className="link link-hover">Press kit</Link>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link to='/' className="link link-hover">Terms of use</Link>
                        <Link to='/' className="link link-hover">Privacy policy</Link>
                        <Link to='/' className="link link-hover">Cookie policy</Link>
                    </div>
                </div>
                <div className='text-center mt-24'>
                    <p>Copyright © 2022 - All right reserved by Nadim Group Of Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
 * 
 */

/**
 * import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="" className=" rounded-lg shadow-2xl lg:w-1/2" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here!!!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
            </div>
        </div>

    );
};

export default Banner;
 */