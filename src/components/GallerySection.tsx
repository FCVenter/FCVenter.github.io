import { useRef, useState, useEffect } from 'react';
import { Card } from '@rewind-ui/core';
import { getThemeClasses } from '../theme/themeConfig';

interface GallerySectionProps {
  theme: 'dark' | 'light';
}

const GallerySection = ({ theme }: GallerySectionProps) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; scrollLeft: number }>({
    x: 0,
    scrollLeft: 0,
  });

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
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  return (
    <section className="gallery p-8">
      <h2 className={`text-3xl font-semibold mb-4 text-center  ${classes.text}`}>Gallery</h2>
      <div
        ref={galleryRef}
        className="overflow-x-auto flex space-x-4 no-scrollbar cursor-grab px-4"
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }} // Change cursor on drag and prevent text selection
      >
        {[...Array(5)].map((_, index) => (
          <Card
            key={index}
            className={`rounded-lg overflow-hidden border-none ${classes.shadow} ${classes.transition}`}
            style={{
              width: '300px', // Set explicit width for the card
              height: '400px', // Set explicit height for the card
              flexShrink: 0, // Prevent cards from shrinking
            }}
          >
            <Card.Image
              src={`/assets/gallery/image${index + 1}.jpg`}
              alt={`Gallery Image ${index + 1}`}
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
