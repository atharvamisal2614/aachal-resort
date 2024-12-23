import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const slides = [
  {
    imageUrl: '/images/aachal-header.jpg',
    link: '/stay',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative">
      {/* Slider Container */}
      <div className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition duration-700 ease-in-out transform ${
              index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-95'
            }`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-white p-4 md:p-8"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Logo */}
      {/* <div className="absolute  left-1/2 transform -translate-x-1/2 z-50">
        <Link href="/">
          <img
            src="/aachal-resort-logo.png"
            alt=" Resort Logo"
            className="w-16 h-16 object-contain md:w-28 md:h-28" 
          />
        </Link>
      </div> */}

      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="absolute top-0 left-0 text-white bg-aqua px-3 py-2 rounded focus:outline-none z-50"
      >
        {isOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
      </button>

      {/* Reserve Your Room Button */}
      <Link
        href="/reserve"
        className="absolute right-0 top-0 text-gray-700 font-sans text-sm md:text-lg leading-loose px-4 py-2 rounded font-medium bg-customTeal transition-all"
      >
        RESERVE YOUR ROOM
      </Link>

      {/* Mobile Navbar Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          backgroundImage: `url(${slides[0].imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.7', 
        }}
      >
        <div className="flex h-full">
          {/* Menu Section */}
          <div className="w-full bg-gray-200 p-4 flex flex-col justify-center items-center">
            <nav className="flex flex-col space-y-6 text-lg font-semibold">
              <Link
                href="/"
                onClick={toggleMenu}
                className="text-black hover:text-customTeal hover:scale-110 transition-all"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={toggleMenu}
                className="text-black hover:text-customTeal hover:scale-110 transition-all"
              >
                About Us
              </Link>
              <Link
                href="/stay"
                onClick={toggleMenu}
                className="text-black hover:text-customTeal hover:scale-110 transition-all"
              >
                Accommodations
              </Link>
              <Link
                href="/gallery"
                onClick={toggleMenu}
                className="text-black hover:text-customTeal hover:scale-110 transition-all"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="text-black hover:text-customTeal hover:scale-110 transition-all"
              >
                Contact Us
              </Link>
              <Link
                href="/reserve"
                onClick={toggleMenu}
                className="text-black hover:text-customTeal hover:scale-110 transition-all"
              >
                Reserve Your Room
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
