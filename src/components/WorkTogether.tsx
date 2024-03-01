import React from 'react';
import img from '../images/hybridwork.png.png'
const WorkTogether = () => {
    return (
        <div className='container'>
            <div className='flex items-center gap-10 '>
                
                   <div className='w-[550px] pe-[70px]'>
                     <h1 className="font-bold text-5xl margin-auto text-left leading-[56px] mb-5">Work together, wherever you work</h1>
                     <p className="font-normal text-lg text-[#05003899]">
                     In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                     <div className="font-normal text-lg mt-9 text-[#4262FF]"><a href="#" target="_blank"> <span className='underline'>Learn more</span></a></div>
                   </div>

                   <div className='w-[550px]'>
                     <img src={img} alt=""/>
                   </div>

            </div>
        </div>
    );
};

export default WorkTogether;