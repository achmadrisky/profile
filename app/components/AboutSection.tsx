export default function AboutSection() {
    return (
      <>
        <div className="hero font-mono bg-gray-400 min-h-120 text-gray-500" id="about">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/images/minerva.jpg"
              alt="minerva photo"
              className="w-60 sm:w-70 lg:w-76 rounded-2xl bg-base-100 mb-6 lg:mb-0 mr-0 lg:mr-10 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            />

            <div className="bg-gray-200 p-10 rounded-2xl shadow-2xs flex flex-col lg:flex-row gap-10 items-start">
              {/* Deskripsi */}
              <div className="flex-1 order-1 lg:order-none">
                <h1 className="text-4xl font-bold text-black mb-4 ">About Me</h1>
                <p className="text-gray-500 mb-6">
                  My name is Achmad Risky a content creator and web developer from Indonesia I have rich experience in website design, photoshop, video editing, and customization. Also i am good at Photography.
                </p>

                {/* Progress Bars - akan tampil di sini saat HP */}
                <div className="space-y-4 mb-6 block lg:hidden">
                  {/* Development */}
                  <div className="w-full sm:w-56">
                    <div className="flex justify-between text-sm font-semibold mb-1">
                      <span>Development</span>
                      <span>50%</span>
                    </div>
                    <progress className="progress progress-primary w-full" value="50" max="100"></progress>
                  </div>

                  {/* UI/UX Design */}
                  <div className="w-full sm:w-56">
                    <div className="flex justify-between text-sm font-semibold mb-1">
                      <span>UI/UX Design</span>
                      <span>70%</span>
                    </div>
                    <progress className="progress progress-accent w-full" value="70" max="100"></progress>
                  </div>

                  {/* Photography */}
                  <div className="w-full sm:w-56">
                    <div className="flex justify-between text-sm font-semibold mb-1">
                      <span>Photography</span>
                      <span>60%</span>
                    </div>
                    <progress className="progress progress-warning w-full" value="60" max="100"></progress>
                  </div>
                </div>

                <button className="btn btn-error rounded-3xl w-40 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
                  <a href="https://www.linkedin.com/in/achmad-risky-1b5467325/">Linkedin</a>
                </button>
              </div>

              {/* Progress Bars - untuk desktop */}
              <div className="space-y-4 hidden lg:block">
                {/* Development */}
                <div className="w-56">
                  <div className="flex justify-between text-sm font-semibold mb-1">
                    <span>Development</span>
                    <span>50%</span>
                  </div>
                  <progress className="progress progress-primary w-full" value="50" max="100"></progress>
                </div>

                {/* UI/UX Design */}
                <div className="w-56">
                  <div className="flex justify-between text-sm font-semibold mb-1">
                    <span>UI/UX Design</span>
                    <span>70%</span>
                  </div>
                  <progress className="progress progress-accent w-full" value="70" max="100"></progress>
                </div>

                {/* Photography */}
                <div className="w-56">
                  <div className="flex justify-between text-sm font-semibold mb-1">
                    <span>Photography</span>
                    <span>60%</span>
                  </div>
                  <progress className="progress progress-warning w-full" value="60" max="100"></progress>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="content mx-auto  py-10 bg-black font-mono">
          <div className="flex flex-wrap justify-center gap-10">
            
          
            <div className="flex flex-col items-center gap-2 ">
              <div
                className="radial-progress text-primary"
                style={{ "--value": 60 } as React.CSSProperties}
                aria-valuenow={60}
                role="progressbar"
              >
                60%
              </div>
              <h1 className="text-lg font-semibold">Python</h1>
            </div>

            {/* Progress 20% */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="radial-progress text-secondary"
                style={{ "--value": 40 } as React.CSSProperties}
                aria-valuenow={40}
                role="progressbar"
              >
                40%
              </div>
              <h1 className="text-lg font-semibold">Java Script</h1>
            </div>

            {/* Progress 60% */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="radial-progress text-warning"
                style={{ "--value": 65 } as React.CSSProperties}
                aria-valuenow={65}
                role="progressbar"
              >
                65%
              </div>
              <h1 className="text-lg font-semibold">PHP</h1>
            </div>

            {/* Progress 80% */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="radial-progress text-accent"
                style={{ "--value": 80 } as React.CSSProperties}
                aria-valuenow={80}
                role="progressbar"
              >
                80%
              </div>
              <h1 className="text-lg font-semibold">Anime</h1>
            </div>

            {/* Progress 100% */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="radial-progress text-success"
                style={{ "--value": 100 } as React.CSSProperties}
                aria-valuenow={100}
                role="progressbar"
              >
                100%
              </div>
              <h1 className="text-lg font-semibold">Game</h1>
            </div>

          </div>
        </div>
 
    </>

    );
  }
  