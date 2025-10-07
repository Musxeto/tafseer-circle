const JoinSection = ({ whatsapp }: { whatsapp: string }) => {
  return (
    <section className="p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-semibold">Join Us</h3>
        <p className="mt-4">All LGU brothers are welcome — even if you can attend for 20 minutes, you’re part of the khair.</p>
        <div className="mt-6">
          <a className="brand-btn" href={whatsapp} target="_blank" rel="noreferrer">Join on WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

export default JoinSection
