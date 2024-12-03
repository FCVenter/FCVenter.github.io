// /components/HobbiesSection.tsx

import React from "react";
import { motion } from "framer-motion";
import { getThemeClasses } from "../theme/themeConfig";
import { images } from "../image-data"; // Ensure this path is correct
import useDragScroll from "../theme/useDragScroll";

interface GallerySectionProps {
  theme: "dark" | "light";
}

const HobbiesSection = ({ theme }: GallerySectionProps) => {
  const classes = getThemeClasses(theme);

  // Duplicate the images array to create a seamless loop
  const duplicatedImages = [...images, ...images];

  // Calculate the total width based on image width and spacing
  // Assuming each image has a width of 384px (sm:w-96) and space-x-4 (16px)
  const imageWidth = 384; // 96 * 4 (assuming Tailwind's w-96 is 24rem, which is 384px)
  const spacing = 16; // space-x-4
  const totalImages = duplicatedImages.length;
  const totalWidth = totalImages * (imageWidth + spacing);

  return (
    <section
      id="hobbies"
      className={`gallery ${classes.spacing.padding.extraLarge} relative overflow-hidden`}
      aria-labelledby="hobbies-heading"
    >
      <h2
        id="hobbies-heading"
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.medium} ${classes.typography.textAlignCenter} ${classes.text}`}
      >
        Hobbies and Interests
      </h2>

      <div className="relative w-full mx-auto overflow-hidden">
        <motion.div
          className="flex space-x-4"
          animate={{
            x: [`0`, `-${totalWidth / 2}px`],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40, // Adjust duration to control scroll speed
            ease: "linear",
          }}
          style={{ display: "flex" }}
          role="list"
          aria-label="Hobbies Gallery"
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="relative w-96 h-96 rounded-lg overflow-hidden shadow-lg flex-shrink-0"
              role="listitem"
            >
              {/* Ribbon */}
              <div className="absolute top-2 right-2 bg-purple-600 text-white text-sm font-semibold py-1 px-3 rounded-l-md shadow-md">
                {image.category}
              </div>

              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-center text-white">
                <p className="text-base sm:text-lg md:text-xl">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HobbiesSection;
