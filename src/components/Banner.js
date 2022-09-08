import React from 'react';
import { RiH3 } from 'react-icons/ri';

import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const style= {
  color: "white",
  border :"2px solid black",
  padding: "10mm", 
  margin:"10mm"
}
const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24 '>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h3 className='text-4xl lg:text-[35px] font-semibold leading-none mb-6'>
            <span className='text-violet-700 mb-10 mr-34'></span>Search Property To Rent
          </h3>
        
        </div>
        <div className="flex items-center mr-20  mb-10" >
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search With Search Bar..."
                />
                <button className="px-4 text-white bg-purple-600 rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>

      </div>
      <Search />
    </section>
  );
};

export default Banner;
