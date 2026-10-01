export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'logo-light' : ''}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <rect width="34" height="34" rx="9" fill="var(--primary)" />
        <path
          d="M17 7.5l2.3 6.2 6.2 2.3-6.2 2.3L17 24.5l-2.3-6.2L8.5 16l6.2-2.3z"
          fill="#fff"
        />
        <circle cx="25" cy="25" r="2" fill="var(--accent)" />
      </svg>
      <span className="logo-text">
        Rasan<span>Siivous</span>
      </span>
    </span>
  )
}
