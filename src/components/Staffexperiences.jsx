import { animated, useSpring } from "@react-spring/web";
import { check, head } from "../assets";
import { collabApps, collabContent } from "../constants";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  const fadeInSpring = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { tension: 220, friction: 120 },
  });

  const slideInRightSpring = useSpring({
    from: { opacity: 0, transform: "translateX(50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { tension: 220, friction: 120 },
  });

  const imgSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 3500 }, // Aumentata la durata a 1200ms
  });

  return (
    <Section crosses id="staff">
      <div className="container flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-start lg:items-start">
        <animated.div style={fadeInSpring} className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8 font-code">
            Dove ho lasciato il segno
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14 flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-start lg:items-start">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <div className="font-code tracking-[5px] text-n-4 mb-6 md:mb-auto p-2 hover:text-n-16">
            Now working in 'EverCraft' as Pluginner
          </div>
        </animated.div>

        <animated.div
          style={slideInRightSpring}
          className="lg:ml-auto xl:w-[38rem] mt-4"
        >

          <div className="relative left-1/2 flex w-[20rem] md:w-[22rem] lg:w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img src={head} width={48} height={48} alt="head" />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <animated.li
                  key={app.id}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transformOrigin: "bottom",
                    transform: slideInRightSpring.transform.interpolate(
                      (x) => `translateX(-50%) rotate(${index * 45}deg) ${x}`
                    ),
                  }}
                  className={`h-1/2`}
                >
                  <animated.div style={imgSpring}>
                    <div className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl">
                      <img
                        className="m-auto"
                        width={app.width}
                        height={app.height}
                        alt={app.title}
                        src={app.icon}
                      />
                    </div>
                  </animated.div>
                </animated.li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </animated.div>
      </div>
    </Section>
  );
};

export default Collaboration;
