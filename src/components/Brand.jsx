import { profile } from '../data/portfolio'

export default function Brand({ onClick }) {
  return <a className="brand" href="#home" onClick={onClick} aria-label="Kembali ke beranda"><span className="brand-mark">{profile.initials}</span><span>{profile.name}</span></a>
}
