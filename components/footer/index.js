import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0', textAlign: 'center', marginTop: '50px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <p>
          &copy; {currentYear} Arogyavahan. All rights reserved. |
          <a href="/privacy" style={{ margin: '0 10px', color: '#007bff', textDecoration: 'none' }}>Privacy Policy</a> |
          <a href="/terms" style={{ margin: '0 10px', color: '#007bff', textDecoration: 'none' }}>Terms of Service</a>
        </p>
        <div style={{ marginTop: '10px' }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#3b5998', fontSize: '1.5em', textDecoration: 'none' }}>
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#1da1f2', fontSize: '1.5em', textDecoration: 'none' }}>
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#0077b5', fontSize: '1.5em', textDecoration: 'none' }}>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;