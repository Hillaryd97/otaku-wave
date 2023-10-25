import React, { useState, useEffect } from "react";
import img3 from "../assets/bg-image (3).png";
import img4 from "../assets/hero-image (1).jpg";
import img6 from "../assets/bg-image (4).jpg";
import img7 from "../assets/bg-image (1).jpg";
import Nav from "./Nav";

const images = [img3, img4, img6, img7];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        const nextImageIndex = (currentImage + 1) % images.length;
        setCurrentImage(nextImageIndex);
      }, 15000);
  
      return () => clearTimeout(timer);
    }, [currentImage]);
  
    return (
      <div className="relative w-full h-screen">
        <div className="relative w-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute w-full h-screen object-fill transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
  
        <div className="absolute bg-black min-h-screen bg-opacity-80 inset-0 flex flex-col z-10">
          <Nav />
          <div className="flex items-center justify-center h-full">
            <div className="text-white text-center px-2">
              <div className="flex flex-col space-y-5 pb-6">
                <h1 className="lg:text-5xl text-4xl font-bold">Discover, Share, Engage.</h1>
                <p className="md:px-40">
                  Connect with fellow fans, join discussions, and keep track of your
                  anime watchlist. <br className="hidden md:block"/> Start your adventure in the ultimate anime
                  community today.{" "}
                </p>
              </div>
              <button className="px-8 py-2 bg-primary rounded-xl shadow-md hover:scale-105 duration-500 font-semibold hover:bg-opacity-90">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Hero;
