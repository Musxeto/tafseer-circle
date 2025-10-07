import { FaBookOpen, FaComments, FaVideo, FaUsers } from 'react-icons/fa'

const Features = () => {
  const card = (Icon: React.ComponentType<{ className?: string }>, title: string, text: string) => (
    <div className="p-4 border rounded flex gap-3 items-start">
      <Icon className="text-2xl" />
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-2 text-sm">{text}</p>
      </div>
    </div>
  )

  return (
    <section className="p-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold">What We Do</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {card(FaBookOpen, 'Read & Reflect', "Understand the Qur'an with authentic tafseer.")}
          {card(FaComments, 'Discuss & Share', 'Everyone contributes their thoughts and reflections.')}
          {card(FaVideo, 'Record & Preserve', 'Sessions are recorded and shared for benefit.')}
          {card(FaUsers, 'Build Together', 'A student community built on sincerity, not titles.')}
        </div>
      </div>
    </section>
  )
}

export default Features
