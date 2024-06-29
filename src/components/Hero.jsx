import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("reisze", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full py-32 bg-black">
      <div className="w-full flex-center flex-col">
        <p id="hero" className="hero-title font-thin mb-[-10px] pt-7">
          iPhone 15 Pro
        </p>
        <div className="md:w-[62.5%] w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 mt-32">
        <a href="#highlights" className="btn">
          Buy
        </a>
        {/* <p className="font-normal text-xl">From $199/month or $999</p> */}
        <p className="font-normal text-[21px] mt-2 tracking-wide">
          From £41.62/mo. or £999
        </p>
      </div>
    </section>
  );
};

export default Hero;
