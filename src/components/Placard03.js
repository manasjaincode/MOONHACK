import Image from "next/image";

const Placard = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-white p-6 flex gap-6">
      {/* Left Profile Section */}
      <div className="w-[400px] bg-[#1E1E1E] rounded-lg p-6">
        <h1 className="text-[#3AA1DD] text-4xl font-bold mb-2">Dr. Latika Jindal</h1>
        <p className="text-[#3AA1DD] text-sm mb-6">#Do it NOW</p>

        {/* Profile Image */}
        <div className="relative w-48 h-48 mx-auto mb-6">
          <img 
            src="/latikamam.jpg"  
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        {/* Skills/Title Section */}
        <div className="space-y-2 mb-6">
          <p className="text-gray-300">Professor</p>
          <p className="text-gray-300">Computer Science and Engg</p>
        </div>

        {/* University */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-purple-400 text-xl">🎓</span>
          <span className="text-purple-400">Medicaps University Indore</span>
        </div>

        {/* Additional Information */}
        <div className="space-y-2 text-gray-300">
          <p>🎖️ Club Faculty/Incharge</p>
        </div>

        {/* Edit Button */}
        <button className="mt-6 text-gray-300 flex items-center gap-2">
          ✏️ Edit
        </button>
      </div>
    </div>
  );
};

export default Placard;
