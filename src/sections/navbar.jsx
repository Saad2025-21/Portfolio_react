import { useState } from "react";
import { motion } from "motion/react";
function Navigation({ onNavigate }) {
  
 
  return (
    
    ( <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home" onClick={onNavigate}>
        Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about" onClick={onNavigate}>
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work" onClick={onNavigate}>
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#skills" onClick={onNavigate}>
          Skills
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact" onClick={onNavigate}>
          Contact
        </a>
      </li>
    </ul>
    )
   
  );
  
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 top-0 z-20 w-full border-b border-white/6 bg-[#0B0D12]/85 backdrop-blur-xl">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex min-h-16 items-center justify-between">
          <a
            href="#home"
            className="font-[Space_Grotesk] text-lg font-bold text-white transition-colors hover:text-[#e7d7b1]"
          >
            Saad<span className="text-[#e7d7b1]">.</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="border-t border-white/6 bg-[#0B0D12]/95 text-center backdrop-blur-xl sm:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="pb-5">
            <Navigation onNavigate={() => setIsOpen(false)} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;