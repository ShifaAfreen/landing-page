import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ServicesData,companyInfo,socialIcons,quickLinks } from '../assets/data';


const Footer = () => {

  return (
    <footer className=" text-black "> 
      {/* First Row */}
      <div className="max-w-6xl border-t border-gray-700 mx-auto p-8 grid grid-cols-1  gap-8  md:grid-cols-[1.5fr_1fr_1fr]">
        {/* Column 1: Company Info */}
        <div >
        <a href="/"><img src="/logo.png" alt="Company Logo" className="h-20 mb-4" /></a>
        {
          
          companyInfo.map((item,index)=>(
            
              <p  key={index}><FontAwesomeIcon icon={item.icon} className="pr-2"/> {item.text}</p>
            
          ))
        }
        </div>
        {/* Column 2: Services */}
        <div >
          <h3 className="font-bold text-lg mb-4 ">Services</h3>
          <ul className="space-y-2 ">{
            ServicesData.map((item,index)=>(
              <li key={index}>{item.name}</li>
            ))
          }
          </ul>
        </div>
        {/* Column 3: Links & Social Icons */}
        <div >
          <h3 className="font-bold text-lg mb-4 ">Quick Links</h3>
          <ul className="space-y-2 mb-4">
          {quickLinks.map((item,index)=>( <li key={index}><a href={item.href}>{item.label}</a></li>))}
            
          </ul>
          <div className="flex space-x-4">
          {
            socialIcons.map((item,index)=>(
              <a key={index} href={item.href}> <FontAwesomeIcon icon={item.icon} className="text-2xl" /> </a>
            ))
          }
            
          </div>
        </div>
      </div>
      {/* Second Row: Copyright */}
      <div className=" text-center py-4 max-w-6xl mx-auto border-t">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All Rights Reserved. | Design By. Shifa Afreen
        </p>
      </div>
    </footer>
  );
};

export default Footer;
