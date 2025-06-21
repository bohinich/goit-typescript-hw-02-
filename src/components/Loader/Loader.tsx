import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader: React.FC = () => (
  <div className="loader">
    <Oval
      height={80}
      width={80}
      color="#3f51b5"
      visible={true}
      ariaLabel="loading"
      secondaryColor="#ff6b01"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </div>
);

export default Loader;
