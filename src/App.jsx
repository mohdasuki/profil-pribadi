import { useState } from 'react'
import './App.css'
import profilImg from './assets/profil.jpg'

const projects = [
  { number: '01', title: 'TaniLog', description: 'Aplikasi pencatatan pertanian untuk mengelola musim tanam, biaya, panen, penjualan, dan laporan laba-rugi.', tech: ['React', 'Vite', 'Firebase'] },
  { number: '02', title: 'Sistem Informasi Akademik', description: 'Sistem informasi untuk mendukung layanan akademik, monitoring mahasiswa, dan pengelolaan kegiatan program studi.', tech: ['Laravel', 'MySQL', 'Bootstrap'] },
  { number: '03', title: 'NLP Research', description: 'Eksperimen pemrosesan bahasa alami untuk klasifikasi teks, analisis sentimen, dan Named Entity Recognition Bahasa Indonesia.', tech: ['Python', 'NLP', 'Machine Learning'] },
]

const skills = [
  ['01', 'Web Development', 'React, Laravel, PHP, JavaScript, dan Firebase.'],
  ['02', 'Artificial Intelligence', 'Machine Learning, NLP, klasifikasi, dan analisis data.'],
  ['03', 'Research', 'Eksperimen, analisis dataset, penulisan ilmiah, dan publikasi.'],
  ['04', 'Teaching', 'Pemrograman web, Java, basis data, dan teknologi informatika.'],
]

const academicProfiles = [
  { name: 'Google Scholar', id: 'mk_UaEcAAAAJ', label: 'Publikasi & sitasi', url: 'https://scholar.google.com/citations?user=mk_UaEcAAAAJ&hl=id' },
  { name: 'SINTA', id: '6664138', label: 'Science and Technology Index', url: 'https://sinta.kemdiktisaintek.go.id/authors/profile/6664138' },
  { name: 'Scopus', id: '59747672700', label: 'Author profile', url: 'https://www.scopus.com/authid/detail.uri?authorId=59747672700' },
  { name: 'ORCID', id: '0000-0003-2747-0750', label: 'Researcher identifier', url: 'https://orcid.org/0000-0003-2747-0750' },
  { name: 'GitHub', id: '@mohdasuki', label: 'Kode & proyek', url: 'https://github.com/mohdasuki' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav aria-label="Navigasi utama">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Kembali ke beranda"><span className="brand-mark">MD</span><span>Moh. Dasuki</span></a>
          <button className="menu-button" type="button" aria-label="Buka menu navigasi" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
          <ul className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
            <li><a href="#home" onClick={closeMenu}>Beranda</a></li><li><a href="#about" onClick={closeMenu}>Tentang</a></li><li><a href="#academic" onClick={closeMenu}>Akademik</a></li><li><a href="#projects" onClick={closeMenu}>Proyek</a></li><li><a className="nav-cta" href="#contact" onClick={closeMenu}>Mari bicara</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-content">
            <div className="hero-text">
              <p className="eyebrow"><span /> Halo, saya</p><h1>Moh. Dasuki<span>.</span></h1><h2>Lecturer | Web Developer | AI &amp; NLP Researcher</h2>
              <p className="hero-description">Dosen Informatika di Universitas Muhammadiyah Jember yang berfokus pada pendidikan, pengembangan web, kecerdasan buatan, dan riset pemrosesan bahasa alami.</p>
              <div className="hero-buttons"><a href="#projects" className="btn btn-primary">Jelajahi karya <span aria-hidden="true">↗</span></a><a href="#contact" className="btn btn-secondary">Hubungi saya</a></div>
              <div className="hero-meta" aria-label="Bidang utama"><div><strong>Web</strong><span>Development</span></div><div><strong>AI &amp; NLP</strong><span>Research</span></div><div><strong>Teaching</strong><span>Education</span></div></div>
            </div>
            <div className="hero-visual"><div className="photo-frame"><span className="photo-accent" /><img src={profilImg} alt="Foto profil Moh. Dasuki, M.Kom" className="profile-image" /><div className="availability"><span /> Terbuka untuk kolaborasi</div></div></div>
          </div>
          <a className="scroll-hint" href="#about" aria-label="Gulir ke bagian tentang"><span /> Gulir untuk mengenal saya</a>
        </section>

        <section id="about" className="section-wrap">
          <div className="section-heading"><p className="eyebrow"><span /> Tentang saya</p><h2>Mengajar, meneliti,<br />dan terus <em>bertumbuh.</em></h2></div>
          <div className="about-grid">
            <div className="about-copy"><p className="lead">Saya Moh. Dasuki, M.Kom, dosen Informatika di Universitas Muhammadiyah Jember yang percaya bahwa teknologi terbaik lahir dari perpaduan rasa ingin tahu, riset, dan manfaat nyata.</p><p>Dalam pengajaran, saya membantu mahasiswa memahami teknologi melalui pendekatan yang praktis dan relevan. Di luar kelas, saya aktif mengeksplorasi pengembangan web, kecerdasan buatan, Natural Language Processing, dan pemanfaatan teknologi untuk menjawab kebutuhan pendidikan serta masyarakat.</p><a className="text-link" href="#contact">Kenal lebih dekat <span>→</span></a></div>
            <div className="skills">{skills.map(([number, title, description]) => <article className="skill-card" key={title}><span className="skill-number">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
          </div>
        </section>

        <section id="academic" className="section-wrap academic-section">
          <div className="section-heading heading-row academic-heading">
            <div><p className="eyebrow"><span /> Jejak akademik</p><h2>Temukan karya dan<br /><em>rekam jejak saya.</em></h2></div>
            <p>Kunjungi profil resmi saya untuk melihat publikasi, sitasi, identitas peneliti, dan proyek pengembangan terbaru.</p>
          </div>
          <div className="profile-grid">
            {academicProfiles.map((profile, index) => (
              <a className="profile-card" href={profile.url} target="_blank" rel="noreferrer" key={profile.name}>
                <span className="profile-index">{String(index + 1).padStart(2, '0')}</span>
                <div><p>{profile.label}</p><h3>{profile.name}</h3><span className="profile-id">{profile.id}</span></div>
                <span className="profile-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section id="projects" className="section-wrap projects-section">
          <div className="section-heading heading-row"><div><p className="eyebrow"><span /> Karya pilihan</p><h2>Proyek yang saya<br /><em>banggakan.</em></h2></div><p>Beberapa karya yang merepresentasikan ketertarikan saya pada teknologi, pendidikan, dan riset.</p></div>
          <div className="project-list">{projects.map((project) => <article className="project-card" key={project.title}><span className="project-number">{project.number}</span><div className="project-main"><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-tech">{project.tech.map((item) => <span key={item}>{item}</span>)}</div><a href="#contact" className="project-link" aria-label={`Tanyakan tentang ${project.title}`}>↗</a></article>)}</div>
        </section>

        <section id="contact" className="section-wrap contact-section"><div className="contact-card"><p className="eyebrow light"><span /> Mari terhubung</p><h2>Punya ide untuk<br />kita kerjakan <em>bersama?</em></h2><p>Saya terbuka untuk diskusi seputar pendidikan, penelitian, pengembangan web, dan peluang kolaborasi.</p><a className="contact-button" href="mailto:moh.dasuki22@gmail.com">moh.dasuki22@gmail.com <span>↗</span></a></div></section>
      </main>

      <footer><a className="brand" href="#home"><span className="brand-mark">MD</span><span>Moh. Dasuki, M.Kom</span></a><p>© {new Date().getFullYear()} — Universitas Muhammadiyah Jember.</p><div className="social-links"><span>LinkedIn · segera</span><a href="https://github.com/mohdasuki" target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>
    </div>
  )
}

export default App
