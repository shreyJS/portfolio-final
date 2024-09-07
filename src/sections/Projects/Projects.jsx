
import styles from './ProjectsStyles.module.css';
import store from '../../assets/store.jpg'
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
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
