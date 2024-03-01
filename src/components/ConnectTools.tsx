import React from 'react';
import img from '../images/M3_integrations_all_integrations.png.png'
const ConnectTools = () => {
    return (
        <div className='container'>
            <div className='flex items-center gap-10 '>
                <div className='w-[550px]'>
                  <img src={img} alt=""/>
                </div>
                <div className='w-[550px] ps-[70px]'>
                  <h1 className="font-bold text-5xl margin-auto text-left leading-[56px] mb-5">Connect <br /> your tools, <br /> close your tabs</h1>
                  <p className="font-normal text-lg text-[#05003899]">
                  Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
                  <div className="font-normal text-lg mt-9 text-[#4262FF]"><a href="#" target="_blank"> <span className='underline'>Learn more </span>→</a></div>
                </div>

                

         </div>
        </div>
    );
};

export default ConnectTools;