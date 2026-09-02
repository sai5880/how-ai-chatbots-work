import { motion } from 'framer-motion'
import SlideShell from '../components/SlideShell.jsx'
import { rise } from '../lib/motion.js'
import { MailIcon, ChatIcon, ChartIcon, CodeIcon } from '../components/Icons.jsx'

const USES = [
  {
    icon: MailIcon,
    title: 'An email agent',
    body: 'Reads your inbox, drafts replies, sorts and trims, even books meetings and attaches the right files.',
  },
  {
    icon: ChatIcon,
    title: 'A WhatsApp agent',
    body: 'Answers customers any hour, in their own language, then hands to a human the moment a query turns tricky.',
  },
  {
    icon: CodeIcon,
    title: 'An analytics agent',
    body: 'It plans the SQL query, brings the data from your database to the user, and presents it with a chart or visualization.',
  },
]

export default function SlideAgentsIntro() {
  return (
    <SlideShell
      eyebrow="Opening"
      title="What is an AI agent?"
      lead="Think of an agent as a smart helper with a to do list and a toolbox. You give it a goal, it breaks it into steps, uses tools, and reports back when the job is done."
    >
      <div className="grid4">
        {USES.map((u) => (
          <motion.article key={u.title} variants={rise} className="card use-card">
            <span className="icon-badge">
              <u.icon size={22} />
            </span>
            <h3>{u.title}</h3>
            <p>{u.body}</p>
          </motion.article>
        ))}
      </div>
    </SlideShell>
  )
}