import React from 'react';
import img from '../images/f35490d1795865569180d6af1ca0ada1.png'
const WorkWay = () => {
    return (
    <div className='container relative '>
            <img src={img} alt=""/>
        <div className='absolute text-center top-[34%] right-24'>
            <h3 className="text-2xl font-bold mb-3">The Ways We Work</h3>
            <p className="font-normal text-lg mb-2">
            How has our relationship with work changed?
            </p>
            <div className=" flex justify-center">
               <a href="/"className="bg-[#4262FF] flex justify-center items-center rounded-[24px] w-[160px] h-[40px] text-white px-[12px] py-[26px] ">View the report →</a>
            </div>
        </div>
           
    </div>
    );
};

export default WorkWay;