import React from "react";
import styles from './ProjectsStyles.module.css'
import electricallogo from '../../assets/electical-tutor-app-logo.png'
import acmeapp from '../../assets/acme-app-logo.jpg'
import todoapp from '../../assets/todo-app-logo.png'
import weatherapp from '../../assets/weather-app-logo.png'
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">  Projects </h1>

    <div className={styles.projectsContainer}>
        <ProjectCard src={electricallogo} link="https://electrical-tutor-design.netlify.app/" h3='Electrical Tutor' p='Tutor App'/>
        <ProjectCard src={acmeapp} link="https://zaidsayed910.github.io/AngularApp/welcome" h3='Acme App' p='Acme Product listing App in Angular'/>
        <ProjectCard src={todoapp} link="https://zaidsayed910.github.io/Todo-List-Angular/" h3='To DO APP' p='To Do App in Angular'/>
        <ProjectCard src={weatherapp} link="https://weatherapp-status.herokuapp.com/" h3='Weather App' p='Check Weather App'/>
    </div>
    </section>
  );
}

export default Projects;
