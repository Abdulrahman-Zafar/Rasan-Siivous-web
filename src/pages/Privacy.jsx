import { useLang } from '../i18n/context'
import { PageHero } from '../components/Shared'

export default function Privacy() {
  const { t } = useLang()
  const p = t.privacy

  return (
    <>
      <PageHero title={p.title} text={p.updated} />
      <section className="section">
        <div className="container narrow legal">
          {p.sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
