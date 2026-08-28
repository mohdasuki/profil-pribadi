import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/portfolio'

export default function Projects() {
  return <section id="projects" className="section-wrap projects-section"><SectionHeading eyebrow="Karya pilihan" description="Beberapa karya yang merepresentasikan ketertarikan saya pada teknologi, pendidikan, dan riset.">Proyek yang saya<br /><em>banggakan.</em></SectionHeading><div className="project-list">{projects.map((project) => <article className="project-card" key={project.title}><span className="project-number">{project.number}</span><div className="project-main"><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-tech">{project.tech.map((item) => <span key={item}>{item}</span>)}</div><a href="#contact" className="project-link" aria-label={`Tanyakan tentang ${project.title}`}>↗</a></article>)}</div></section>
}
