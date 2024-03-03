import React from 'react';
import img from '../images/hybridwork.png.png'
const WorkTogether = () => {
    return (
        <div className='container'>
            <div className='flex lg:items-center lg:flex-row flex-col-reverse gap-10 px-5'>
                
                {/* text section */}
                
                   <div className=' max-w-full lg:w-[550px] lg:pe-[70px]'>
                     <h1 className="font-bold text-5xl margin-auto lg:text-left text-center leading-[56px] mb-5">Work together, wherever you work</h1>
                     <p className="font-normal text-lg text-[#05003899]">
                     In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                     <div className="font-normal text-lg mt-9 text-[#4262FF]"><a href="#" target="_blank"> <span className='underline'>Learn more</span></a></div>
                   </div>

{/* 
                  Image section */}

                   <div className='max-w-full h-auto lg:w-[550px] sm:m-auto'>
                     <img src={img} alt=""/>
                   </div>

            </div>
        </div>
    );
};

export default WorkTogether;