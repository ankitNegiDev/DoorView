"use client";
import { useState } from "react";
import ReviewCard from "./ReviewCard";
import { FaDraftingCompass, FaShieldAlt, FaLock, FaBolt, FaCloudSun, FaPaintRoller, FaBug, FaBorderAll } from "react-icons/fa";


function Tab() {
    const [active, setActive] = useState("description");

    function renderContent() {
        switch (active) {
            case "description":
                return (
                    <div className="space-y-10">
                        {/* Hero Section */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Elevate Your Home’s Entrance
                            </h1>
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                                Discover our custom <span className="font-semibold text-gray-900">Iron Security Screen Doors</span>
                                that perfectly combine <span className="text-yellow-600 font-semibold">style</span>,
                                <span className="text-yellow-600 font-semibold"> strength</span>, and
                                <span className="text-yellow-600 font-semibold"> security</span>. Designed to protect your home while enhancing its visual appeal.
                            </p>
                        </div>

                        {/* Craftsmanship & Security */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-yellow-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                    Expert Craftsmanship
                                </h2>
                                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-800">
                                    <li>100% American-made steel, handcrafted in Gilbert, Arizona</li>
                                    <li>14-gauge steel frame with durable iron pull handles</li>
                                    <li>10” steel latch & lock guard for maximum security</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                    Available Designs
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-medium hover:bg-yellow-100 transition-colors cursor-pointer">
                                        Solid Steel
                                    </span>
                                    <span className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-medium hover:bg-yellow-100 transition-colors cursor-pointer">
                                        Steel with Glass
                                    </span>
                                    <span className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-medium hover:bg-yellow-100 transition-colors cursor-pointer">
                                        Wrought Iron & Wood
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Customization & Upgrades */}
                        <div className="bg-yellow-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                Enhancements & Upgrades
                            </h2>
                            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-800">
                                <li>Premium Kwikset or Schlage hardware</li>
                                <li>Integrated alarm & monitoring systems</li>
                                <li>Kick plates, removable sunscreens, powder-coated frames</li>
                                <li>Sidelights, transoms, and elegant iron pull handles</li>
                            </ul>
                        </div>

                        {/* Closing Statement */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
                            <p className="text-lg md:text-xl font-bold text-yellow-600">
                                With expert craftsmanship and personalized designs, we’ll help you create the <span className="underline">first impression you’ve always dreamed of</span>.
                                Let’s bring your vision to life today!
                            </p>
                        </div>
                    </div>
                );

            // case "features":
            //     return (
            //         <div className="space-y-16 px-4 md:px-0">
            //             {/* Section Header */}
            //             <div className="text-center max-w-3xl mx-auto">
            //                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            //                     Key Features
            //                 </h2>
            //                 <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            //                     Each Iron Security Door is crafted with precision, combining security, durability, and elegance.
            //                 </p>
            //             </div>

            //             {/* Grid of Features */}
            //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            //                 {[
            //                     { title: "Custom Designs", description: "Hundreds of handcrafted and plasma-cut designs, or customize your own", icon: FaDraftingCompass, gradient: "from-yellow-50 via-yellow-100 to-yellow-200" },
            //                     { title: "Heavy-Duty Steel", description: "14-gauge steel door and frame for maximum strength", icon: FaShieldAlt, gradient: "from-emerald-100 via-emerald-200 to-emerald-300" },
            //                     { title: "Advanced Locks", description: "Kwikset or Schlage locks with single or double cylinder deadbolt", icon: FaLock, gradient: "from-cyan-100 via-cyan-200 to-cyan-300" },
            //                     { title: "Ultimate Security", description: "10” thick steel latch guard protects lock and latches", icon: FaBolt, gradient: "from-pink-100 via-pink-200 to-pink-300" },
            //                     { title: "Weather Protection", description: "Industry-leading Q-Lon weather seal", icon: FaCloudSun, gradient: "from-blue-100 via-blue-200 to-blue-300" },
            //                     { title: "Durable Finish", description: "Powder coat finish over 3mm thick, twice-baked process", icon: FaPaintRoller, gradient: "from-orange-100 via-orange-200 to-orange-300" },
            //                     { title: "Screen Options", description: "Removable insect screens and solar screens with powder-coated frames", icon: FaBug, gradient: "from-purple-100 via-purple-200 to-purple-300" },
            //                     { title: "Custom Frames", description: "Flush-mounted screen frames with fitted sill plate", icon: FaBorderAll, gradient: "from-rose-100 via-rose-200 to-rose-300" },
            //                     { title: "Premium Hardware", description: "High-quality hinges, handles, and locks to elevate security and style", icon: FaLock, gradient: "from-lime-100 via-lime-200 to-lime-300" }
            //                 ].map(function (feature, index) {
            //                     const Icon = feature.icon;
            //                     return (
            //                         <div key={index} className={`
            //   relative p-6 rounded-3xl shadow-lg
            //   bg-gradient-to-br ${feature.gradient}
            //   ring-1 ring-yellow-300
            //   transform-gpu transition-all duration-500
            //   hover:scale-105 hover:-translate-y-1 hover:rotate-1 hover:shadow-2xl group
            // `}>
            //                             {/* Animated Icon */}
            //                             <div className={`
            //     absolute -top-5 -left-5 p-4 rounded-full
            //     bg-gradient-to-tr from-yellow-400 to-yellow-500
            //     shadow-xl text-white text-2xl flex items-center justify-center
            //     transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12
            //   `}>
            //                                 <Icon />
            //                             </div>

            //                             {/* Card Content */}
            //                             <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-2">{feature.title}</h3>
            //                             <p className="text-gray-700 text-base leading-relaxed">{feature.description}</p>
            //                         </div>
            //                     );
            //                 })}
            //             </div>

            //             {/* Closing Statement */}
            //             <div className="bg-yellow-50 p-8 rounded-3xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            //                 <p className="text-xl md:text-2xl font-bold text-yellow-600">
            //                     Every feature is thoughtfully designed to provide <span className="underline">security, elegance, and lasting value</span>.
            //                 </p>
            //             </div>
            //         </div>
            //     );

            case "features":
                return (
                    <div className="space-y-10 px-4 md:px-0">
                        {/* Section Header */}
                        <div className="relative text-center max-w-4xl mx-auto px-4 py-0 overflow-hidden">
                            {/* Animated Background Blobs */}
                            <div className="absolute top-0 left-1/4 w-72 h-72 bg-yellow-300 rounded-full opacity-30 blur-3xl animate-pulse-slow -z-10"></div>
                            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400 rounded-full opacity-20 blur-2xl animate-pulse-slow -z-10"></div>

                            {/* Heading with 3D/Gradient Effect */}
                            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 relative inline-block">
                                <span className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
                                    Key Features
                                </span>
                                {/* Subtle Sparkles */}
                                <span className="absolute -top-4 -right-8 text-yellow-400 text-3xl animate-ping-slow">✨</span>
                                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-yellow-300 text-2xl animate-bounce-slow">💫</span>
                            </h2>

                            {/* Subheading / Description */}
                            <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto relative z-10">
                                Each Iron Security Door is <span className="font-semibold text-yellow-600">crafted with precision</span>, combining
                                <span className="font-semibold text-yellow-500"> security</span>,
                                <span className="font-semibold text-yellow-500"> durability</span>, and
                                <span className="font-semibold text-yellow-500"> elegance</span>, designed to leave a lasting impression.
                            </p>

                            {/* Animated Gradient Line Under Heading */}
                            <div className="mt-8 w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 shadow-lg animate-pulse-slow"></div>
                        </div>


                        {/* Grid of Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Custom Designs", description: "Hundreds of handcrafted and plasma-cut designs, or customize your own", icon: FaDraftingCompass, gradient: "from-yellow-50 via-yellow-100 to-yellow-200" },
                                { title: "Heavy-Duty Steel", description: "14-gauge steel door and frame for maximum strength", icon: FaShieldAlt, gradient: "from-cyan-50 via-cyan-100 to-cyan-200" },
                                { title: "Advanced Locks", description: "Kwikset or Schlage locks with single or double cylinder deadbolt", icon: FaLock, gradient: "from-pink-50 via-pink-100 to-pink-200" },
                                { title: "Ultimate Security", description: "10” thick steel latch guard protects lock and latches", icon: FaBolt, gradient: "from-lime-50 via-lime-100 to-lime-200" },
                                { title: "Weather Protection", description: "Industry-leading Q-Lon weather seal", icon: FaCloudSun, gradient: "from-blue-50 via-blue-100 to-blue-200" },
                                { title: "Durable Finish", description: "Powder coat finish over 3mm thick, twice-baked process", icon: FaPaintRoller, gradient: "from-orange-50 via-orange-100 to-orange-200" },
                                { title: "Screen Options", description: "Removable insect screens and solar screens with powder-coated frames", icon: FaBug, gradient: "from-purple-50 via-purple-100 to-purple-200" },
                                { title: "Custom Frames", description: "Flush-mounted screen frames with fitted sill plate", icon: FaBorderAll, gradient: "from-rose-50 via-rose-100 to-rose-200" },
                                { title: "Premium Hardware", description: "High-quality hinges, handles, and locks to elevate security and style", icon: FaLock, gradient: "from-teal-50 via-teal-100 to-teal-200" }
                            ].map(function (feature, index) {
                                const Icon = feature.icon;
                                const trimmedDesc = feature.description.length > 80
                                    ? feature.description.substring(0, 77) + "..."
                                    : feature.description;

                                return (
                                    <div
                                        key={index}
                                        className={`
                                            relative p-6 rounded-3xl shadow-lg
                                            bg-gradient-to-br ${feature.gradient}
                                            ring-1 ring-gray-200
                                            transform-gpu transition-all duration-500
                                            hover:scale-105 hover:-translate-y-1 hover:rotate-1 hover:shadow-2xl group
                                            flex flex-col h-64
                                        `}
                                    >
                                        {/* Animated Icon */}
                                        <div
                                            className={`
                                                absolute -top-5 -left-5 p-4 rounded-full
                                                bg-white shadow-xl text-gray-800 text-2xl flex items-center justify-center
                                                transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12
                                            `}
                                        >
                                            <Icon />
                                        </div>

                                        {/* Card Content */}
                                        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-2">{feature.title}</h3>
                                        <p className="text-gray-700 text-base leading-relaxed flex-grow overflow-hidden">{trimmedDesc}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Closing Statement */}
                        <div className="relative max-w-3xl mx-auto p-10 rounded-3xl bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-50 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">

                            {/* Decorative Sparkles */}
                            <span className="absolute top-4 left-10 text-yellow-400 text-3xl animate-ping-slow opacity-70">✨</span>
                            <span className="absolute bottom-6 right-16 text-yellow-300 text-2xl animate-bounce-slow opacity-60">💫</span>

                            {/* Main Text */}
                            <p className="text-xl md:text-2xl font-extrabold text-gray-900 text-center relative z-10">
                                Every feature is thoughtfully designed to provide{' '}
                                <span className="underline decoration-yellow-500 decoration-4">security, elegance, and lasting value</span>.
                            </p>

                            {/* Decorative Border Effect */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-yellow-300 opacity-50 pointer-events-none animate-pulse-slow"></div>
                        </div>

                    </div>
                );




            case "options":
                const optionsList = [
                    "Iron pull handle with roller catches",
                    "Hinged glass in either clear or patterned designs",
                    "Tempered removable glass insert, either clear or patterned",
                    "Doggy doors with powder coated steel frame",
                    "Enhanced decorative 2-Step mounting frame",
                    "Sidelights or transoms",
                    "Decorative faux arch, arched door in square frame, or true arched door and frame",
                    "Kick plates with a variety of borders and designs",
                    "Removable steel perforated steel screen",
                    "Zinc primer protective coat for extended powder coat finish life",
                    "Hand applied custom faux finish",
                ];

                // Generate a random tilt for each card
                function getRandomTilt() {
                    const angle = Math.floor(Math.random() * 11) - 5; // -5 to +5
                    return angle;
                }

                // return (
                //     <div className="space-y-16">
                //         {/* Header */}

                //         <div className="relative text-center max-w-4xl mx-auto px-4 py-0 overflow-hidden">
                //             {/* Heading with 3D/Gradient Effect */}
                //             <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 relative inline-block">
                //                 <span className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
                //                     Options & Customizations
                //                 </span>
                //             </h2>

                //             {/* Subheading / Description */}
                //             <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto relative z-10">
                //                 Tailor your <span className="font-semibold text-yellow-600">iron security door</span> with our
                //                 <span className="font-semibold text-yellow-500"> premium options</span> to match your
                //                 <span className="font-semibold text-yellow-500"> style</span> and
                //                 <span className="font-semibold text-yellow-500"> needs</span>, ensuring every choice is
                //                 <span className="font-semibold text-yellow-600"> functional</span> and
                //                 <span className="font-semibold text-yellow-500"> elegant</span>.
                //             </p>


                //             {/* Animated Gradient Line Under Heading */}
                //             <div className="mt-4 w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 shadow-lg animate-pulse-slow"></div>
                //         </div>

                //         {/* Options Grid */}
                //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                //             {optionsList.map(function (option, index) {
                //                 const tilt = getRandomTilt();
                //                 const bgColor = index % 2 === 0 ? "bg-yellow-50" : "bg-gray-300";

                //                 return (
                //                     <div
                //                         key={index}
                //                         className={`${bgColor} relative p-6 rounded-3xl shadow-lg transform transition-transform duration-500 ease-out hover:rotate-0 hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}
                //                         style={{
                //                             transform: `rotate(${tilt}deg)`,
                //                             animation: `float ${2 + Math.random() * 2}s ease-in-out infinite`,
                //                         }}
                //                     >
                //                         {/* Number Badge */}
                //                         <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold text-lg">
                //                             {index + 1}
                //                         </div>

                //                         <p className="text-gray-800 text-base md:text-lg leading-relaxed font-medium">
                //                             {option}
                //                         </p>
                //                     </div>
                //                 );
                //             })}
                //         </div>

                //         {/* Closing Statement */}
                //         <div className="relative max-w-3xl mx-auto p-10 rounded-3xl bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-50 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">

                //             {/* Decorative Sparkles */}
                //             <span className="absolute top-4 left-10 text-yellow-400 text-3xl animate-ping-slow opacity-70">✨</span>
                //             <span className="absolute bottom-6 right-16 text-yellow-300 text-2xl animate-bounce-slow opacity-60">💫</span>

                //             {/* Main Text */}
                //             <p className="text-xl md:text-2xl font-extrabold text-gray-900 text-center relative z-10">
                //                 Every option is designed to provide{' '}
                //                 <span className="underline decoration-yellow-500 decoration-4">style, customization, and lasting quality</span>.
                //             </p>

                //             {/* Decorative Border Effect */}
                //             <div className="absolute inset-0 rounded-3xl border-2 border-yellow-300 opacity-50 pointer-events-none animate-pulse-slow"></div>
                //         </div>

                //         {/* Inline CSS for floating animation */}
                //         <style jsx>{`
                //                 @keyframes float {
                //                     0%, 100% { transform: translateY(0px); }
                //                     50% { transform: translateY(-4px); }
                //                 }
                //             `}
                //         </style>
                //     </div>
                // );

            case "options":
                return (
                    <div className="space-y-16">
                        {/* Header */}
                        <div className="relative text-center max-w-4xl mx-auto px-4 py-0 overflow-hidden">
                            {/* Heading with Gradient & 3D Effect */}
                            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 relative inline-block">
                                <span className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
                                    Options & Customizations
                                </span>
                            </h2>

                            {/* Subheading */}
                            <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto relative z-10">
                                Tailor your <span className="font-semibold text-yellow-600">iron security door</span> with our
                                <span className="font-semibold text-yellow-500"> premium options</span> to match your
                                <span className="font-semibold text-yellow-500"> style</span> and
                                <span className="font-semibold text-yellow-500"> needs</span>, ensuring every choice is
                                <span className="font-semibold text-yellow-600"> functional</span> and
                                <span className="font-semibold text-yellow-500"> elegant</span>.
                            </p>

                            {/* Animated Gradient Line */}
                            <div className="mt-4 w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 shadow-lg animate-pulse-slow"></div>
                        </div>

                        {/* Options Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
                            {optionsList.map(function (option, index) {
                                var tilt = getRandomTilt();

                                var gradients = [
                                    "from-yellow-50 via-yellow-100 to-yellow-200",
                                    "from-cyan-50 via-cyan-100 to-cyan-200",
                                    "from-pink-50 via-pink-100 to-pink-200",
                                    "from-lime-50 via-lime-100 to-lime-200",
                                    "from-blue-50 via-blue-100 to-blue-200",
                                    "from-orange-50 via-orange-100 to-orange-200"
                                ];
                                var gradient = gradients[index % gradients.length];

                                return (
                                    <div
                                        key={index}
                                        className={
                                            "relative p-6 rounded-3xl shadow-lg bg-gradient-to-br " + gradient +
                                            " ring-1 ring-gray-300 transform-gpu transition-all duration-500 " +
                                            "hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:rotate-0 cursor-pointer group overflow-hidden"
                                        }
                                        style={{
                                            transform: "rotate(" + tilt + "deg)",
                                            animation: "float " + (2 + Math.random() * 2).toFixed(1) + "s ease-in-out infinite"
                                        }}
                                    >

                                        {/* Option Text */}
                                        <p className="text-gray-800 text-base md:text-lg leading-relaxed font-semibold mt-4 group-hover:text-yellow-600 transition-colors duration-300">
                                            {option}
                                        </p>

                                        {/* Glow Overlay on Hover */}
                                        <div className="absolute inset-0 rounded-3xl bg-yellow-100 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

                                        {/* Optional Sparkles */}
                                        <div className="absolute inset-0 pointer-events-none">
                                            {Array.from({ length: 3 }).map(function (_, i) {
                                                return (
                                                    <span
                                                        key={i}
                                                        className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-ping-slow"
                                                        style={{
                                                            top: Math.random() * 100 + "%",
                                                            left: Math.random() * 100 + "%",
                                                            animationDelay: Math.random() * 2 + "s"
                                                        }}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Closing Statement */}
                        <div className="relative max-w-3xl mx-auto p-10 rounded-3xl bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-50 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
                            {/* Decorative Sparkles */}
                            <span className="absolute top-4 left-10 text-yellow-400 text-3xl animate-ping-slow opacity-70">✨</span>
                            <span className="absolute bottom-6 right-16 text-yellow-300 text-2xl animate-bounce-slow opacity-60">💫</span>

                            <p className="text-xl md:text-2xl font-extrabold text-gray-900 text-center relative z-10">
                                Every option is designed to provide{' '}
                                <span className="underline decoration-yellow-500 decoration-4">style, customization, and lasting quality</span>.
                            </p>

                            {/* Decorative Border */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-yellow-300 opacity-50 pointer-events-none animate-pulse-slow"></div>
                        </div>

                        {/* Inline CSS for Floating and Pulse Animations */}
                        <style jsx>{`
                            @keyframes float {
                                0%, 100% { transform: translateY(0px); }
                                50% { transform: translateY(-6px); }
                            }
                            @keyframes pulse-slow {
                                0% { transform: scale(1); opacity: 0.6; }
                                50% { transform: scale(1.2); opacity: 1; }
                                100% { transform: scale(1); opacity: 0.6; }
                            }
                        `}</style>
                    </div>
                );




            case "Reviews":
                return (
                    <>
                        <ReviewCard
                            day="27"
                            month="Jan"
                            author="Michele Namba"
                            rating={5}
                            review="Responsive and friendly staff. Very sturdy construction and quick installation service."
                        />
                        <ReviewCard
                            day="22"
                            month="Jan"
                            author="by Angela Stoll"
                            rating={4}
                            review="Excellent work and customer service"
                        />
                        <ReviewCard
                            day="18"
                            month="Jan"
                            author="by James Smith"
                            rating={4}
                            review="We are totally pleased with the entire experience of the selection and the installation of our outside security door with First Impression Ironworks. From our in-home meeting with Brett to our interaction with Michele in their office to our…"
                        />
                    </>
                );
            default:
                return null;
        }
    }

    function handleTabClick(tab) {
        setActive(tab);
    }

    function renderTabs() {
        const tabs = ["description", "features", "options", "Reviews"];
        return tabs.map(function (tab) {
            return (
                <span
                    key={tab}
                    className={
                        "cursor-pointer capitalize px-3 py-2 rounded-lg transition-all " +
                        (active === tab
                            ? "bg-yellow-100 text-yellow-600 font-semibold shadow-md"
                            : "text-gray-500 hover:text-yellow-600 hover:bg-yellow-50")
                    }
                    onClick={function () {
                        handleTabClick(tab);
                    }}
                >
                    {tab}
                </span>
            );
        });
    }

    return (
        <div className="p-6 bg-white rounded-xl shadow-xl mr-4">
            {/* Tabs */}
            <div className="flex gap-4 flex-wrap mb-6">{renderTabs()}</div>

            {/* Content */}
            <div className="space-y-4">{renderContent()}</div>
        </div>
    );
}

export default Tab;
