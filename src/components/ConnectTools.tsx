
import img from '../images/M3_integrations_all_integrations.png.png'
const ConnectTools = () => {
    return (
        <div className='container'>
            <div className='flex lg:items-center lg:flex-row flex-col gap-10 px-5'>

              {/* image section */}
                <div className='max-w-full h-auto lg:w-[550px]'>
                  <img src={img} alt=""/>
                </div>

                {/* text section */}
                <div className='w-full lg:w-[550px] lg:ps-[70px] '>
                  <h1 className="font-bold text-5xl margin-auto lg:text-left text-center leading-[56px] mb-5">Connect <br /> your tools, <br /> close your tabs</h1>
                  <p className="font-normal text-lg text-[#05003899]">
                  Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
                  <div className="font-normal text-lg mt-9 text-[#4262FF]"><a href="#" target="_blank"> <span className='underline'>Learn more </span>→</a></div>
                </div>

                

         </div>
        </div>
    );
};

export default ConnectTools;