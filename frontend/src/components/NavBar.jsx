import navLogo from "../assets/nav-logo.png";
const NavBar = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="flex justify-between w-full items-center max-w-4xl max-auto px-4">
        <img
          src={navLogo}
          alt="EduPlan Logo"
          className="mt-5 w-48 object-contain"
        />
        <div className="flex gap-4 ml-auto">
          <button
            onClick={() =>
              window.open("https://www.linkedin.com/in/mark-dharyl/")
            }
            className="mt-3 rounded-full text-white px-4 py-2 bg-[#0077B5] shadow-md hover:ring-[#0077B5] hover:ring-2 transition-all duration-300 active:scale-95"
          >
            LinkedIn
          </button>
          <button
            onClick={() => window.open("https://github.com/markdhareal")}
            className="mt-3 rounded-full text-white px-4 py-2 bg-[#211F1F] shadow-md hover:ring-gray-400 hover:ring-2 transition-all duration-300 active:scale-95"
          >
            GitHub
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
