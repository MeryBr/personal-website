import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Projects.css';

interface ProjectContent {
  title: string;
  date: string;
  affiliation: string;
  description: string;
  features: string[];
}

const projectData = [
  {
    id: 'animals',
    repo: 'https://github.com/MeryBr/buscador-personajes',
    demo: 'https://merybr.github.io/buscador-personajes/',
  },
  {
    id: 'mysticball',
    repo: 'https://github.com/MeryBr/MysticBall',
    demo: 'https://merybr.github.io/MysticBall/',
  },
];

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="projects-section">
      <h2 className="section-title">{t('proyectos')}</h2>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="projects-carousel"
      >
        {projectData.map((project) => {
          const p = t(`projects.${project.id}`, {
            returnObjects: true,
          }) as ProjectContent;

          return (
            <SwiperSlide key={project.id}>
              <div className="project-card">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-date">{p.date}</p>
                <p className="project-affiliation">{p.affiliation}</p>
                <p className="project-description">{p.description}</p>

                <ul className="project-features">
                  {p.features?.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="project-links">
                  <a
                    href={project.demo}
                    className="project-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🚀 {t('verDemo')}
                  </a>
                  <a
                    href={project.repo}
                    className="project-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 {t('verRepositorio')}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Projects;
