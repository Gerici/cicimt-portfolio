import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import { background, bgconsole, curve } from "../assets";
import CompanyLogos from "./CompanyLogos";
import Generating from "./Generating";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";


const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const parallaxRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const animationProps = useSpring({
    opacity: isMounted ? 1 : 0,
    transform: isMounted ? "translateY(0) scale(1)" : "translateY(-50px) scale(0.9)",
    config: { tension: 420, friction: 220 }
  });

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="biografia"
    >
      <animated.div style={animationProps} className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 font-code">
            Pluginning the&nbsp;world&nbsp;for our dream modality {` `}
            <br />
            <span className="inline-block relative">
              CICIMT{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 font-code">
            Esplora le mie risorse, costruisci insieme a me la modalita' che fino ad adesso hai solo immaginato.
          </p>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] flex flex-col justify-center items-center">
                <img
                  src={bgconsole}
                  className="w-full object-cover"
                  width={1024}
                  height={490}
                  alt="plugin"
                />
                <Generating className="absolute right-4 bottom-5 md:left-[63%] md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={background}
              className="w-full blur-lg"
              width={1440}
              height={1800}
              alt="bio"
            />
          </div>
          <BackgroundCircles />

        </div>
        
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />

      </animated.div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
