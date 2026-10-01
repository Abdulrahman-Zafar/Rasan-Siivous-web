import { Link } from 'react-router-dom'
import { useLang } from '../i18n/context'

export default function NotFound() {
  const { t } = useLang()
  return (
    <section className="section not-found">
      <div className="container narrow">
        <span className="not-found-code">404</span>
        <h1>{t.notFound.title}</h1>
        <p>{t.notFound.text}</p>
        <Link to="/" className="btn btn-primary">{t.notFound.back}</Link>
      </div>
    </section>
  )
}
