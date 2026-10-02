import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useLang } from '../i18n/context'
import { company, gmailCompose, serviceIds } from '../i18n/translations'
import Icon from '../components/Icons'
import { PageHero } from '../components/Shared'

const emptyForm = {
  service: '',
  size: '',
  frequency: 0,
  date: '',
  time: 3,
  name: '',
  email: '',
  phone: '',
  address: '',
  postal: '',
  message: '',
  consent: false,
}

function validate(form, e) {
  const errors = {}
  for (const key of ['service', 'name', 'email', 'phone', 'address', 'postal']) {
    if (!String(form[key]).trim()) errors[key] = e.required
  }
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = e.email
  if (form.phone && !/^\+?[\d\s-]{7,}$/.test(form.phone)) errors.phone = e.phone
  if (form.postal && !/^\d{5}$/.test(form.postal.trim())) errors.postal = e.postal
  if (!form.consent) errors.consent = e.consent
  return errors
}

const today = new Date().toISOString().slice(0, 10)

// Turns the filled form into a readable message for WhatsApp and email.
function bookingMessage(form, t) {
  const f = t.contact.form
  const lines = [
    [f.service, t.services.items[form.service]?.name],
    [f.size, form.size && `${form.size} m²`],
    [f.frequency, f.frequencies[form.frequency]],
    [f.date, form.date],
    [f.time, f.times[form.time]],
    [f.name, form.name],
    [f.email, form.email],
    [f.phone, form.phone],
    [f.address, `${form.address}, ${form.postal}`],
    [f.message, form.message],
  ]
    .filter(([, value]) => String(value ?? '').trim())
    .map(([label, value]) => `${label}: ${value}`)
  return [f.messageIntro, '', ...lines].join('\n')
}

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const f = c.form
  const [params] = useSearchParams()
  const preset = params.get('palvelu')

  const [form, setForm] = useState({
    ...emptyForm,
    service: serviceIds.includes(preset) ? preset : '',
  })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const text = bookingMessage(form, t)
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`
  const mailUrl = gmailCompose(`${f.emailSubject} – ${form.name}`, text)

  function update(e) {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const found = validate(form, f.errors)
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(`f-${Object.keys(found)[0]}`)?.focus()
      return
    }
    // Opens WhatsApp with the booking typed in; the customer only presses Send.
    window.open(whatsappUrl, '_blank', 'noopener')
    setSent(true)
  }

  function field(name, label, input, required = true) {
    return (
      <div className={`field ${errors[name] ? 'has-error' : ''}`}>
        <label htmlFor={`f-${name}`}>
          {label}
          {required && <span className="req" aria-hidden="true"> *</span>}
        </label>
        {input}
        {errors[name] && <span className="error" id={`e-${name}`}>{errors[name]}</span>}
      </div>
    )
  }

  const inputProps = (name) => ({
    id: `f-${name}`,
    name,
    value: form[name],
    onChange: update,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `e-${name}` : undefined,
  })

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} text={c.text} />

      <section className="section" id="varaus">
        <div className="container contact-layout">
          <div className="card form-card">
            {sent ? (
              <div className="form-success" role="status">
                <Icon name="checkCircle" size={56} />
                <h2>{f.successTitle}</h2>
                <p>{f.successText}</p>
                <div className="form-send-actions">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                    <Icon name="phone" size={18} /> {f.sendWhatsapp}
                  </a>
                  <a href={mailUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <Icon name="mail" size={18} /> {f.sendEmail}
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => {
                    setForm(emptyForm)
                    setSent(false)
                  }}
                >
                  {f.another}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2>{f.title}</h2>

                <div className="form-grid">
                  {field('service', f.service,
                    <select {...inputProps('service')}>
                      <option value="">{f.servicePlaceholder}</option>
                      {serviceIds.map((id) => (
                        <option key={id} value={id}>{t.services.items[id].name}</option>
                      ))}
                    </select>,
                  )}
                  {field('size', f.size,
                    <input type="number" min="10" max="2000" inputMode="numeric" {...inputProps('size')} />,
                    false,
                  )}
                  {field('frequency', f.frequency,
                    <select {...inputProps('frequency')}>
                      {f.frequencies.map((label, i) => <option key={label} value={i}>{label}</option>)}
                    </select>,
                    false,
                  )}
                  {field('date', f.date,
                    <input type="date" min={today} {...inputProps('date')} />,
                    false,
                  )}
                  {field('time', f.time,
                    <select {...inputProps('time')}>
                      {f.times.map((label, i) => <option key={label} value={i}>{label}</option>)}
                    </select>,
                    false,
                  )}
                  {field('name', f.name, <input type="text" autoComplete="name" {...inputProps('name')} />)}
                  {field('email', f.email, <input type="email" autoComplete="email" {...inputProps('email')} />)}
                  {field('phone', f.phone,
                    <input type="tel" autoComplete="tel" placeholder="+358 40 123 4567" {...inputProps('phone')} />,
                  )}
                  {field('address', f.address,
                    <input type="text" autoComplete="street-address" {...inputProps('address')} />,
                  )}
                  {field('postal', f.postal,
                    <input type="text" inputMode="numeric" maxLength={5} autoComplete="postal-code" placeholder="00100" {...inputProps('postal')} />,
                  )}
                </div>

                {field('message', f.message,
                  <textarea rows={4} placeholder={f.messagePlaceholder} {...inputProps('message')} />,
                  false,
                )}

                <div className={`field checkbox ${errors.consent ? 'has-error' : ''}`}>
                  <label>
                    <input
                      type="checkbox"
                      id="f-consent"
                      name="consent"
                      checked={form.consent}
                      onChange={update}
                    />
                    <span>
                      {f.consent} <Link to="/tietosuoja" target="_blank">{f.privacyLink}</Link>
                    </span>
                  </label>
                  {errors.consent && <span className="error">{errors.consent}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block">
                  {f.submit}
                </button>
                <p className="fine-print"><span className="req">*</span> {f.required}</p>
              </form>
            )}
          </div>

          <aside className="contact-aside">
            <div className="card">
              <h3>{c.infoTitle}</h3>
              <ul className="contact-info">
                <li>
                  <span className="icon-badge small"><Icon name="phone" size={18} /></span>
                  <div>
                    <small>{c.phone}</small>
                    <a href={company.phoneHref} target="_blank" rel="noopener noreferrer">{company.phone}</a>
                  </div>
                </li>
                <li>
                  <span className="icon-badge small"><Icon name="mail" size={18} /></span>
                  <div>
                    <small>{c.email}</small>
                    <a href={company.emailHref} target="_blank" rel="noopener noreferrer">{company.email}</a>
                  </div>
                </li>
                <li>
                  <span className="icon-badge small"><Icon name="pin" size={18} /></span>
                  <div>
                    <small>{c.address}</small>
                    <span>{company.address}, {company.postal}</span>
                  </div>
                </li>
                <li>
                  <span className="icon-badge small"><Icon name="clock" size={18} /></span>
                  <div>
                    <small>{c.hours}</small>
                    {c.hoursLines.map((l) => <span key={l}>{l}</span>)}
                  </div>
                </li>
              </ul>
            </div>
            <div className="map-card">
              <iframe
                title={c.mapTitle}
                src="https://www.openstreetmap.org/export/embed.html?bbox=25.0853%2C60.2108%2C25.1053%2C60.2188&layer=mapnik&marker=60.2148%2C25.0953"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
