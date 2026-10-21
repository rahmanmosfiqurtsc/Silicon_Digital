import React from "react";
import Container from "../../components/common/Container";
import Award from "../../components/other/Award";
import Imgg1 from "../../assets/Award/Vector.png"
import Imgg2 from "../../assets/Award/Vector-1.png"
import Imgg3 from "../../assets/Award/Vector-2.png"
import Imgg4 from "../../assets/Award/divider.png"

const Awardsec = () => {
  return (
    <div className="pt-25.25 pb-32.75">
      <Container>
        <div className="grid grid-cols-5 w-324 justify-between">
          <Award imgg={Imgg1} text="Creative Solutions" para='Sed morbi nulla pulvinar lectus tempor vel euismod accumsan'> </Award>
          <div className="mx-auto">
          <img src={Imgg4}></img>
          </div>
          <Award imgg={Imgg2} text="Award Winning" para='Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet.'> </Award>
          <img src={Imgg4} className="mx-auto"/>
          <Award imgg={Imgg3} text="Team of Professionals" para='Nam venenatis urna aenean quis feugiat et senectus turpis.'> </Award>
        </div>
      </Container>
    </div>
  );
};

export default Awardsec;
