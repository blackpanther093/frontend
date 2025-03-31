import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaQuestionCircle, FaUser, FaTimes } from "react-icons/fa";
import TimelineCanvas from "../TimelineCanvas";

const generateTimelineData = () => {
  return Array.from({ length: 30 }, (_, index) => {
    const year = 1996 + Math.floor(Math.random() * 30); // Year between 1996-2025
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0"); // Month between 1-12
    const day = "14"; // Fixed day
    const value = Math.floor(Math.random() * 50) + 50;
    return { date: `${year}-${month}-${day}`, value };
  });
};

const WaybackHeader = ({ onSearch }) => {
  const [defaultDate, setDefaultDate] = useState("2025-03-14");
  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [showHeader, setShowHeader] = useState(true);
  const timelineData = generateTimelineData();

  const handleSearch = (e) => {
    e.preventDefault();
    let link = e.target.elements.searchLink.value.trim();
    if (!link) return;
    if (!/^https?:\/\//i.test(link)) {
      link = "http://" + link;
    }
    onSearch(link);
  };

  const handleCanvasHover = (date) => {
    setSelectedDate(date);
  };

  const handleCanvasClick = (date) => {
    setDefaultDate(date);
    setSelectedDate(date);
  };

  return (
    <>
      {showHeader && (
        <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-300 shadow-md pl-2 pr-2 opacity-100">
          <div className="max-w-6xl mx-auto flex items-center justify-between p-3">
            {/* Left: Logo */}
            <div className="flex items-center space-x-2">
            <div className="flex justify-start items-center">
          <img
            src="wayback.png"
            alt="Logo"
            className="w-[120px] h-[55px] object-contain mr-10"
          />
</div>

              <span className="font-bold text-xl text-gray-800">Wayback Machine</span>
            </div>

            {/* Center: Search Bar */}
            <form onSubmit={handleSearch} className="flex-1 mx-6">
              <div className="relative">
                <input
                  type="text"
                  name="searchLink"
                  placeholder="Enter a URL..."
                  className="w-full rounded-full px-4 py-2 outline-none placeholder-gray-600 border-2 border-gray-400"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 bottom-0 bg-white text-orange-500 px-4 rounded-r-full border-l border-gray-400"
                >
                  Go
                </button>
              </div>
            </form>

            {/* Right: Date Display, Icons, and Close Button */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Date:</span>
                <input
                  type="text"
                  value={selectedDate}
                  readOnly
                  className="w-36 bg-gray-200 border border-gray-400 rounded px-2 py-1 text-gray-700 text-sm"
                />
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center space-x-5">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-blue-600 text-xl hover:scale-110 transition-transform cursor-pointer" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-blue-400 text-xl hover:scale-110 transition-transform cursor-pointer" />
                </a>
                <a href="https://web.archive.org/" target="_blank" rel="noopener noreferrer">
                  <FaQuestionCircle className="text-gray-600 text-xl hover:scale-110 transition-transform cursor-pointer" />
                </a>
                <a href="https://archive.org/account/login.php" target="_blank" rel="noopener noreferrer">
                  <FaUser className="text-gray-800 text-xl hover:scale-110 transition-transform cursor-pointer" />
                </a>
              </div>

              {/* Close Button */}
              <button onClick={() => setShowHeader(false)} className="ml-3">
                <FaTimes className="text-gray-600 text-2xl hover:text-red-500 transition cursor-pointer" />
              </button>
            </div>
          </div>

          {/* Timeline Canvas */}
          <div className="flex justify-center bg-gray-100 py-2 border-t border-gray-300">
            <TimelineCanvas
              timelineData={timelineData}
              onHover={handleCanvasHover}
              onClick={handleCanvasClick}
            />
          </div>

          {/* Capture Data */}
          <div className="flex justify-center py-2 text-sm">
            <a
              href="https://web.archive.org/web/20250000000000*/https://mario.nintendo.com/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              4096 captures
            </a>
            <span className="mx-2 text-gray-600">|</span>
            <span className="text-gray-700">9 Dec 2004 - 28 March 2025</span>
          </div>
        </header>
      )}

      {/* Show Header Button */}
      {!showHeader && (
        <div className="fixed top-0 w-full flex justify-center mt-4">
          <button
            onClick={() => setShowHeader(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Show Header
          </button>
        </div>
      )}
    </>
  );
};

export default WaybackHeader;
