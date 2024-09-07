
import styles from './ProjectsStyles.module.css';
import store from '../../assets/store.jpg'
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import server01 from '../../assets/server01.jpg'
import ProjectCard from '../../common/ProjectCard';
import blog from '../../assets/blog.jpg';
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={blog}
          link="https://github.com/shreyJS/devBlog"
          h3="DevBlog"
          p="Blogging App"
        />
        <ProjectCard
          src={store}
          link="https://github.com/shreyJS/digitalShop"
          h3="Digital Shop"
          p="Online marketplace"
        />
        <ProjectCard
          src={server01}
          link="https://github.com/shreyJS/WebServer"
          h3="Web server"
          p="CLI App"
        />
        <p>More coming soon...</p>
        {/* <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
