import React from 'react';

import Layout from 'components/layout';
import SEO from 'components/seo';
import Banner from 'sections/banner';

const Security = () => (
  <Layout>
    <SEO title="Security" />
    <Banner />
    <h1>Application Security</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default Security;