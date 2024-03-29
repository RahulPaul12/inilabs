
const Collaborate = () => {
  return (
    <div className="container relative ">
      
      <div className=" lg:mx-[320px] ">

        {/* rotate text */}
        
      <div className=" lg:w-[172px]  h-6 bg-[#FFD02F] flex justify-center items-center rotate-[10deg] rounded-lg absolute lg:right-[280px] right-12 top-[-30px]"><small>YOUR IDEA STARTS HERE</small></div>
        
        {/* header section */}
        <h1 className="font-bold text-5xl margin-auto text-center leading-[56px] mt-9">
          
          Collaborate without constraints
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 mt-9">

        {/* content 1 section */}

        <div className="col-span-1 px-6">
          <h3 className="text-2xl font-bold mb-5">Free forever</h3>
          <p className="font-normal text-lg text-[#05003899]">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our{" "}
            <span className="text-[#4262FF]">pricing plans</span> for more
            features.
          </p>
        </div>

        {/* content 2 section */}

        <div className="col-span-1 px-6">
          <h3 className="text-2xl font-bold mb-5">Easy integrations</h3>
          <p className="font-normal text-lg text-[#05003899]">
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our{" "}
            <span className="text-[#4262FF]"> Marketplace</span> .
          </p>
        </div>

        {/* content 3 section */}

        <div className="col-span-1 px-6">
          <h3 className="text-2xl font-bold mb-5">Security first</h3>
          <p className="font-normal text-lg text-[#05003899]">
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our{" "}
            <span className="text-[#4262FF]">Trust Center</span> .
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-20">
        <a
          href="/"
          className="bg-[#4262FF] flex justify-center items-center rounded-[24px] w-[180px] h-[50px] text-white px-[17px] py-[22px] "
        >
          Sign up free →
        </a>
      </div>
    </div>
  );
};

export default Collaborate;
