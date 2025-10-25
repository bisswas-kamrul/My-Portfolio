import React from "react";
import Container from "../../Container";
import Flex from "../../Flex";
import uomoSc from "../../assets/uomo320ss.png";

const Project = () => {
  return (
    <>
      <div className="bg-gray-900">
        <Container>
          <div className="py-20 px-10 text-center">
            <h2 className="text-3xl font-bold font-kamrul text-white mb-6">
              Some of my Projects
            </h2>
            <h6 className={"text-sm font-kamrul font-normal text-white"}>
              Dynamic animations, DOM handling,and plugin integration Modern,
              responsive, and high-converting landing page designs Fast,
              <br></br>
              scalable, and interactive React applications Complete end-to-end
              web solutions with MERN stack.
            </h6>
            <Flex className={"flex-col gap-y-10 sm:flex-row flex flex-wrap justify-around items-center sm:pt-5"}>
              <a
                href="https://uomo-e-commerce-pages-responsive-up.vercel.app/"
                target="_blank">
                <div className="bg-[#16476A] rounded-xl h-[100px] w-[270px] sm:w-[250px] md:w-[230px] text-white font-kamrul pt-10 hover:scale-110 duration-2000 transition-all">
                  Uomo E-Commerce project
                </div>
              </a>
              <a
                href="https://hanko-website-project-react-tailwin.vercel.app/"
                target="_blank">
                <div className="bg-[#16476A] rounded-xl h-[100px] w-[270px] sm:w-[250px] md:w-[230px] text-white font-kamrul pt-10 hover:scale-110 duration-2000 transition-all">
                  Hankco Project
                </div>
              </a>
              <a
                href="https://xgenious-landing-pages.vercel.app/"
                target="-blank">
                <div className="bg-[#16476A] rounded-xl h-[100px] w-[270px] sm:w-[250px] md:w-[230px] text-white font-kamrul pt-10 hover:scale-110 duration-2000 transition-all">
                  xenious Project
                </div>
              </a>
              <a
                href="https://oribi-fore-responsive-update.vercel.app/"
                target="_blank">
                <div className="bg-[#16476A] rounded-xl h-[100px] w-[270px] sm:w-[250px] md:w-[230px] text-white font-kamrul pt-10 hover:scale-110 duration-2000 transition-all">
                  Oribi E- Commerce Project
                </div>
              </a>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Project;
