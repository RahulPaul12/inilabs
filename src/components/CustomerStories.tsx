import React from 'react';
import img1 from '../images/vmware.svg.png';
import img2 from '../images/Vector(2).png';
import img3 from '../images/Vector(1).png';
const CustomerStories = () => {
    return (
        <div className="container text-center">
      <div className="">
        <h1 className="font-bold text-5xl margin-auto leading-[56px]">
        Loved by the world's best teams
        </h1>
      </div>
      <div className='mt-8'>
        <a href="#" className='w-[280px] h-[48px] outline outline-1 outline-[#4262FF] text-[#4262FF] py-3 px-9 rounded-3xl'>See all customer stories → </a>
      </div>

      <div className="grid grid-cols-3 gap-7 mt-9 text-left">
        <div className="col-span-1 px-6">
          <img src={img1} alt="" />
          <p className="font-normal text-lg text-[#05003899]">
          “When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.” </p>
        </div>
        <div className="col-span-1 px-6">
          <img src={img2} alt=""/>
          <p className="font-normal text-lg text-[#05003899]">
          “Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”
          </p>
        </div>
        <div className="col-span-1 px-6">
        <img src={img3} alt=""/>
          <p className="font-normal text-lg text-[#05003899]">
          “As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”
          </p>
        </div>
      </div>
    </div>
    );
};

export default CustomerStories;