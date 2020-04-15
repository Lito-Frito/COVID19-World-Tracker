import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>
          See the{ ' ' }
          <a href="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">
            John Hopkin
          </a>{ ' ' }
          dashboard for more info
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
