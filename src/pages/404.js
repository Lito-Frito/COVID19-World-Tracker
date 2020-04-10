import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/Container';

const NotFoundPage = () => {
  return (
    <Layout>
      <Container type="content" className="text-center">
        <h1>Page Not Found</h1>
        <p>This page doesn't exist, sorry. Try going to the <a href="/">map</a></p>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
