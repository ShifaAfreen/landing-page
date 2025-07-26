import { useRef, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Header = () => {

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] =useState(false);
  const navItems = [
    {label : "About", href: "/about"},
    {label: "Services", href:"/services"},
    {label: "Blog", href:"/blogs"}
  ]

  const handleToggleMenu = (e)=>{
       e.stopPropagation();
       setIsMobileDrawerOpen(!isMobileDrawerOpen);
  }
  const navRef = useRef(null);
  const buttonRef = useRef(null);

   const handleClickOutside = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, []);

  useOnClickOutside([navRef,buttonRef], handleClickOutside);


   return (
    <header className=" fixed w-full top-2 z-50">
  <div className="relative mx-auto max-w-2xl bg-white rounded-3xl flex flex-col py-2 px-4 sm:flex-row sm:items-center sm:justify-between">
    <a href="/">
      <img src="/logo.png" alt="The Webee" className="h-12 " />
    </a>
    <button
    ref={buttonRef}
      onClick={handleToggleMenu}
      aria-label="Menu"
      aria-expanded={isMobileDrawerOpen}
      type="button"
      className="absolute right-5 mt-1 cursor-pointer h-10 sm:hidden"
      >
      <FontAwesomeIcon icon={faBars} />
      </button>
    <nav  ref={navRef}
    aria-label="Navbar Menu" className={`${isMobileDrawerOpen? " absolute top-full bg-white mt-1 w-11/12 mx-auto rounded-3xl" :"hidden"} pl-2 py-6 sm:block sm:py-0`}>
      <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
         {navItems.map((item,index)=>(
          <li
          key={index}><a href={item.href} onClick={()=>setIsMobileDrawerOpen(false)} className="text-black hover:text-orange-600">{item.label}</a></li>
        ))}
      </ul>
    </nav>
  </div>
</header>

  )
}

export default Header

