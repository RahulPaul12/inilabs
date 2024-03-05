
import image from "../images/headerimage-without-text.png.png";
import logo10 from '../images/Vector(10).png'
import logo11 from '../images/Vector(11).png'
import logo12 from '../images/Vector(12).png'
import sign from '../images/Vector(5).png'
import sign2 from '../images/svg(4).png'
const Hero = () => {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-7 grid-cols-1 lg:px-0 px-6 gap-[60px] mt-9 ">

        {/* content section */}

        <div className="lg:col-span-3 col-span-1">
          <h1 className="font-bold text-5xl leading-[56px]">Take ideas from better to best</h1>
          <p className="font-normal text-lg text-[#050038B8] mt-5">
            Miro is your team's visual platform to connect, collaborate, and
            create — together.
          </p>
          <div className="">
            <input
              className="w-full h-auto lg:h-[48px] rounded-[32px] border-[1px] ps-6 mt-10 "
              type="email"
              name=""
              id=""
              placeholder="Enter your work email"
            />
            <button
              type="submit"
              className="w-full h-auto lg:h-[48px] rounded-[32px] bg-[#4262FF] my-2 text-white"
            >
              Sign up free →
            </button>
          </div>

          <small className="text-sm font-normal text-[#05003866]">Collaborate with your team within minutes</small>

          <div className="w-full lg:w-[360px] h-auto lg:h-[60px] bg-[#F5F5F7] mt-9 p-3 rounded-lg flex justify-between items-center">
            
            {/* star icon section */}
                 <div className="flex flex-col">
                    <div className="flex">
                      <img src={sign} alt=""  />
                      <img src={sign} alt=""  />
                      <img src={sign} alt=""  />
                      <img src={sign} alt=""  />                      
                      <img src={sign2} alt=""  />                      

                    </div>
                    <small className="font-normal text-xs">Based on 5149+ reviews:</small>
                 </div>

                 {/* logo section */}
                 <div className="flex items-center justify-center">
                  <img  src={logo10} alt=""/>
                  <img src={logo11} alt=""/>
                  <img src={logo12} alt=""/>
                 </div>
            </div>
          
        </div>

        {/* image section */}
        
        <div className="lg:col-span-4 col-span-1 w-full lg:w-[640px] h-auto lg:h-[463px] mb-20">
          <img className="" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
