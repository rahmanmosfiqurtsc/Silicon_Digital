import ImggA from "../../assets/Atmos/image.jpg";
import ImggA1 from "../../assets/Atmos/arrow.png";
import ImggA11 from "../../assets/Atmos/logo.png";
import ImggA12 from "../../assets/Atmos/logo-1.png";
import ImggA13 from "../../assets/Atmos/logo-2.png";
import ImggA14 from "../../assets/Atmos/logo-3.png";
import Container from "../../components/common/Container";

const Atmosphere = () => {
  return (
    <div className="pt-28">
      <Container>
        <div>
          <div className="flex pb-12 gap-7">
            <h2 className="font-extrabold text-[40px] leading[130%]">
              Our Creative Atmosphere
            </h2>
            <img src={ImggA1} alt="" className="w-[84px] h-[76px]"></img>
          </div>
          <div className="w-324 justify-center flex items-center">
            <img src={ImggA} alt=""></img>
          </div>
          <div className="flex gap-[134px] pt-[96px] pb-[112px] justify-center items-center ">
            <div>
              <h3 className="font-extrabold text-[32px] leading[130%] w-[410px]">Award-winning designs featured by</h3>
            </div>
            <div className="flex gap-[56px] max-w-[448px]">
              <img src={ImggA11} alt="" className="w-[140px]"></img>
              <img src={ImggA12} alt="" className="w-[140px]"></img>
              <img src={ImggA13} alt="" className="w-[140px]"></img>
              <img src={ImggA14} alt="" className="w-[140px]"></img>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Atmosphere;
