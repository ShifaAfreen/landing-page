
const ErrorPage = () => {
  return (
    <div className="max-w-2xl h-screen mx-auto p-24 text-center flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-8xl font-extrabold text-orange-600 font-[Inter_Tight]">404</h1>
        <h6 className="text-gray-800 sm:text-2xl text-lg font-bold font-[Inter_Tight] mt-4">Oh ! Page not found</h6>
        <a href="/" className="block mt-8 text-orange-600">
        ← Back to Home Page
      </a>
    </div>
  )
}

export default ErrorPage