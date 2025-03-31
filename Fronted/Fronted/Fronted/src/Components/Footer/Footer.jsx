import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-6 mt-10">
      {/* Images Section */}
      <div className="flex justify-center space-x-15 mb-4">
        <img src = "cube.gif" alt="Logo 1" className="w-20 h-10" />
        <img src="ds.gif" alt="Logo 2" className="w-20 h-10" />
        <img src="advance.gif" alt="Logo 3" className="w-20 h-10" />
        <img src="e.gif" alt="Logo 4" className="w-10 h-10 gap-x-5" />
        <img src="privacy.gif" alt="Logo 4" className="w-30 h-15 " />
      </div>

      {/* Copyright Text */}
      <div className="text-center text-sm text-gray-400">
        Game copyrights are property of their respective owners. TM, ®, 
        the Nintendo GameCube logo and Game Boy Advance logo are trademarks of Nintendo. 
        TM & © 2004 Nintendo.
      </div>
    </footer>
  );
};

export default Footer;
