const HeroSection = () => {
  return (
    <>
      <section className="hero-section text-center my-40 flex flex-col">
        <h1 className="text-4xl font-extrabold text-black sm:text-6xl">
          Lesson Planner
        </h1>
        <br />
        <h3 className="text-2xl font-extrabold sm:text-6xl">
          <span className="bg-gradient-to-r from-pink-500 via-[#0077B5] to-purple-800 bg-clip-text text-transparent">
            Plan your Lesson in Seconds
          </span>
        </h3>

        <h2 className="mt-5 sm:text-xl text-gray-600 mx-auto max-w-3xl">
          Plann-D is an innovative tool designed to help teachers create
          well-organized, effective lesson plans in just seconds. With its
          user-friendly interface, Plann-D streamlines the planning process,
          allowing educators to focus more on teaching and less on preparation.
        </h2>

        <button className="mt-10 px-8 py-3 border rounded-full bg-black text-white text-xl font-semibold border-black transition-all duration-200 max-w-[250px] mx-auto shadow-md hover:ring-gray-400 hover:ring-4 active:scale-95 active:bg-gray-700">
          Get Started
        </button>
      </section>
    </>
  );
};

export default HeroSection;
