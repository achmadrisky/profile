import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import Experience from "./components/ExperienceSection";
import ThemeToggle from './components/ThemeToggle';


export default function Home() {
  return (
    <>
      <div id="home" className="navbar bg-base-300 shadow-md px-6 top-0 z-50 font-mono sticky">
        {/* Start: Logo & Mobile Menu */}
        <div className="navbar-start text-base-content">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
            >
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#experience">Experience</a></li>
            </ul>
          </div>
          <a className="text-xl font-bold text-base-content">
            MyPersonal <span className="text-pink-500">Website</span>
          </a>
        </div>

        {/* Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-600 font-medium">
            <li><a href="#home" className="hover:text-pink-500">Home</a></li>
            <li><a href="#about" className="hover:text-pink-500">About Me</a></li>
            <li><a href="#experience" className="hover:text-pink-500">Experience</a></li>
          </ul>
        </div>

        {/* End: CTA Button */}
        <div className="navbar-end mt-3">
          <ThemeToggle/>
        </div>
      </div>

     
      <div className="hero bg-base-200 min-h-screen font-mono text-base-content">
        <div className="hero-content flex flex-col items-center text-center">
          <div className="avatar mb-7">
            <div className="w-60 rounded-full ">
              <img src="/images/foto.png" alt="photo" />
            </div>
          </div>

          <div>
            <h1 className="font-bold text-4xl">Achmad Risky</h1>
            <p className="py-2 max-w-xl text-yellow-400">
              Find Me On Social Media
            </p>
            
            <div>
              <ul className="menu menu-horizontal bg-base-200 rounded-box ps-2 ">
                <li>
                  <a className="tooltip" data-tip="instagram" href="https://www.instagram.com/achriskyy/">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-10 h-10 p-1 hover:scale-120 transition duration-300 hover:text-orange-400"
                    fill="currentColor" 
                    viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="tooltip" data-tip="Youtube" href="https://www.youtube.com/@achmadrisky/">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 p-1 hover:scale-120 transition duration-300 hover:text-red-400 " viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                  </svg>
                  </a>
                </li>
                <li>
                  <a className="tooltip" data-tip="Tik-Tok" href="https://www.tiktok.com/@achrsky">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 p-1 hover:scale-120 transition duration-300 hover:text-gray-400" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                  </svg>
                  </a>
                </li>
                <li>
                  <a className="tooltip" data-tip="X" href="https://x.com/achriskyy">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 p-1 hover:scale-120 transition duration-300 hover:text-blue-400" fill="currentColor"  viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="tooltip" data-tip="Pinterest" href="https://id.pinterest.com/achmadrisky/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 p-1 hover:scale-120 transition duration-300 hover:text-red-600"  viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <button className="btn btn-outline btn-error rounded-4xl p-7 mt-10 transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-xl"><a href="#about">explore</a></button>
          </div>

        </div>
      </div>
      
      <AboutSection/>
      <ServicesSection/>
      <Experience/>

      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 ">
        <aside className="grid-flow-col items-center">
          <img className="w-5 rounded-full" src="/images/minerva.jpg" alt="" />
          <p>Achmad Risky © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
                
    </>

   
  );
}
