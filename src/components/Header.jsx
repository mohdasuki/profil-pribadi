import { useState } from 'react'
import Brand from './Brand'

const navigation = [['Beranda', '#home'], ['Tentang', '#about'], ['Akademik', '#academic'], ['Proyek', '#projects']]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <header className="site-header"><nav aria-label="Navigasi utama"><Brand onClick={closeMenu} /><button className="menu-button" type="button" aria-label="Buka menu navigasi" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button><ul id="main-navigation" className={menuOpen ? 'nav-links is-open' : 'nav-links'}>{navigation.map(([label, href]) => <li key={href}><a href={href} onClick={closeMenu}>{label}</a></li>)}<li><a className="nav-cta" href="#contact" onClick={closeMenu}>Mari bicara</a></li></ul></nav></header>
}
