import React from "react";
import Image from "next/image";
import adminpanelReact from "../../public/assests/adminpanelReact.png";
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from "next/link";
const reactAdminPanel = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] 	 bg-black/70 z-10">
          <Image
            className="absolute z-1 opacity-0"
            layout="fill"
            objectFit="cover"
            src={adminpanelReact}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2 font-bold	text-2xl	">Admin panel React</h2>
            <h3 className="	text-xl">React js / Ant Design / React  Query</h3>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] max-auto p-2 md: grid  grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-3xl text-[#5651e5] font-bold">Project</p>
          <h2 className="uppercase text-3xl py-4 font-extrabold	">Overview</h2>
          <p>
            This app was built using React JS and is hosted on Firebase. Users
            are able to search properties based on an Address, City, or ZIP code
            to retrieve a list of active properties currently for sale. You will
            be able to view property information as well as the specific
            location of the property integrated with the Google Maps API. User
            authentication is avallable so you can signup & signin to your
            account with an email address in order to save your favorite
            properties. This is made possible with Z1lLow API.
          </p>
          <button className="px-4 py-2 mt-4 mr-8 uppercase text-bold font-2xl">Demo</button>
          <button className="px-4 py-2 mt-4 uppercase">Code</button>

        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"/>React 
              </p>
               <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"/>React Query
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"/>Ant Design
              </p>
            </div>
          </div>

        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">
          Back
          </p>
          </Link>
      </div>
    </div>
  );
};

export default reactAdminPanel;
