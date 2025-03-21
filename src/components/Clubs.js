import React from 'react';


function Clubs() {
  return (
    <main className="container mx-auto px-4 pt-32 text-center">
      <h2 className="text-5xl font-bold text-gray-300 mb-16">Listed Clubs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Radio Club */}
        <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-700 bg-black/50 shadow-lg">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-950 to-blue-400 flex items-center justify-center">
          <img 
              src="mc.png" 
              alt="IEEE" 
              className="w-12 h-12 invert"
            />
          </div>
          <h3 className="text-xl text-gray-300">Media Club</h3>
        </div>
        
        {/* IEEE */}
        <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-700 bg-black/50 shadow-lg">
          <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center">
            <img 
              src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/ieee.svg" 
              alt="IEEE" 
              className="w-12 h-12 invert"
            />
          </div>
          <h3 className="text-xl text-gray-300">IEEE</h3>
        </div>
        
        {/* ACM MSIT */}
        <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-700 bg-black/50 shadow-lg">
          <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center">
            <img 
              src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/acm.svg" 
              alt="ACM" 
              className="w-12 h-12 invert"
            />
          </div>
          <h3 className="text-xl text-gray-300">ACM</h3>
        </div>
        
        {/* Cloud Club */}
        <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-700 bg-black/50 shadow-lg">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-300 to-green-300 flex items-center justify-center">
          <img 
              src="cc.png" 
              alt="ACM" 
              className="w-16 h-16 invert"
            />
          </div>
          <h3 className="text-xl text-gray-300">Cloud Club</h3>
        </div>
      </div>
    </main>
  );
}

export default Clubs;