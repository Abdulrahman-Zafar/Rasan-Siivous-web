import { Link } from 'react-router-dom'
import { useLang } from '../i18n/context'
import { images, serviceIcons, serviceIds } from '../i18n/translations'
import Icon from '../components/Icons'
import { CtaBand, PageHero } from '../components/Shared'

export default function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.title} text={s.text} image={images.renovation} />

      {/* Quick jump links */}
      <nav className="service-tabs" aria-label={t.nav.services}>
        <div className="container">
          {serviceIds.map((id) => (
            <a key={id} href={`#${id}`}>
              <Icon name={serviceIcons[id]} size={18} /> {s.items[id].name}
            </a>
          ))}
        </div>
      </nav>

      <section className="section">
        <div className="container service-details">
          {serviceIds.map((id, i) => {
            const item = s.items[id]
            return (
              <article key={id} id={id} className={`service-detail ${i % 2 ? 'reverse' : ''}`}>
                <div className="service-detail-img">
                  <img src={images[id]} alt={item.name} loading="lazy" decoding="async" width="800" height="560" />
                </div>
                <div className="service-detail-body">
                  <span className="icon-badge"><Icon name={serviceIcons[id]} size={22} /></span>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <h3 className="included-title">{t.common.included}</h3>
                  <ul className="check-list">
                    {item.features.map((f) => (
                      <li key={f}>
                        <Icon name="check" size={18} /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="service-detail-foot">
                    <Link to={`/yhteystiedot?palvelu=${id}#varaus`} className="btn btn-primary">
                      {id === 'renovation' ? t.common.quote : t.common.bookNow}
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
