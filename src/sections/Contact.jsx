import { profile } from '../data/portfolio'

export default function Contact() {
  return <section id="contact" className="section-wrap contact-section"><div className="contact-card"><p className="eyebrow light"><span /> Mari terhubung</p><h2>Punya ide untuk<br />kita kerjakan <em>bersama?</em></h2><p>Saya terbuka untuk diskusi seputar pendidikan, penelitian, pengembangan web, dan peluang kolaborasi.</p><a className="contact-button" href={`mailto:${profile.email}`}>{profile.email} <span>↗</span></a></div></section>
}
