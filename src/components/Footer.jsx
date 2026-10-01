import { Link } from 'react-router-dom'
import { useLang } from '../i18n/context'
import { company, serviceIds } from '../i18n/translations'
import Icon from './Icons'
import Logo from './Logo'

const year = new Date().getFullYear()

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>{t.footer.tagline}</p>
          <p className="footer-id">
            {t.contact.businessId}: {company.businessId}
          </p>
        </div>

        <div>
          <h3>{t.footer.services}</h3>
          <ul>
            {serviceIds.map((id) => (
              <li key={id}>
                <Link to={`/palvelut#${id}`}>{t.services.items[id].name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>{t.footer.company}</h3>
          <ul>
            <li><Link to="/meista">{t.nav.about}</Link></li>
            <li><Link to="/palvelut">{t.nav.services}</Link></li>
            <li><Link to="/ukk">{t.nav.faq}</Link></li>
            <li><Link to="/yhteystiedot#varaus">{t.nav.book}</Link></li>
            <li><Link to="/tietosuoja">{t.footer.privacy}</Link></li>
          </ul>
        </div>

        <div>
          <h3>{t.footer.contact}</h3>
          <ul className="footer-contact">
            <li>
              <Icon name="phone" size={16} />
              <a href={company.phoneHref} target="_blank" rel="noopener noreferrer">{company.phone}</a>
            </li>
            <li>
              <Icon name="mail" size={16} />
              <a href={company.emailHref} target="_blank" rel="noopener noreferrer">{company.email}</a>
            </li>
            <li>
              <Icon name="pin" size={16} />
              <span>
                {company.address}
                <br />
                {company.postal}
              </span>
            </li>
            <li>
              <Icon name="clock" size={16} />
              <span>{t.topbar.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>
            © {year} {company.name}. {t.footer.rights}
          </span>
          <Link to="/tietosuoja">{t.footer.privacy}</Link>
        </div>
      </div>
    </footer>
  )
}
