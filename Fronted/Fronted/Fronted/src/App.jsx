import React, { useState } from "react";
import WaybackHeader from "./Components/Header/WaybackHeader";
import Footer from "./Components/Footer/Footer";
import HeroSection from "../src/Components/HeroSection";

function App() {
  const [iframeUrl, setIframeUrl] = useState("");
  const [error, setError] = useState(false);

  const handleSearch = (url) => {
    setIframeUrl(url);
    setError(false);
  };

  return (
    <div className="overflow-x-hidden min-h-screen bg-gray-100 w-full mt-5">
      <WaybackHeader onSearch={handleSearch} />
      {/* Hero Section: top padding equals header height */}
      <div className="pt-[140px] flex justify-center min-w-screen">
        {iframeUrl ? (
          error ? (
            <div className="text-center p-10 text-red-500">
              <img src=""/>
              <br />
              <a
                href={iframeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Open in a new tab
              </a>
            </div>
          ) : (
            <iframe
                    src={iframeUrl}
                    title="Website Preview"
                    className="w-[100vw] h-[calc(100vh-140px)] border-2 border-gray-700 rounded-lg mt-8"
                    onError={() => setError(true)}
                  />

          )
        ) : (
          <div className="flex items-center justify-center h-[calc(100vh-140px)] text-gray-700 bg-blue-500 min-w-screen overflow-x-hidden">
          < HeroSection />
</div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
