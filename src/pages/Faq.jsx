import { Link } from 'react-router-dom'
import { useLang } from '../i18n/context'
import { company } from '../i18n/translations'
import Icon from '../components/Icons'
import { PageHero } from '../components/Shared'

export default function Faq() {
  const { t } = useLang()
  const f = t.faq

  return (
    <>
      <PageHero eyebrow={f.eyebrow} title={f.title} text={f.text} />

      <section className="section">
        <div className="container faq-layout">
          <div className="faq-list">
            {f.items.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>
                  {item.q}
                  <Icon name="chevron" size={20} className="faq-chevron" />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>

          <aside className="card faq-aside">
            <h3>{t.contact.infoTitle}</h3>
            <p>{f.text}</p>
            <a href={company.phoneHref} target="_blank" rel="noopener noreferrer" className="contact-line">
              <Icon name="phone" size={18} /> {company.phone}
            </a>
            <a href={company.emailHref} target="_blank" rel="noopener noreferrer" className="contact-line">
              <Icon name="mail" size={18} /> {company.email}
            </a>
            <Link to="/yhteystiedot#varaus" className="btn btn-primary btn-block">
              {t.nav.book}
            </Link>
          </aside>
        </div>
      </section>
    </>
  )
}
