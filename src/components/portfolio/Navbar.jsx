import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="relative z-10 border-b border-white/5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5" aria-label="Silicon home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-400 to-indigo-600 text-sm font-black text-white shadow-lg shadow-indigo-500/20">S⁴</span>
          <span className="text-base font-extrabold tracking-tight text-slate-200">Silicon</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => <a key={link.label} href={link.href} className={`text-xs font-semibold transition hover:text-indigo-400 ${link.label === 'Portfolio' ? 'text-indigo-400' : 'text-slate-400'}`}>{link.label}{link.label === 'Services' && <span className="ml-1">⌄</span>}</a>)}
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <span className={`text-xs ${theme === 'light' ? 'text-indigo-500' : 'text-slate-400'}`}>Light</span>
          <button onClick={onToggleTheme} aria-label="Toggle theme" className={`relative h-6 w-11 rounded-full p-1 transition ${theme === 'dark' ? 'bg-indigo-500' : 'bg-slate-300'}`}>
            <span className={`block h-4 w-4 rounded-full bg-white shadow transition-transform ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
          <span className={`text-xs ${theme === 'dark' ? 'text-slate-200' : 'text-slate-400'}`}>Dark</span>
          <a href="#contact" className="ml-2 rounded-sm bg-indigo-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-indigo-400">Contact us</a>
        </div>
        <button className="text-slate-200 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
      </nav>
      {menuOpen && <div className="flex flex-col gap-4 border-t border-white/10 px-5 py-5 md:hidden">{links.map(link => <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="text-sm text-slate-300">{link.label}</a>)}<button onClick={onToggleTheme} className="self-start text-sm text-indigo-400">Toggle theme</button></div>}
    </header>
  )
}
