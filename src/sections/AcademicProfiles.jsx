import SectionHeading from '../components/SectionHeading'
import { academicProfiles } from '../data/portfolio'

export default function AcademicProfiles() {
  return <section id="academic" className="section-wrap academic-section"><SectionHeading eyebrow="Jejak akademik" className="academic-heading" description="Kunjungi profil resmi saya untuk melihat publikasi, sitasi, identitas peneliti, dan proyek pengembangan terbaru.">Temukan karya dan<br /><em>rekam jejak saya.</em></SectionHeading><div className="profile-grid">{academicProfiles.map((profile, index) => <a className="profile-card" href={profile.url} target="_blank" rel="noreferrer" key={profile.name}><span className="profile-index">{String(index + 1).padStart(2, '0')}</span><div><p>{profile.label}</p><h3>{profile.name}</h3><span className="profile-id">{profile.id}</span></div><span className="profile-arrow" aria-hidden="true">↗</span></a>)}</div></section>
}
