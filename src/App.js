import React from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const App = () => {
  const { width, height } = useWindowSize()

  return (
    <>
      <Confetti
      width={width}
      height={height}
    />
      <header className="bg-white relative top-0 text-white">
        <img src="ring.jpg" className="w-full h-screen object-cover" alt="" />
        <nav className="flex justify-around items-center absolute top-0 w-full mx-auto">
          <div>
            <img src="log.png" className="w-[120px]" alt="" />
          </div>
          <div>
            <ul className="flex items-center gap-[4vw] font-bold text-md md:text-xl">
              <li>
                <a className="hover:text-pink-500" href="">
                  HOME
                </a>
              </li>
              <li>
                <a className="hover:text-white " href="">
                  COUPLE
                </a>
              </li>
              <li>
                <a className="hover:text-white " href="">
                  STORY
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="">
                  RSVP
                </a>
              </li>
            </ul>
          </div>
        </nav>{" "}
        <div className="absolute flex flex-col justify-center items-center inset-0">
          <p className="text-3xl md:text-5xl lg:text-7xl font-bold">
            CYNTHIAN Hooks AYOMIBO
          </p>
          <p className="text-2xl">12-05-2024</p>
          <i className="text-2xl md:text-4xl">#CAaffairs</i>
        </div>
      </header>
      <div className="p-5 md:p-10">
        <div className="grid grid-cols-3 grid-rows-5 gap-4">
          <div>
            {" "}
            <img src="asoebi.jpg" alt="" className="row-span-2 h-full w-full object-cover" />
          </div>
          <div className="row-span-2">
            {" "}
            <img src="asoebi1.jpeg" alt="" className="row-span-2 h-full w-full object-cover" />
          </div>
          <div>
            {" "}
            <img src="asoebi2.jpeg" alt="" className="row-span-2 h-full w-full object-cover" />
          </div>
          <div className="col-start-2 row-start-3">
            {" "}
            <img src="asoebi3.jpg" alt="" className="row-span-2 h-full w-full object-cover" />
          </div>
          <div className="row-span-2 col-start-1 row-start-2">
            {" "}
            <img src="asoebi4.jpg" alt="" className="row-span-2 h-full w-full object-cover" />
          </div>
          <div className="row-span-2 col-start-3 row-start-2">
            {" "}
            <img src="asoebi11.jpg" alt="" className="row-span-2 h-full w-full object-cover" />
          </div>
          <div className="col-span-2 row-start-4">
            {" "}
            <img src="asoebi6.png" alt="" className="row-span-2 h-full w-full object-cover" />
          </div>
          <div className="col-start-3 row-start-4">
            {" "}
            <img src="asoebi7.png" alt="" className="row-span-2 h-full w-full object-cover" />
          </div>
          <div className="row-start-5">
            {" "}
            <img src="asoebi8.jpeg" alt="" className="row-span-2 h-full w-full object-cover" />
          </div>
          <div className="col-span-2 row-start-5">
            {" "}
            <img src="asoebi9.jpg" alt="" className="row-span-2 h-full w-full object-cover" />
          </div>
          
          
        </div>
          <footer className="bg-gray-500 text-white">
            <div className="md:flex md:justify-center md:items-center sm:px-12 px-4 bg-gray-900 py-7">
              <p> &copy; CraftsBySisi. All Rights Reserved</p>
            </div>
          </footer>
        
      </div>
    </>
  );
};

export default App;

