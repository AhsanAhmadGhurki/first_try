function Body() {
  return (
    <>
      <div className="bg-slate-900 text-white min-h-screen flex flex-col">
        <div className="w-full h-auto">
          <img
            src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg"
            alt="Web Banner"
            className="w-full hidden md:block"
          />
          <img
            src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg"
            alt="Mobile Banner"
            className="w-full md:hidden"
          />
        </div>

        {/* image ends here */}

        {/* Our Students section starts here */}
        <div>
          {/* heading */}
          <div className="h-auto w-full flex flex-col items-center text-center p-10">
            <div className="w-full h-auto flex flex-col items-center">
              <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
                “Pure Hardwork, No Shortcuts !” drgrgr
              </p>
              <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
            </div>
          </div>

          {/* section starts here */}

          <div className="w-full h-auto flex justify-evenly px-4 md:px-20">
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <img
                className="w-44 h-44 rounded-full"
                src="https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Books Icon"
              />
              <p className="text-3xl font-bold text-white">600+</p>
              <p className="text-3xl font-bold text-gray-500">
                Different Courses
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <img
                className="w-44 h-44 rounded-full"
                src="https://images.pexels.com/photos/1546251/pexels-photo-1546251.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Books Icon"
              />
              <p className="text-3xl font-bold text-white">700,000+</p>
              <p className="text-3xl font-bold text-gray-500">
                Students Enrolled
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <img
                className="w-44 h-44 rounded-full"
                src="https://images.pexels.com/photos/3063362/pexels-photo-3063362.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Books Icon"
              />
              <p className="text-3xl font-bold text-white">10,000+</p>
              <p className="text-3xl font-bold text-gray-500">
                $uccessful Transition
              </p>
            </div>
          </div>
        </div>



        {/* Our products section starts here */}

        <div>
          {/* heading */}
          <div className="h-auto w-full flex flex-col items-center text-center p-10">
            <div className="w-full h-auto flex flex-col items-center">
              <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
                Our Products
              </p>
              <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
            </div>
          </div>

          {/* section starts here */}

          <div className="w-full h-auto flex flex-wrap justify-evenly px-4 md:px-20">
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <img
                className="w-33 h-33 rounded-full"
                src="https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Books Icon"
              />
              <p className="text-3xl font-bold text-white">JobPortal</p>
              <p className="w-48 font-medium text-gray-500">
                Use exceptional templates for a stand-out resume. minus the sign
                up process.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <img
                className="w-33 h-33 rounded-full"
                src="https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Books Icon"
              />
              <p className="text-3xl font-bold text-white">JobPortal</p>
              <p className="w-48 font-medium text-gray-500">
                Use exceptional templates for a stand-out resume. minus the sign
                up process.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <img
                className="w-33 h-33 rounded-full"
                src="https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Books Icon"
              />
              <p className="text-3xl font-bold text-white">JobPortal</p>
              <p className="w-48 font-medium text-gray-500">
                Use exceptional templates for a stand-out resume. minus the sign
                up process.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <img
                className="w-33 h-33 rounded-full"
                src="https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Books Icon"
              />
              <p className="text-3xl font-bold text-white">JobPortal</p>
              <p className="w-48 font-medium text-gray-500">
                Use exceptional templates for a stand-out resume. minus the sign
                up process.
              </p>
            </div>
          </div>
        </div>


        
      </div>
    </>
  );
}

export default Body;
