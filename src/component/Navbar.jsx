import React,{useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header>
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#">
            <h1 className="text-3xl text-[#00df9a] font-bold">React.</h1>
          </a>
        </div>
        <ul className="md:flex items-center gap-20 hidden ">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Company</a>
          </li>
          <li>
            <a href="">Resource</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'><a className="text-white" href="">Home</a></li>
          <li className='p-4 border-b border-gray-600'><a className="text-white" href="">Company</a></li>
          <li className='p-4 border-b border-gray-600'><a className="text-white" href="">Resources</a></li>
          <li className='p-4 border-b border-gray-600'><a className="text-white" href="">About</a></li>
          <li className='p-4 border-b border-gray-600'><a className="text-white" href="">Contact</a></li>
          <li className='p-4'>Contact</li>
      </ul>

      </div>
    </header>
  );
}

export default Navbar;
