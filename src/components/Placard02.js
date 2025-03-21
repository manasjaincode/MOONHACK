import Image from "next/image";

const Placard = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-white p-6 flex gap-6 mt-24">
      {/* Left Profile Section */}
      <div className="w-[400px] bg-[#1E1E1E] rounded-lg p-6">
        <h1 className="text-[#3AA1DD] text-4xl font-bold mb-2">Dr. Promod S. Nair</h1>
        <p className="text-[#3AA1DD] text-sm mb-6">Believe in Yourself.</p>

        {/* Profile Image */}
        <div className="relative w-48 h-48 mx-auto mb-6">
          <img 
            src="/profile.jpg"  
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        {/* Designation */}
        <div className="space-y-2 mb-6 text-gray-300">
          <p>🏛️ Professor and Dean</p>
          <p>📌 Faculty of Engineering</p>
        </div>

        {/* Email Section */}
        <div className="flex items-center gap-2 text-gray-300">
          <span>✉️</span>
          <a href="mailto:pramods.nair@medicaps.ac.in" className="text-blue-400 underline">
            pramods.nair@medicaps.ac.in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Placard;
