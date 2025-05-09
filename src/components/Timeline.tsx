import React, { useEffect, useRef, useState } from 'react';
import './Timeline.css';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';


const Timeline: React.FC = () => {
  const { t } = useTranslation();
  const pathRef = useRef<SVGPathElement | null>(null);
  const pointsRef = useRef<(SVGCircleElement | null)[]>([]);

  const timelineEvents = [
    {
      year: '2018',
      title: t('timeline.2018.title'),
      description: t('timeline.2018.description'),
    },
    {
      year: '2022',
      title: t('timeline.2022.title'),
      description: t('timeline.2022.description'),
    },
    {
      year: '2023',
      title: t('timeline.2023.title'),
      description: t('timeline.2023.description'),
    },
    {
      year: '2024',
      title: t('timeline.2024.title'),
      description: t('timeline.2024.description'),
    },
    {
      year: '2025',
      title: t('timeline.2025.title'),
      description: t('timeline.2025.description'),
    },
  ];

  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleLabels, setVisibleLabels] = useState<Set<number>>(new Set());
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const totalLength = path.getTotalLength();
    const segment = totalLength / (timelineEvents.length - 1);
    const coords: { x: number; y: number }[] = [];

    for (let i = 0; i < timelineEvents.length; i++) {
      const offsetFactor = i === 0 ? 0.15 : i;
      const pt = path.getPointAtLength(offsetFactor * segment);
      coords.push({ x: pt.x, y: pt.y });
    }

    setPoints(coords);

    gsap.set(path, {
      strokeDasharray: totalLength,
      strokeDashoffset: totalLength,
      strokeOpacity: 0.3,
    });

    const tl = gsap.timeline();

    tl.to(path, {
      strokeDashoffset: 0,
      strokeOpacity: 1,
      duration: 5,
      ease: 'slow(0.7, 0.7, false)',
      onUpdate: () => {
        const current = gsap.getProperty(path, 'strokeDashoffset') as number;
        const drawn = totalLength - current;

        coords.forEach((_, i) => {
          const pointLength = segment * i;
          const circle = pointsRef.current[i];

          if (!visibleLabels.has(i) && drawn >= pointLength && circle) {
            setVisibleLabels(prev => new Set(prev).add(i));

            gsap.set(circle, {
              opacity: 0,
              transformOrigin: 'center center',
              attr: { r: 0, fill: 'url(#pointPearl)' },
            });

            gsap.to(circle, {
              opacity: 1,
              attr: { r: 8 },
              duration: 0.7,
              ease: 'back.out(2)',
              filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.4))',
            });
          }
        });
      },
    });
  }, [t]);
  return (
    <section className="section-container">
      <h2 className="section-title">{t('trayectoria')}</h2>
      <svg viewBox="0 0 950 400" className="timeline-svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00bfff" stopOpacity="0.2" />
            <stop offset="30%" stopColor="#00bfff" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6200ff" stopOpacity="1" />
          </linearGradient>
          <radialGradient id="pointPearl" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#d0e8ff" />
            <stop offset="100%" stopColor="#6200ff" />
          </radialGradient>
        </defs>
        <path
          ref={pathRef}
          d="M 0 360 C 100 300, 350 200, 800 130"
          stroke="url(#gradientLine)"
          strokeWidth="4"
          fill="none"
        />
        {points.map((point, index) => (
          <g key={index}>
            <circle
              cx={point.x}
              cy={point.y}
              r={40}
              fill="transparent"
              pointerEvents="all"
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredIndex(index)}
            />
            <circle
              ref={el => {
                pointsRef.current[index] = el;
              }}
              cx={point.x}
              cy={point.y}
              r={8}
              className="timeline-point"
              pointerEvents="none"
              style={{ opacity: 0 }}
            />
            {visibleLabels.has(index) && (
              <text x={point.x} y={point.y - 20} className="timeline-label">
                {timelineEvents[index].year}
              </text>
            )}
            {hoveredIndex === index && (
              <foreignObject
                x={Math.max(point.x - 110, 0)}
                y={point.y + 20}
                width={250}
                height={200}
                overflow="visible"
                requiredExtensions="http://www.w3.org/1999/xhtml"
              >
                <div
                  className="tooltip-wrapper"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    setExpandedIndex(null);
                  }}
                >
                  <div className="tooltip-card fancy-fade-in">
                    <h4>{timelineEvents[index].title}</h4>
                    {expandedIndex === index && (
                      <p>{timelineEvents[index].description}</p>
                    )}
                  </div>
                  {expandedIndex !== index && (
                    <div
                      className="tooltip-arrow interactive"
                      onMouseEnter={() => setExpandedIndex(index)}
                    />
                  )}
                </div>
              </foreignObject>
            )}
          </g>
        ))}
      </svg>
    </section>
  );
};

export default Timeline;
