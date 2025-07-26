
const ContactUs = () => {
  return (
    <section className="bg-black">
      <div className="max-w-3xl mx-auto py-24 px-8 sm:px-16 sm:py-32 ">
        <div className="text-center">
            <h2 className="text-4xl font-semibold text-balance text-white  font-[Inter_Tight] tracking-tight sm:text-6xl">
          Request a call back
        </h2>
        <p className="my-8 text-lg font-normal text-gray-200 text-pretty sm:text-xl/8">
        Have questions or need expert guidance? We're here to help! Feel free to reach out, and let's connect to create something amazing together!
        </p>
        </div>
        <form action="#" className="space-y-8 border bg-primary rounded-xl p-10 ">
          <div>
            <label
              htmlFor="fname"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your full name
            </label>
            <input
              type="text"
              id="fname"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-600 sm:w-fit hover:bg-orange-500 focus:ring-2 focus:outline-none focus:ring-orange-300 "
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
