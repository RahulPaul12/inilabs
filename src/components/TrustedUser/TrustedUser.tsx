
import img1 from "../../images/Walmart_Index_Only.svg.png";
import img2 from "../../images/cisco.svg.png";
import img3 from "../../images/Volvo_Index_Only.svg.png";
import img4 from "../../images/Vector(4).png";
import img5 from "../../images/okta.svg.png";

const TrustedUser = () => {
  return (
    <div className="mb-9 container">
      <h3 className="font-normal text-lg text-center text-[#05003899]">
        Trusted by 45M+ users
      </h3>
      <div className="logos">
        <div className="logos-slider">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <div className="img">
            <img src={img4} alt="" />
          </div>
          <img src={img5} alt="" />
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <div className="img">
            <img src={img4} alt="" />
          </div>
          <img src={img5} alt="" />
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <div className="img">
            <img src={img4} alt="" />
          </div>

          <img src={img5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TrustedUser;
