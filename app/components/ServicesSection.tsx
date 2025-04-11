

export default function Services() {
    return (
      <div className="section p-10 bg-base-300 font-mono">
        <h1 className="text-4xl font-bold  mb-10 text-center text-base-content">Services</h1>
        <ul className="flex flex-col lg:flex-row justify-center items-center gap-6">
          {/* UI/UX Design */}
          <li>
            <div className="card w-72 bg-blue-500 text-white shadow-md rounded-2xl transform transition duration-300 ease-in-out hover:scale-105">
              <figure className="px-8 pt-8">
                <img
                  src="programer.svg" // ganti sesuai path kamu
                  alt="UI/UX Design"
                  className="w-20 h-20"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-white">UI/UX design</h2>
                <p className="text-sm">
                  I can using Figma, canva, photoshop, adobe illustrator for making a good design as front end dev.
                </p>
              </div>
            </div>
          </li>
  
          {/* Web Development */}
          <li>
            <div className="card w-72 bg-yellow-400 text-gray-900 shadow-md rounded-2xl transform transition duration-300 ease-in-out hover:scale-105">
              <figure className="px-8 pt-8">
                <img
                  src="web.svg" // ganti sesuai path kamu
                  alt="Web Development"
                  className="w-20 h-20"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-gray-900">Web Development</h2>
                <p className="text-sm">
                  I have learn about HTML and Css, Java Script, and i can use laravel and next js for full stack.
                </p>
              </div>
            </div>
          </li>
  
          {/* Photography */}
          <li>
            <div className="card w-72 bg-rose-400 text-white shadow-md rounded-2xl transform transition duration-300 ease-in-out hover:scale-105">
              <figure className="px-8 pt-8">
                <img
                  src="camera.svg" // ganti sesuai path kamu
                  alt="Photography"
                  className="w-20 h-20"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-white">Photography</h2>
                <p className="text-sm">
                  In Photography i don't have camera professional but i have Leica camera in my phone. 
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
  