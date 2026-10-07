import { Link } from 'react-router-dom'
import { useLang } from '../i18n/context'
import { images, serviceIcons, serviceIds } from '../i18n/translations'
import Icon from '../components/Icons'
import { CtaBand, SectionHeading } from '../components/Shared'

const whyIcons = ['users', 'shield', 'leaf', 'receipt', 'calendar', 'checkCircle']

export default function Home() {
  const { t } = useLang()
  const h = t.home

  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ '--hero-lg': `url(${images.hero})`, '--hero-sm': `url(${images.heroSmall})` }}>
        <span className="eyebrow eyebrow-light hero-eyebrow">{h.heroEyebrow}</span>
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-panel">
            <h1>{h.heroTitle}</h1>
            <p className="lead">{h.heroText}</p>
            <div className="hero-actions">
              <Link to="/yhteystiedot#varaus" className="btn btn-accent btn-lg">
                {h.heroCta} <Icon name="arrow" size={18} />
              </Link>
              <Link to="/palvelut" className="btn btn-outline-light btn-lg">
                {h.heroCta2}
              </Link>
            </div>
            </div>
            <ul className="hero-points">
              {h.heroPoints.map((p) => (
                <li key={p}>
                  <Icon name="checkCircle" size={18} /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container stats-grid">
          {h.stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={h.servicesEyebrow} title={h.servicesTitle} text={h.servicesText} center />
          <div className="services-grid">
            {serviceIds.map((id) => {
              const s = t.services.items[id]
              return (
                <Link key={id} to={`/palvelut#${id}`} className={`service-card ${id === 'renovation' ? 'featured' : ''}`}>
                  <div className="service-card-img">
                    <img src={images[id]} alt="" loading="lazy" decoding="async" width="600" height="400" />
                  </div>
                  <div className="service-card-body">
                    <span className="icon-badge"><Icon name={serviceIcons[id]} size={22} /></span>
                    <h3>{s.name}</h3>
                    <p>{s.short}</p>
                    <div className="service-card-foot">
                      <span className="link-arrow">
                        {t.common.readMore} <Icon name="arrow" size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow={h.stepsEyebrow} title={h.stepsTitle} center />
          <ol className="steps">
            {h.steps.map((step, i) => (
              <li key={step.title} className="step">
                <span className="step-num">{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why us */}
      <section className="section">
        <div className="container why-layout">
          <div className="why-media">
            <img src={images.interior} alt="" loading="lazy" decoding="async" width="800" height="600" />
            <div className="why-badge">
              <Icon name="star" size={20} />
              <div>
                <strong>{h.stats[0].value}</strong>
                <span>{h.stats[0].label}</span>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow={h.whyEyebrow} title={h.whyTitle} text={h.whyText} />
            <div className="why-grid">
              {h.why.map((w, i) => (
                <div key={w.title} className="why-item">
                  <span className="icon-badge small"><Icon name={whyIcons[i]} size={20} /></span>
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow={h.testimonialsEyebrow} title={h.testimonialsTitle} center />
          <div className="testimonials">
            {h.testimonials.map((r) => (
              <figure key={r.name} className="testimonial">
                <div className="stars" aria-label="5/5">
                  {Array.from({ length: 5 }, (_, i) => <Icon key={i} name="star" size={16} />)}
                </div>
                <blockquote>“{r.quote}”</blockquote>
                <figcaption>
                  <strong>{r.name}</strong>
                  <span>{r.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section">
        <div className="container areas">
          <div>
            <SectionHeading eyebrow={h.areasEyebrow} title={h.areasTitle} text={h.areasText} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
