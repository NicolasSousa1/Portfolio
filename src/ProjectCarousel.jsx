import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectCarousel({ images, projectName, aspectRatio = '3 / 2' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = images.length;

  if (count === 0) return null;

  function move(direction) {
    setActiveIndex((index) => (index + direction + count) % count);
  }

  return (
    <div className="project-carousel" role="group" aria-roledescription="carrossel" aria-label={`Imagens de ${projectName}`} style={{ '--slide-ratio': aspectRatio }}>
      <div className="carousel-stage" data-count={count}>
        {images.map(({ file, alt, width = 900, height = 600 }, index) => {
          const distance = (index - activeIndex + count) % count;
          const offset = distance > count / 2 ? distance - count : distance;

          return (
            <img
              key={file}
              className="carousel-slide"
              data-offset={offset}
              src={`${import.meta.env.BASE_URL}imagens/${file}`}
              alt={alt}
              aria-hidden={offset !== 0}
              hidden={Math.abs(offset) > 2}
              width={width}
              height={height}
              loading="lazy"
              decoding="async"
            />
          );
        })}
      </div>
      {count > 1 && (
        <div className="carousel-controls">
          <button type="button" onClick={() => move(-1)} aria-label={`Imagem anterior de ${projectName}`}>
            <ChevronLeft size={19} aria-hidden="true" />
          </button>
          <span className="carousel-count" role="status" aria-atomic="true">{activeIndex + 1} de {count}</span>
          <button type="button" onClick={() => move(1)} aria-label={`Próxima imagem de ${projectName}`}>
            <ChevronRight size={19} aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
