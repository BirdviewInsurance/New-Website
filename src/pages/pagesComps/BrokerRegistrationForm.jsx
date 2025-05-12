import React from 'react';

// Importing components
import BackgroundImage from '../components/BackgroundImage';

const BrokerRegistrationForm = () => {
  return (
    <div className="relative bg-gray-100 min-h-screen">
      {/* Top Div with Background Image */}
      <BackgroundImage />

      <div className="relative top-[-40px] left-0 right-0 flex justify-center px-4">
        <div className="bg-white  w-full max-w-[calc(100%-2rem)  bg p-4   flex flex-col items-center justify-start overflow-visible rounded-3xl shadow-lg">
          <div className="w-full overflow-x-auto ">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScAeb9io9K2RMK2Y6GXa2ls4pMD7PayxrqAc2iW6ryVrASXyQ/viewform?embedded=true"
              width="100%"
              height="1809"
              frameBorder="0"
              marginHeight="0"       
              marginWidth="0"
              className="rounded-lg"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerRegistrationForm;
