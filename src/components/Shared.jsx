import { Link } from 'react-router-dom'
import { useLang } from '../i18n/context'
import { company } from '../i18n/translations'
import Icon from './Icons'

export function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-heading ${center ? 'center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

export function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="page-hero" style={image ? { '--hero-img': `url(${image})` } : undefined}>
      <div className="container">
        {eyebrow && <span className="eyebrow eyebrow-light">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  )
}

export function CtaBand() {
  const { t } = useLang()
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>{t.cta.title}</h2>
          <p>{t.cta.text}</p>
        </div>
        <div className="cta-actions">
          <Link to="/yhteystiedot#varaus" className="btn btn-accent btn-lg">
            {t.cta.button} <Icon name="arrow" size={18} />
          </Link>
          <a href={company.phoneHref} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">
            <Icon name="phone" size={18} /> {company.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
