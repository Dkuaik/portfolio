import React, { useState } from "react";
import styles from "./ProjectList.module.scss";
import { Icon } from "../components";

export interface Project {
  title: string;
  description?: string;
  link?: string;
  image?: string;
  tags?: string[];
  category?: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };
  
  const handleMouseLeave = () => {
    setActiveIndex(null);
  };
  
  return (
    <section className={styles.projectListSection} id="portfolio">
      <div className={styles.sectionHeader}>
        <h2>Proyectos</h2>
        <span className={styles.sectionUnderline}></span>
      </div>
      
      <div className={styles.projectList}>
        {projects.length === 0 ? (
          <div className={styles.empty}>
            <Icon name="infoCircle" size="m" />
            <p>Aún no hay proyectos listados. ¡Pronto los agregaré!</p>
            <div className={styles.emptyBackground}></div>
          </div>
        ) : (
          projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`${styles.projectItem} ${activeIndex === idx ? styles.active : ''}`}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.projectImageContainer}>
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className={styles.projectImagePlaceholder}>
                    <Icon name="openLink" size="m" />
                  </div>
                )}
                <div className={styles.projectOverlay}></div>
              </div>
              
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                {project.tags && (
                  <div className={styles.projectTags}>
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                )}
                {project.description && (
                  <p className={styles.projectDescription}>{project.description}</p>
                )}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    Ver proyecto <Icon name="arrowUpRight" size="s" />
                  </a>
                )}
              </div>
              
              <div className={styles.projectBorder}></div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ProjectList;
