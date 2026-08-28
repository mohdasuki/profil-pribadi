import Brand from './Brand'
import { profile } from '../data/portfolio'

export default function Footer() {
  return <footer><Brand /><p>© {new Date().getFullYear()} — {profile.institution}.</p><div className="social-links"><span>LinkedIn · segera</span><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>
}
