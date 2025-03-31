import React from 'react';

const HeroSection = () => {
    const images = [
        {
            id: 1,
            src: "Mario.webp",
            title: "Super Mario Odyssey"
        },
        {
            id: 2,
            src: "Mario1.jpg",
            title: "Mario Kart 8 Deluxe"
        },
        {
            id: 3,
            src: "Mario2.jpg",
            title: "Super Mario Bros. Wonder"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-600 to-red-800 w-full mt-297">
            {/* Navigation Bar */}
            <nav className="bg-gray-900 bg-opacity-90 py-4 px-6 flex justify-between items-center">
                <div className="flex space-x-8">
                <button className="text-yellow-400 hover:text-yellow-300" onclick={() => window.open("https://www.nintendo.com/us/switch/")}>
                        Hot Titles
                    </button>
                    <button className="text-white hover:text-yellow-300" onclick={() => window.open("https://mario.nintendo.com/about/")}>MarioHistory</button>
                    <button className="text-white hover:text-yellow-300">
                        Downloads
                    </button>
                    <button className="text-white hover:text-yellow-300" onclick={() => window.open("https://www.nintendo.com/region-selector/")}>
                        Forums
                    </button>
                </div>
                <div className="flex space-x-4">
                    <button className="bg-yellow-400 text-red-800 px-4 py-2 rounded-full hover:bg-yellow-300" onclick={() => window.open("https://accounts.nintendo.com")}>
                        Sign In
                    </button>
                    <button className="border-2 border-yellow-400 text-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-red-800" onclick={() => window.open("https://nintendo.com/switch/")}>
                        See Current Titles
                    </button>
                </div>
            </nav>

            {/* Main Hero Content */}
            <div className="container mx-auto px-6 py-16">
                {/* Hot Titles Section */}
                <div className="bg-white bg-opacity-10 rounded-xl p-8 mb-12 backdrop-blur-lg">
                    <h2 className="text-3xl text-yellow-400 mb-6">
                        Trending Now
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {images.map((item) => (
                            <div key={item.id} className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
                                <img 
                                    src={item.src} 
                                    alt={item.title} 
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-white text-xl mb-2">{item.title}</h3>
                                <p className="text-gray-400 mb-4">Latest adventure in the Mushroom Kingdom</p>
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors" onclick={() => window.open("https://www.nintendo.com/us/store/products/super-mario-party-jamboree-switch/")}>
                                    Explore
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mario History Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <div className="bg-gray-900 rounded-xl p-8">
                        <h2 className="text-3xl text-yellow-400 mb-6">Mario Legacy</h2>
                        <p className="text-gray-300 mb-6">
                            Journey through 30+ years of Mario history, from pixelated plumber to 3D superstar.
                        </p>
                        <div className="h-64 bg-gray-800 rounded-lg overflow-hidden">
                            <img 
                                src="Mario5.jpg" 
                                alt="Mario History" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    
                    {/* Downloads Section */}
                    <div className="bg-gray-900 rounded-xl p-8">
                        <h2 className="text-3xl text-yellow-400 mb-6">
                            Latest Downloads
                        </h2>
                        <ul className="space-y-4">
                            {[1, 2, 3].map((item) => (
                                <li key={item} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                                    <div className="flex justify-between items-center">
                                        <span className="text-white">Mario Update v1.{item}.0</span>
                                        <button className="bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700">
                                            Download
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Forums Section */}
                <div className="bg-gray-900 rounded-xl p-8">
                    <h2 className="text-3xl text-yellow-400 mb-6">
                        Active Forum Topics
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                                <h3 className="text-white text-lg mb-2">Discussion Topic #{item}</h3>
                                <p className="text-gray-400 mb-4">Latest updates about Mario Kart Tournament</p>
                                <div className="flex justify-between items-center text-gray-500 text-sm">
                                    <span>15 comments</span>
                                    <span>2h ago</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;