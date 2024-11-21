import React, { useRef, useState, useEffect } from "react";
// @ts-ignore
import * as __WebpackModuleApi from 'webpack-module-api';
import { Card } from "@rewind-ui/core";
import { getThemeClasses } from "../theme/themeConfig";

interface GallerySectionProps {
  theme: "dark" | "light";
}

// Function to import all images from the gallery folder
const importAll = (r: __WebpackModuleApi.RequireContext) =>
  r.keys().map((item: any) => r(item).default);

// Import images regardless of type or name
const images = importAll(
  require.context("../assets/gallery", false, /\.(png|jpe?g|svg)$/)
);

const GallerySection = ({ theme }: GallerySectionProps) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; scrollLeft: number }>(
    {
      x: 0,
      scrollLeft: 0,
    }
  );
  const [orientation, setOrientation] = useState<"portrait" | "landscape">(
    "portrait"
  );

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
    <section className={`gallery ${classes.spacing.padding.extraLarge}`}>
      <h2
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.medium} ${classes.typography.textAlignCenter} ${classes.text}`}
      >
        Gallery
      </h2>
      <button
        onClick={() =>
          setOrientation(orientation === "portrait" ? "landscape" : "portrait")
        }
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Switch to {orientation === "portrait" ? "Landscape" : "Portrait"}
      </button>
      <div
        ref={galleryRef}
        className={`overflow-x-auto flex ${classes.spacing.spaceX.medium} no-scrollbar cursor-grab ${classes.spacing.paddingX.medium}`}
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? "grabbing" : "grab", userSelect: "none" }}
      >
        {images.map((imageSrc: string, index: React.Key | null | undefined) => (
          <Card
            key={index}
            className={`${classes.spacing.rounded.large} overflow-hidden border-none ${classes.shadow} ${classes.transition}`}
            style={{
              width: orientation === "portrait" ? "300px" : "400px",
              height: orientation === "portrait" ? "400px" : "300px",
              flexShrink: 0,
            }}
          >
            <Card.Image
              src={imageSrc}
              alt={`Gallery Image ${(index as number) + 1}`}
              mode={theme}
              className="object-cover w-full h-full"
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
