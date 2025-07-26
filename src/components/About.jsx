import { motion } from "framer-motion";
import CountAnimation from "./CountAnimation";

const About = () => {
  const para =
    "Empowering businesses to thrive in the digital age. Our dedicated team delivers tailored services from dynamic websites to optimized workflows to streamline operations, enhance efficiency, and achieve your unique goals. We pride ourselves on a customer-focused approach, ensuring innovative, high-quality results that drive your success.";

  const stats = [
    { label: "Years in Business", value: 11 },
    { label: "Happy Customers", value: 500 },
    { label: "Completed Cases", value: 550 },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-black">
      <div className="relative overflow-hidden px-6 lg:px-8">
        <div className="mx-auto max-w-7xl py-24 sm:py-32 lg:px-36">
          <p className="text-3xl font-semibold text-white text-pretty text-left sm:text-4xl/tight font-[Inter_Tight]">
            {para}
          </p>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-5xl px-6 pb-24 lg:px-8"
      >
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`mx-auto flex flex-col gap-y-4 ${
                i === 1
                  ? "py-8 lg:py-0 border-y-2 w-60 lg:w-full lg:mx-0 border-gray-300 lg:border-x-2 lg:border-y-0"
                  : "max-w-xs"
              }`}
            >
              <dt className="text-lg/7 text-gray-100">{stat.label}</dt>
              <CountAnimation
                number={stat.value}
                suffix=" +"
                className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl"
              />
            </motion.div>
          ))}
        </dl>
      </motion.div>
    </div>
  );
};

export default About;
