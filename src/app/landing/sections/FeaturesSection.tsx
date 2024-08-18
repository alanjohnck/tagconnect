import React from 'react';

function FeaturesSection() {
  return (
    <div className="w-screen h-[400vh] flex items-center justify-center">
      <div className="w-1/2 h-full">
        {/* Your content goes here */}
      </div>
      <div className="w-1/2 h-full sticky top-0">
        <div className="w-screen h-screen sticky top-0">
          <img src="./auto1.jpg" className="absolute top-0 left-0 z-10 w-full h-full object-cover" />
          <img src="./auto2.jpg" className="absolute top-0 left-0 z-20 w-full h-full object-cover" />    
          <img src="./auto1.jpg" className="absolute top-0 left-0 z-30 w-full h-full object-cover" />
          <img src="./auto2.jpg" className="absolute top-0 left-0 z-40 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
