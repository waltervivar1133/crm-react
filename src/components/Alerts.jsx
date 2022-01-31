import React from 'react';

const Alerts = ({children}) => {
  return (
  
  <div className='bg-red-600  my-2 text-white p-1 text-center w-full rounded'>
    {children}
  </div>
  );
};

export default Alerts;
