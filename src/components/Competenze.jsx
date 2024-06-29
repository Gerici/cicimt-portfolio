import { motion } from 'framer-motion';
import React from 'react';
import ClipPath from "../assets/svg/ClipPath";
import { benefits } from "../constants";
import Dropdown from "./Dropdown";
import Heading from "./Heading";
import ImageWithPlaceholder from './ImageWithPlaceholder';
import Section from "./Section";
import { GradientLight } from "./design/Benefits";

const Benefits = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.0,
        ease: 'easeInOut',
        staggerChildren: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Section id="competenze">
      <div className="container relative z-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <Heading
            className="md:max-w-md lg:max-w-2xl font-code"
            title="Scoprimi e cerca se faccio al caso tuo"
          />
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-10 font-code mb-[150px]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {benefits.map((item) => (
            <motion.div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              key={item.id}
              variants={itemVariants}
            >
              <div className="relative z-2 flex flex-col p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-4 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <ImageWithPlaceholder
                    src={item.iconUrl}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />

              {item.id === "1" && <Dropdown id="plugin"/>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Benefits;
