import React from 'react';
// import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Global COVID19 Tracker</p>
        <ul>
          <li>
            <a href="https://covid19-us-tracker.netlify.app/">US Tracker</a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
