import React from "react";
import './Footer.css';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="copyright">
                &copy; {currentYear} Jaylen Holloway. All rights reserved.
                </p>
            </div>
    </footer>
    );
};