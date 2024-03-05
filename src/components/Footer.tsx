
import logo1 from "../images/svg(1).png";
import logo2 from "../images/svg(2).png";
import logo3 from "../images/svg(3).png";
const Footer = () => {
  return (
    <div className="bg-[#02033B] lg:py-24 lg:px-48 py-10 px-10 text-white ">
      <div className=" gap-[60px]  lg:container ">
        <div className="flex justify-between flex-col-reverse lg:flex-row items-center">

            {/* scan detect remove section */}

           <div className="col-span-1 lg:w-80 w-full">
          <h3 className="text-[23px] font-extrabold mb-5">
            Scan. Detect. Remove.
          </h3>
          <p className="font-normal text-lg text-[#05003899]">
            <div className="flex lg:justify-start items-center justify-center">
              <img src={logo1} alt="" className="me-7 w-9 h-9" />
              <img src={logo2} alt="" className="me-7 w-9 h-9" />
              <img src={logo3} alt="" className="me-5 w-9 h-9" />
            </div>
            <div className="text-white lg:p-0 px-10 mt-9 text-xs font-normal">
              <small className="me-5 underline"><a href="#">Privacy Policy</a></small>
              <small className="underline"><a href="#">Terms of Service</a></small> <br />
              <small className=" mt-9">Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</small>
              <small className="mt-4 block">Designed & developed by  <span className="underline">Bigger Picture</span></small>
            </div>
          </p>
        </div>

        {/* Miro section */}

        <div className="col-span-1 lg:w-[158px] w-full">
          <h3 className="text-[35px] font-bold pb-3 border-b-2 border-solid-white">Miro.</h3>
          <ul className="dash mt-9">
            <li className=" text-[#FFC247] font-bold">iPhone</li>
            <li className=" text-[#FFC247] font-bold">Android</li>
            <li className=" text-[#FFC247] font-bold">Help</li>
            <li className=" text-[#FFC247] font-bold">About</li>
            <li className=" text-[#FFC247] font-bold">Insights</li>
          </ul>
        </div>

        {/* Subscribe section */}

        <div className="col-span-1 bg-[#FFC247] lg:w-[435px] w-full lg:h-[230px] h-auto rounded-[42px] p-9">
            <h3 className="text-[23px] font-extrabold text-[#02033B]">Sign up to our newsletter</h3>
            <p className="font-normal text-sm text-[#02033B] mt-5">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
            <div className="relative my-4 lg:w-[364px] w-full flex flex-wrap items-stretch ">
              <input type="text" className="lg:rounded-l-[21px] relative m-0 block lg:w-[250px] w-full min-w-0 flex-auto px-3 py-[0.25rem] h-8  font-normal  outline-none" placeholder="Email address"/>

             <span className="lg:rounded-r-[21px]   relative m-0 block lg:w-[100px] w-full min-w-0 flex-auto px-3 py-[0.25rem] h-8  font-extrabold text-[15px] bg-[#02033B]  outline-none">Submit</span>
        </div>
         
        </div> 
        </div>
       {/* Copyright section */}
       
       <div className="w-full lg:w-[50%] mt-9 text-center">
        <small className="text-xs font-normal ">Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</small>
       </div>
        
        
      </div>
      
      
    </div>
  );
};

export default Footer;
