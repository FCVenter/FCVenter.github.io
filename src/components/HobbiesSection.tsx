import React, { useRef, useState, useEffect } from "react";
import { Card, Ribbon, RibbonColor } from "@rewind-ui/core";
import { getThemeClasses } from "../theme/themeConfig";

// Import images manually
import footballTactics from "../assets/hobbies/football-tactics.jpg";
import ghostOfTsushima from "../assets/hobbies/ghost-of-tsushima.jpeg";
import interstellarBlackhole from "../assets/hobbies/interstellar-blackhole.jpg";
import jonBellion from "../assets/hobbies/jon-bellion.jpg";
import mountainsThroughCarWindow from "../assets/hobbies/mountains-through-car-window.jpg";
import oceanView from "../assets/hobbies/ocean-view.jpg";
import openRoad from "../assets/hobbies/open-road.jpg";
import orchestra from "../assets/hobbies/orchestra.jpg";
import charlesFerrari from "../assets/hobbies/charles-ferrari-top-view.jpg";
import hamiltonCockpit from "../assets/hobbies/hamilton-cockpit.jpg";
import hamiltonPanther from "../assets/hobbies/hamilton-panther.jpg";
import martinOdegaard from "../assets/hobbies/martin-odegaard.jpg";
import springboks from "../assets/hobbies/rwc-2023-final-whistle.jpg";
import spiderman from "../assets/hobbies/spiderman2.jpeg";
import silhouette from "../assets/hobbies/people-silhouette.jpeg";

interface GallerySectionProps {
  theme: "dark" | "light";
}

interface ImageData {
  src: string;
  alt: string;
  caption: string;
  ribbon?: {
    text: string;
    color?: RibbonColor; // Adjusted to RibbonColor type
    size?: string; // Optional: Customize ribbon size
    shadow?: string; // Optional: Customize ribbon shadow
    shadowColor?: RibbonColor; // Optional: Customize ribbon shadow color
  };
}

const images: ImageData[] = [
  {
    src: hamiltonCockpit,
    alt: "Lewis Hamilton in Mercedes-AMG Formula 1 Cockpit",
    caption: "Lewis Hamilton in Mercedes-AMG F1 Car",
    ribbon: {
      text: "Motorsport",
      color: "purple",
      shadowColor: "purple",
    },
  },
  {
    src: hamiltonPanther,
    alt: "Lewis Hamilton commemorating Chadwick Boseman by doing the 'Black Panther' pose",
    caption: "Lewis Hamilton Celebrating",
    ribbon: {
      text: "Motorsport",
      color: "purple",
      shadowColor: "purple",
    },
  },
  {
    src: charlesFerrari,
    alt: "Charles Leclerc crossing the finish line in his Ferrari Formula 1 car",
    caption: "Charles Leclerc Crossing the Finish Line",
    ribbon: {
      text: "Motorsport",
      color: "red",
      shadowColor: "red",
    },
  },
  {
    src: footballTactics,
    alt: "Football tactics on display",
    caption: "Football Tactics",
    ribbon: {
      text: "Sport",
      color: "yellow",
      shadowColor: "yellow",
    },
  },
  {
    src: martinOdegaard,
    alt: "Arsenal's Martin Odegaard dribbling the ball",
    caption: "Martin Odegaard Dribbling a Football",
    ribbon: {
      text: "Sport",
      color: "red",
      shadowColor: "red",
    },
  },
  {
    src: springboks,
    alt: "Springboks winning the 2023 Rugby World Cup Final",
    caption: "Final Whistle as Springboks Win 2023 RWC",
    ribbon: {
      text: "Sport",
      color: "green",
      shadowColor: "green",
    },
  },
  {
    src: ghostOfTsushima,
    alt: "Ghost of Tsushima landscape",
    caption: "Ghost of Tsushima",
    ribbon: {
      text: "Gaming",
      color: "red",
      shadowColor: "red",
    },
  },
  {
    src: spiderman,
    alt: "Spiderman in Marvel's Spiderman 2",
    caption: "Marvel's Spiderman 2",
    ribbon: {
      text: "Gaming",
      color: "red",
      shadowColor: "red",
    },
  },
  {
    src: interstellarBlackhole,
    alt: "Interstellar black hole visualization",
    caption: 'Blackhole from "Interstellar"',
    ribbon: {
      text: "Science-Fiction",
      color: "black",
      shadowColor: "black",
    },
  },
  {
    src: jonBellion,
    alt: "Jon Bellion",
    caption: "Jon Bellion",
    ribbon: {
      text: "Music",
      color: "blue",
      shadowColor: "blue",
    },
  },
  {
    src: mountainsThroughCarWindow,
    alt: "Mountains view through car window",
    caption: "Mountains Through Car Window",
    ribbon: {
      text: "Travel",
      color: "green",
      shadowColor: "green",
    },
  },
  {
    src: oceanView,
    alt: "Ocean view at sunset",
    caption: "Ocean View",
    ribbon: {
      text: "Nature",
      color: "green",
      shadowColor: "green",
    },
  },
  {
    src: openRoad,
    alt: "Open road stretching into the horizon",
    caption: "Open Road",
    ribbon: {
      text: "Adventure",
      color: "green",
      shadowColor: "green",
    },
  },
  {
    src: orchestra,
    alt: "Orchestra performing on stage",
    caption: "Orchestra Performance",
    ribbon: {
      text: "Music",
      color: "purple",
      shadowColor: "purple",
    },
  },
  {
    src: silhouette,
    alt: "Silhouette of friends on hill watching the sunset",
    caption: "Friends enjoying the sunset",
    ribbon: {
      text: "Socialising",
      color: "purple",
      shadowColor: "purple",
    },
  },
];

const HobbiesSection = ({ theme }: GallerySectionProps) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; scrollLeft: number }>(
    {
      x: 0,
      scrollLeft: 0,
    }
  );

  // Set orientation to 'landscape' directly
  const orientation: "portrait" | "landscape" = "landscape";

  const classes = getThemeClasses(theme);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!galleryRef.current) return;

    setIsDragging(true);
    const rect = galleryRef.current.getBoundingClientRect();
    setDragStart({
      x: e.clientX - rect.left,
      scrollLeft: galleryRef.current.scrollLeft,
    });

    // Prevent default to avoid text selection
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !galleryRef.current) return;

    const rect = galleryRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const walk = (x - dragStart.x) * 1.5; // Adjust scroll speed multiplier
    galleryRef.current.scrollLeft = dragStart.scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart]);

  return (
    <section id="hobbies" className={`gallery ${classes.spacing.padding.extraLarge}`}>
      <h2
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.medium} ${classes.typography.textAlignCenter} ${classes.text}`}
      >
        Hobbies and Interests
      </h2>
      {/* Removed the orientation toggle button */}
      <div
        ref={galleryRef}
        className={`overflow-x-auto flex ${classes.spacing.spaceX.medium} cursor-grab ${classes.spacing.paddingX.medium} custom-scrollbar`}
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? "grabbing" : "grab", userSelect: "none" }}
      >
        {images.map((image, index) => (
          <Card
            key={image.src} // Use unique src as key
            className={`${classes.spacing.rounded.large} overflow-hidden border-none ${classes.shadow} ${classes.transition} flex-shrink-0 relative
              w-80 h-60 sm:w-96 sm:h-72 md:w-[600px] md:h-[400px]`}
            // Removed inline width and height
          >
            {/* Render Ribbon if available */}
            {image.ribbon && (
              <Ribbon
                size="lg"
                shadow="base"
                color={image.ribbon.color || "green"} // Default color if not specified
                shadowColor={image.ribbon.shadowColor || "purple"} // Default shadow color
                className="z-20"
              >
                {image.ribbon.text}
              </Ribbon>
            )}

            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/path/to/fallback-image.jpg";
              }}
              style={{
                display: "block",
              }}
            />

            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
              {image.caption}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HobbiesSection;
