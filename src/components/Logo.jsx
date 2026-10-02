export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'logo-light' : ''}`}>
      <img src="/images/logo-icon.png" alt="" className="logo-icon" width="42" height="44" />
      <span className="logo-text">
        Rasan <span>Siivous</span> Oy
      </span>
    </span>
  )
}
