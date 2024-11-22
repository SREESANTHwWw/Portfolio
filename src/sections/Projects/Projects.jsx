import styles from './ProjectsStyles.module.css';




import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={"w-full h-[300px] sm:h-full flex flex-col justify-around items-center sm:flex-row sm:justify-around sm:flex "}>
        <ProjectCard
        
          link="https://github.com/SREESANTHwWw"
          h3="Dils Trades - (Live Project)"
          p="E-Commerce"
        />
        <ProjectCard
         
          link="https://github.com/SREESANTHwWw"
          h3="E-Commerce Web Application"
          p="This eCommerce web application"
        />
        <ProjectCard
          
          link="https://github.com/SREESANTHwWw"
          h3="STORE API"
          p="Developed a RESTful store AP"
        />
       
      </div>
    </section>
  );
}

export default Projects;
