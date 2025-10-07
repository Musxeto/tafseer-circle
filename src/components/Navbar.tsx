import { FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
  const whatsapp = 'https://chat.whatsapp.com/LxCZGjxPP0xH5FTyXoIeje'

  return (
    <nav className="site-header brand-nav-gold">
      <div className="logo" style={{ gap: '0.5rem' }}>
        <img src="/logo.png" alt="Tafseer Circle LGU logo" />
        <div>
          <h1 className="nav-title">Tafseer Circle – LGU</h1>
          <p className="text-xs" style={{ marginTop: 2 }}>Student-led Qur’an study circle</p>
        </div>
      </div>

      <div>
        <a className="brand-outline" href={whatsapp} target="_blank" rel="noreferrer" style={{ borderColor: '#3f2b02', color: '#3f2b02', padding: '0.35rem 0.75rem' }}>
          <FaWhatsapp style={{ marginRight: 6 }} /> Join
        </a>
      </div>
    </nav>
  )
}

export default Navbar
