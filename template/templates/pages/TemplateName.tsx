import React from 'react';

import { Helmet } from 'react-helmet';

const TemplateName: React.FC = () => (
  <>
    <Helmet>
      <title>TemplateName</title>
    </Helmet>
    <div data-testid="TemplateName">
      <span>TemplateName Page</span>
    </div>
  </>
);

export default TemplateName;
