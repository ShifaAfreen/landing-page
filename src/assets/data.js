import { faLaptopCode,faCode,faPenRuler,faUserTie,faChartLine,faHeadset,faLocationDot,faPhone,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faXTwitter,faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons";


export const ServicesData = [
  {
    id: 1,
    img: faLaptopCode,
    name: "Website Design & Development",
    description:
      "We bring your digital vision to life with bespoke website design and development. Our team creates responsive, high-performance websites that are tailored to your business needs, ensuring a strong online presence. Optimize your site for SEO so you can capture more traffic and revenue from search.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: faCode,
    name: "Mobile App Development",
    description:
      "We build innovative and high-performance mobile applications tailored to your business needs. Our expertise spans across iOS and Android platforms, ensuring seamless user experiences and robust functionality.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: faPenRuler,
    name: "UX/UI",
    description:
      "Creating user-centered designs for digital products, such as websites, mobile apps, and software interfaces enhancing user satisfaction and usability by improving the accessibility, efficiency, and aesthetics of the product.",
    aosDelay: "500",
  },

  {
    id: 4,
    img: faUserTie,
    name: "IT Consulting",
    description:
      "We offer expert IT consulting to help businesses enhance their technological infrastructure. Our services focus on providing the right solutions for your unique business needs, from process automation to system integration.",
    aosDelay: "700",
  },
  {
    id: 5,
    img: faChartLine,
    name: "Business Management Solutions",
    description:
      "We specialize in empowering businesses with efficient work and business management solutions using Quickbase and Smartsheet. Our services help businesses automate workflows, manage projects effectively, and track performance with real-time data.",
    aosDelay: "900",
  },

  {
    id: 6,
    img: faHeadset,
    name: "Marketing",
    description:
      "Our team has a strong foundation in short-term and long-term planning with a keen business and marketing sense. The Creative Momentum can help you create that next sound plan to establish or keep market and business momentum.",
    aosDelay: "1100",
  },
];

export const companyInfo = [
  
  {
    icon: faLocationDot,
    type: "address",
    text: "IT Park, 510234 Maharashtra, India",
  },
  {
    icon: faPhone,
    type: "phone-no",
    text: "123 456 7890",
  },
  {
    icon: faEnvelope,
    type: "email-id",
    text: "info@thewebee.com",
  },
];

export const socialIcons = [
  {
    icon: faFacebook,
    href: "#",
  },
  {
    icon: faXTwitter,
    href: "#",
  },
  {
    icon: faInstagram,
    href: "#",
  },
  {
    icon: faLinkedin,
    href: "#",
  },
];

export const quickLinks=[{
  label:"About Us",
  href:"/about",
},
{label:"Career",
  href:"/career",
},{
  label:"Blogs",
  href:"/blogs",
},{
  label:"Terms and Conditions",
  href:"/terms-and-conditions",
},{
  label:"Privacy Policy",
  href:"/privacy-policy",
}
];