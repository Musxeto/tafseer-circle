const Hero = ({ whatsapp }: { whatsapp: string }) => {
  return (
    <section className="hero">
      <div className="max-w-4xl mx-auto">
        <img className="hero-logo" src="/logo.png" alt="Tafseer Circle LGU" />
        <h2 className="hero-title" style={{ marginTop: '0.75rem' }}>Connect with the Qur’an — Together</h2>
        <p className="mt-3">Join us for weekly collective reflection where sincerity guides our study, not titles.</p>
        <div className="mt-5">
          <a className="brand-btn" href={whatsapp} target="_blank" rel="noreferrer">Join the Circle</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
