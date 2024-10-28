import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <div className="footer-section">
                        <h3 className="footer-title">Oncode</h3>
                        <ul className="footer-list">
                            <li><a href="/about" className="footer-link">About Us</a></li>
                            <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title">For Companies</h3>
                        <ul className="footer-list">
                            <li><a href="/contact" className="footer-link">Hire Engineers</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title">For Engineers</h3>
                        <ul className="footer-list">
                            <li><a href="/career" className="footer-link">Apply for Jobs</a></li>
                            <li><a href="/coming-soon" className="footer-link">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title">Connect</h3>
                        <ul className="footer-list">
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a></li>
                            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-link">YouTube</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-logo">
                    <img src="web.png" alt="Oncode Logo" className="footer-logo-image" />
                </div>
            </div>
            <div className="footer-copyright">
                <p>&copy; 2024 Oncode. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
