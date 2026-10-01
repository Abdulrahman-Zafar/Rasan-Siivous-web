import { useLang } from '../i18n/context'
import { images } from '../i18n/translations'
import Icon from '../components/Icons'
import { CtaBand, PageHero, SectionHeading } from '../components/Shared'

const valueIcons = ['shield', 'star', 'leaf']

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} text={a.intro} image={images.helsinki} />

      <section className="section">
        <div className="container about-story">
          <div>
            <SectionHeading title={a.storyTitle} />
            {a.story.map((p) => <p key={p} className="prose">{p}</p>)}
            <div className="about-numbers">
              {a.numbers.map((n) => (
                <div key={n.label}>
                  <strong>{n.value}</strong>
                  <span>{n.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-img">
            <img src={images.windows} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading title={a.valuesTitle} center />
          <div className="values-grid">
            {a.values.map((v, i) => (
              <div key={v.title} className="card value-card">
                <span className="icon-badge"><Icon name={valueIcons[i]} size={22} /></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title={a.trustTitle} center />
          <ul className="trust-grid">
            {a.trust.map((item) => (
              <li key={item}>
                <Icon name="checkCircle" size={22} /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
