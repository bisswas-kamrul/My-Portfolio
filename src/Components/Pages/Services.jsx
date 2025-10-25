import React from "react";
import Container from "../../Container";
import Images from "../../Images";
import UomoMockup from "../../assets/Uomo E-commarce screenshort.png";
import xenious from "../../assets/xenious.png";
import HankcoMockup from "../../assets/Hankco  copy.jpg";
import OribiUpdet from "../../assets/Oribi ScrinShort.png"
const Services = () => {
  return (
    <>
      <div className="bg-gray-900">
        <Container>
          <div className="py-20 px-10 text-center">
            <h2 className="text-3xl font-bold font-kamrul text-white mb-6">
             The service I provide for my clients
            </h2>
            <h6 className={"text-sm font-kamrul font-normal text-white"}>
              I build responsive, user-friendly, and scalable web applications with a focus on performance, interactivity, and great UI/UX. <br></br>I can also convert Figma designs into fully functional React.js applications, bridging design and development seamlessly.
            </h6>
            <div className="flex-col gap-y-10 sm:flex-row flex flex-wrap sm:justify-between sm:items-center sm:mt-7">
              <div className="h-[330px] w-[250px] md:h-[300px] md:w-[500px] bg-[#16476A] shadow-md rounded-2xl hover:scale-110 duration-1000 transition-all">
                <Images
                  ImgSrc={UomoMockup}
                  AltSrc={"UomoMockup"}
                  className={"h-[250px] md:w-full"}
                />
                <h4 className="text-3xl font-bold text-center pt-2 text-white h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">
                 Uomo E-Commerce Pages
                </h4>
              </div>
              <div className="h-[330px] md:h-[300px] w-[250px] md:w-[500px] bg-[#16476A] shadow-md rounded-2xl hover:scale-110 duration-1000 transition-all">
                <Images
                  ImgSrc={HankcoMockup}
                  AltSrc={"HankcoMockup"}
                  className={"h-[250px] md:w-full"}
                />
                <h4 className="text-3xl font-bold text-center pt-2 text-white h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">
                  Hankco Landing Pages
                </h4>
              </div>
              <div className="h-[330px] md:h-[300px] w-[250px] md:w-[500px] bg-[#16476A] shadow-md rounded-2xl hover:scale-110 duration-1000 transition-all mt-10">
                <Images
                  ImgSrc={xenious}
                  AltSrc={"xenious"}
                  className={"h-[250px] md:w-full"}
                />
                <h4 className="text-3xl font-bold text-center pt-2 text-white h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">
                  Xenious Landing Pages
                </h4>
              </div>
              <div className="h-[330px] w-[250px] md:h-[300px] md:w-[500px] bg-[#16476A] shadow-md rounded-2xl hover:scale-110 duration-1000 transition-all mt-10">
                <Images ImgSrc={OribiUpdet} AltSrc={"OribiUpdet"} className={"h-[250px] md:w-full"}/>
                <h4 className="text-2xl md:text-3xl font-bold text-center pt-2 text-white h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">
                 Oribi E-Commerce Pages 
                </h4>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Services;
