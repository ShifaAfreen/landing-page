const Hero = () => {
  return (
    <div className="bg-primary">
      <div className=" relative overflow-hidden px-6 py-8 md:py-14 lg:px-8">
        <div className="mx-auto max-w-2xl pt-16 pb-8 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 font-medium bg-white ring-1 ring-gray-900/30 hover:ring-orange-700/40">
              Welocome to The Webee
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold text-balance  font-[Inter_Tight] tracking-tight sm:text-7xl capitalize">
              Delivering excellence, exceeding customer expectations.
            </h1>
            <p className="mt-8 text-lg font-normal text-gray-800 text-pretty sm:text-xl/8 font-[Inter_Tight]">
              We are a customer-focused organization dedicated to providing
              outstanding service and ensuring client satisfaction at every
              level.
            </p>
            <div className="mt-10 items-center justify-center ">
              <a
                href="/contact-us"
                className="rounded-full hover:border-4 hover:border-double hover:border-white bg-orange-600 px-4.5 py-2.5 text-medium font-semibold text-white "
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
