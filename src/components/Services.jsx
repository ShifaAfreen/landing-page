import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ServicesData } from "../assets/data";
import TiltCard from "./TiltCard"; 

const Services = () => {
 

  return (
    <div className="bg-primary py-20">
      <div className="bg-white rounded-3xl max-w-11/12 mx-auto overflow-hidden">
        <div className="max-w-6xl mx-auto justify-center py-16">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 font-medium ring-1 ring-orange-600/70">
                Services
              </div>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl font-[Inter_Tight]">
              Explore Our Expertise
            </h2>
            <p className="my-4 text-medium font-normal text-gray-800 text-center text-pretty sm:text-xl/8">
              Leveraging the latest technologies to create seamless and efficient
              user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 px-10">
            {ServicesData.map((item, index) => (
              <TiltCard
                key={item.id}
                className={`items-center rounded-3xl p-6 bg-white border border-gray-300 hover:bg-primary transition-all duration-100 ${
                  index === 0 || index === ServicesData.length - 1
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <div className="h-10 w-10 rounded-full bg-white border border-orange-300 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={item.img}
                    className="text-xl text-orange-600"
                    aria-label={item.name}
                  />
                </div>
                <h3 className="font-bold text-xl py-2 text-gray-900">
                  {item.name}
                </h3>
                <p className="text-gray-800 text-base font-normal text-pretty tracking-normal py-2 font-[Inter_Tight]">
                  {item.description}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
