import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import flower from "../assets/flower.jpg";
import light from "../assets/light.jpg";
import rose from "../assets/rose.jpg";
import sun from "../assets/sun.jpg";
import woe from "../assets/woe.jpg";
import tiger from "../assets/tiger.jpg";
import fl from "../assets/fl.jpg";
import heroTwo from "../assets/heroTwo.png";
import { IoIosArrowForward } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const AnimationPage = () => {
  useEffect(() => {
    const flowerImage = document.querySelector(
      ".new-img-box img:nth-of-type(1)"
    );
    const roseImage = document.querySelector(".new-img-box img:nth-of-type(2)");
    const textOne = document.querySelector(".text-one");
    const textTwo = document.querySelector(".text-two");
    const newContainer = document.querySelector(".newContainer");
    const leftBox = document.querySelector(".left-box");
    const rightBox = document.querySelector(".right-box");

    gsap.set(leftBox, { opacity: 0 });
    gsap.set(rightBox, { opacity: 0 });

    const mainScrollTrigger = ScrollTrigger.create({
      trigger: ".newContainer",
      start: "top-=50 top",
      end: "bottom top",
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;

        // Image animation
        gsap.to(flowerImage, { opacity: 1 - progress });
        gsap.to(roseImage, { opacity: progress });

        // Text animation
        gsap.to(textOne, { opacity: 1 - progress, y: -progress * 100 });
        gsap.to(textTwo, { opacity: progress, y: -progress * 20 });

        // Box animations
        gsap.to(leftBox, {
          y: progress * 200 + "px",
          opacity: progress > 0.1 ? 1 : 0, 
          ease: "none",
        });
        gsap.to(rightBox, {
          y: -progress * 350 + "px",
          opacity: progress > 0.1 ? 1 : 0, 
          ease: "none",
        });
      },
    });

    const footerTrigger = ScrollTrigger.create({
      trigger: ".footer2",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(newContainer, { y: -progress * 100 + "%" });
      },
    });

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#target-img",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.fromTo(
      "#target-img",
      { x: 500, y: 0, rotateX: "-10deg", rotateY: "40deg", opacity: 1 },
      {
        x: 180,
        y: 700,
        rotateX: "0deg",
        rotateY: "0deg",
        opacity: 0,
        duration: 20,
        ease: "power2 ease",
      }
    );

    return () => {
      mainScrollTrigger.kill();
      footerTrigger.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="relative">
        <h4 className="absolute right-16 top-20 text-4xl font-bold text-end">
          Distribute and manage insurance <br /> business in{" "}
          <span className="text-[#EE1B30]">one platform</span>
        </h4>
        <div className="h-screen img-cards container m-auto">
          <img src={fl} alt="Flower" className="h-96 w-72 m-2" />
          <img src={rose} alt="rose" className="h-96 w-72 m-2" />
          <img src={sun} alt="sun" className="h-96 w-72 m-2" />
          <img src={woe} alt="woe" className="h-96 w-72 m-2" />
          <img src={tiger} alt="tiger" className="h-96 w-72 m-2" />
          <img src={sun} id="target-img" alt="fl" className="h-96 w-72 m-2" />
          <img src={fl} alt="sun" className="h-96 w-72 m-2" />
          <img src={woe} alt="woe" className="h-96 w-72 m-2" />
          <img src={tiger} alt="tiger" className="h-96 w-72 m-2" />
          <img src={fl} alt="Flower" className="h-96 w-72 m-2" />
          <img src={rose} alt="rose" className="h-96 w-72 m-2" />
        </div>
      </div>

      <div className="container m-auto newContainer h-screen flex items-center justify-center sticky top-0 overflow-hidden">
        <div className="box-one w-1/2 flex items-center justify-center relative">
          <div className="new-img-box relative h-[400px] w-[350px]">
            <img
              src={sun}
              alt="Flower"
              className="absolute  top-0 left-0 h-full w-full object-cover transition-opacity duration-500"
            />
            <img
              src={light}
              alt="Rose"
              className="absolute  top-0 left-0 h-full w-full object-cover opacity-0"
            />
          </div>
          <div className="left-box h-[150px] w-[160px]  absolute left-20 top-10">
            <img src={heroTwo} alt="" className="h-full w-full" />
          </div>
          <div className="right-box h-[150px] w-[160px]  absolute right-20 -bottom-40">
            <img src={heroTwo} alt="" className="h-full w-full" />
          </div>
        </div>
        <div className="box-two w-1/2 flex items-center flex-col justify-center">
          <div className="text-container flex flex-col justify-center relative">
            <div className="text-one text-end opacity-1">
              <h4 className="text-4xl font-bold">
                Distribute and manage <br /> insurance business in <br />
                <span className="text-[#EE1B30]">one platform</span>
              </h4>
              <p className="mt-4">
                Manage your insurance business seamlessly using Riskcovry's{" "}
                <br /> assurance platform. Increase revenue, expand product{" "}
                <br /> offerings.
              </p>
            </div>
            <div className="text-two text-end opacity-0 absolute">
              <h4 className="text-4xl font-bold">
                Distribute and manage <br /> insurance business in <br />
                <span className="text-[#EE1B30]">one platform</span>
              </h4>
              <p className="mt-4">
                Manage your insurance business seamlessly using Riskcovry's{" "}
                <br /> assurance platform. Increase revenue, expand product{" "}
                <br /> offerings.
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-7 ms-56">
            <button className="flex items-center gap-2 bg-[#EE1B30] py-2 px-3 text-white rounded-full">
               Schedule Demo <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      <div className="h-[150vh] "></div>
      <div className="h-screen footer2"></div>
    </>
  );
};

export default AnimationPage;
