import SectionHeading from '../components/SectionHeading'
import { profile, skills } from '../data/portfolio'

export default function About() {
  return <section id="about" className="section-wrap"><SectionHeading eyebrow="Tentang saya">Mengajar, meneliti,<br />dan terus <em>bertumbuh.</em></SectionHeading><div className="about-grid"><div className="about-copy"><p className="lead">Saya {profile.fullName}, dosen Informatika di {profile.institution} yang percaya bahwa teknologi terbaik lahir dari perpaduan rasa ingin tahu, riset, dan manfaat nyata.</p><p>Dalam pengajaran, saya membantu mahasiswa memahami teknologi melalui pendekatan yang praktis dan relevan. Di luar kelas, saya aktif mengeksplorasi pengembangan web, kecerdasan buatan, Natural Language Processing, dan pemanfaatan teknologi untuk menjawab kebutuhan pendidikan serta masyarakat.</p><a className="text-link" href="#contact">Kenal lebih dekat <span>→</span></a></div><div className="skills">{skills.map(({ number, title, description }) => <article className="skill-card" key={title}><span className="skill-number">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
}
