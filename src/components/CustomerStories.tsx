import React from 'react';
import img1 from '../images/vmware.svg.png';
import img2 from '../images/Vector(2).png';
import img3 from '../images/Vector(1).png';
import profile1 from '../images/Mask_group-1.png.png'
import profile2 from '../images/Jane-Docusign-Testimonials_2x.png.png'
import profile3 from '../images/Mask_group.png.png'
const CustomerStories = () => {
    return (
        <div className="container text-center relative">
      <div className="">
        <h1 className="font-bold text-5xl margin-auto leading-[56px]">
        Loved by the world's best teams
        </h1>
      </div>
      <div className='mt-8'>
        <button  className='w-[280px] h-[48px] outline outline-1 outline-[#4262FF] text-[#4262FF] py-3 px-9 rounded-3xl'>See all customer stories → </button>
      </div>   
<div className="grid-cols-1 sm:grid md:grid-cols-3 mt-14 text-[#05003899]">
  <div className="px-9 mt-6 flex flex-col rounded-lg  text-left w-[360px] h-[460px]">
      <img className='w-full h-auto' src={img1} alt="" />
    <div className="mb-4 py-7 pe-7 w-72">
      <p className="font-normal text-lg">“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”</p>
    </div>
    <div className="mt-auto flex items-center pb-9">
        <img src={profile1} alt=""/>
        <div className='mx-4 flex flex-col font-normal text-sm'>
          <small>Roxanne Mustafa</small>
          <small>Design Team Lead at VMware</small>
        </div>
      
    </div>
  </div>
  <div className="px-9 mt-6 flex flex-col rounded-lg  lg:text-left sm:text-center w-[360px] h-[460px]">
      <img className='max-w-[190px] w-full h-auto' src={img2} alt="" />
    <div className="mb-4 py-7 pe-7 w-72">
      <p className="font-normal text-lg">“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”</p>
    </div>
    <div className="mt-auto flex items-center pb-9">
        <img src={profile2} alt=""/>
        <div className='mx-4 flex flex-col font-normal text-sm'>
          <small>Roxanne Mustafa</small>
          <small>Design Team Lead at VMware</small>
        </div>
      
    </div>
  </div>
  <div className="px-9 mt-6 flex flex-col rounded-lg  text-left w-[360px] h-[460px]">
      <img className='max-w-[90px] w-full h-auto' src={img3} alt="" />
    <div className="mb-4 py-7 pe-7 w-72">
      <p className="font-normal text-lg">“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”</p>
    </div>
    <div className="mt-auto flex items-center pb-9">
        <img  src={profile3} alt=""/>
        <div className='mx-4 flex flex-col font-normal text-sm'>
          <small>Roxanne Mustafa</small>
          <small>Design Team Lead at VMware</small>
        </div>
      
    </div>
  </div>
 
</div>
    </div>
    );
};

export default CustomerStories;