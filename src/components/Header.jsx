import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLang } from '../i18n/context'
import { company } from '../i18n/translations'
import Icon from './Icons'
import Logo from './Logo'

function LanguageSwitch() {
  const { lang, setLang, t } = useLang()
  return (
    <div className="lang-switch" role="group" aria-label={t.nav.language}>
      <Icon name="globe" size={16} />
      {['fi', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          className={lang === code ? 'active' : ''}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function Header() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/palvelut', label: t.nav.services },
    { to: '/meista', label: t.nav.about },
    { to: '/ukk', label: t.nav.faq },
    { to: '/yhteystiedot', label: t.nav.contact },
  ]

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-info">
            <a href={company.phoneHref} target="_blank" rel="noopener noreferrer">
              <Icon name="phone" size={15} /> {company.phone}
            </a>
            <a href={company.emailHref} target="_blank" rel="noopener noreferrer" className="hide-sm">
              <Icon name="mail" size={15} /> {company.email}
            </a>
            <span className="hide-md">
              <Icon name="clock" size={15} /> {t.topbar.hours}
            </span>
          </div>
          <LanguageSwitch />
        </div>
      </div>

      <div className="navbar">
        <div className="container navbar-inner">
          <Link to="/" className="brand" aria-label={company.name}>
            <Logo />
          </Link>

          <nav className={`main-nav ${open ? 'open' : ''}`} aria-label={t.nav.menu}>
            <ul>
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} end={l.end} onClick={() => setOpen(false)}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link to="/yhteystiedot#varaus" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
              {t.nav.book}
            </Link>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-label={t.nav.menu}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}
