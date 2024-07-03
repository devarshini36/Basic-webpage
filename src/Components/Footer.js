import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="foot">
      <div className="footer-sec">
        <h2>Website</h2>
      </div>
      <div className='footer'>
      <div className="footer-section">
        <h3>Reservations Office</h3>
        <p>123 Anywhere St.,<br />Any City ST 12345</p>
        <p>📞 1123-456-7890</p>
        <p>✉️ hello@reallygreatsite.com</p>
      </div>
      <div className="footer-section">
        <h3>Office Hours</h3>
        <p>Monday to Friday<br />9:00 am to 6:00 pm</p>
        <p>Saturday<br />9:00 am to 12:00 noon</p>
      </div>
      <div className="footer-section">
        <h3>Get Social</h3>
        <div className="social-icons">
          <a href="https://facebook.com" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-facebook"
            >
              <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3.5l.5-4H15V6a1 1 0 0 1 1-1h2z"></path>
            </svg>
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-twitter"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.46 4a9.06 9.06 0 0 1-2.86 1.1A4.52 4.52 0 0 0 16.1 3a4.5 4.5 0 0 0-4.15 6.34A12.94 12.94 0 0 1 3 4.1s-4 9 5 13a13.07 13.07 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-4.5-4.5h-.5A4.48 4.48 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-instagram"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
        <button>Tag us in your photos!</button>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
