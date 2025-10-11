import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

export const Navbar = () => {
  const whatsapp = "https://chat.whatsapp.com/LxCZGjxPP0xH5FTyXoIeje";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Track window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenuOnMobile = () => {
    if (isMobile) setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Sessions", path: "/sessions" },
    { name: "About", path: "/about" },
    { name: "Join Our Team", path: "/join" },
  ];

  return (
    <nav
      className={`site-header brand-nav-gold w-full px-4 md:px-8 flex items-center justify-between h-[--navbar-height] shadow-sm shadow-neutral-300 bg-white z-50 ${isMenuOpen ? "max-md: fixed" : ""}`}
    >
      {/* Logo Section */}
      <div className="logo flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Tafseer Circle LGU logo"
          className="h-8 w-auto"
        />
        <div>
          <h1 className="nav-title font-semibold text-sm sm:text-base">
            Tafseer Circle – LGU
          </h1>
          <p className="text-xs text-neutral-600">
            Student-led Qur’an study circle
          </p>
        </div>
      </div>

      {/* Nav Links */}
      <ul
        className={`flex items-center gap-5 transition-transform duration-00 ease-in-out 
          ${
            isMobile
              ? `bg-[#edc568] flex-col fixed top-[56px] right-0 bottom-0 w-[100vw]  p-3 transform z-50
              ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`
              : "hidden md:flex"
          }`}
      >
        {navLinks.map((link) => (
          <li
            key={link.name}
            className="max-md:w-[90vw] max-md:border-yellow-800 max-md:border max-md:rounded-lg max-md:px-0 max-md:py-2 text-center text-[#3f2b02]"
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `${isActive ? "font-semibold" : ""} hover:text-[#5a4a2A]`
              }
              onClick={closeMenuOnMobile}
            >
              {link.name}
            </NavLink>
          </li>
        ))}

        {/* WhatsApp Join Button */}
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="max-md:my-0 max-md:w-[90vw] max-md:py-1.5 flex items-center justify-center font-semibold rounded-lg border border-yellow-800 text-yellow-800 px-3 py-1.5 hover:bg-[#5a4a2A] hover:text-yellow-500"
          onClick={closeMenuOnMobile}
        >
          <FaWhatsapp className=" mr-2 text-[#25D366]" /> Join
        </a>
      </ul>

      {/* Menu Button for Mobile */}
      <button
        aria-label="Toggle menu"
        className="md:hidden p-2 rounded-full hover:bg-yellow-700/10 focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <IoClose className="w-6 h-6 text-yellow-800" />
        ) : (
          <IoIosMenu className="w-6 h-6 text-yellow-800" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
