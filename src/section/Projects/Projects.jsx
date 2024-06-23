import React from "react";
import styles from './ProjectsStyles.module.css'
import viber from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitlift from '../../assets/fitlift.png'
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.conatiner}>
    <h1 className="sectionTitle">  Projects </h1>

    <div className={styles.projectsContainer}>
        <ProjectCard src={viber} link="https://github.com/" h3='Viber' p='Streaming App'/>
        <ProjectCard src={freshBurger} link="https://github.com/" h3='Fresh Burger' p='Hamburger Restaurant'/>
        <ProjectCard src={hipsster} link="https://github.com/" h3='Hipsster' p='Glasses Shop'/>
        <ProjectCard src={fitlift} link="https://github.com/" h3='Fitlift' p='Fitness App'/>
    </div>
    </section>
  );
}

export default Projects;
