import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const toggleShowBtn = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', toggleShowBtn);

    return () => {
      window.removeEventListener('scroll', toggleShowBtn);
    };
  });

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Container fluid>
      <div className='copyright'>
        &copy; 2023 Corporate. All Right Reserved.
      </div>
      <div className='socials'>
        <ul>
          <li>
            <a href='https://www.facebook.com'>
              <i className='fab fa-facebook-f'></i>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com'>
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com'>
              <i className='fab fa-linkedin-in'></i>
            </a>
          </li>
        </ul>
      </div>
      {showTopBtn && <div className='go-top' onClick={goTop}></div>}
    </Container>
  );
};

export default Footer;
