import { motion } from 'framer-motion'
import SlideShell from '../components/SlideShell.jsx'
import { rise, pop } from '../lib/motion.js'
import { LayersIcon } from '../components/Icons.jsx'

const VEC = [45, 78, 30, 92, 55, 66, 22, 85, 40, 70]
const DOGS = ['dog', 'puppy', 'cat', 'kitten']
const FAR = ['skyscraper', 'pizza']

export default function SlideEmbeddings() {
  return (
    <SlideShell dense eyebrow="A closer look" title="Embeddings, what they really are">
      <div className="split even">
        <motion.div variants={rise} className="card">
          <span className="icon-badge">
            <LayersIcon size={22} />
          </span>
          <h3 className="emb-title">A token becomes a pile of numbers</h3>
          <p className="emb-txt">
            Each word points at a long list of numbers. Nobody types these. They are learned,
            nudged again and again during training until words used alike sit close together.
          </p>
          <div className="emb-demo">
            <div className="emb-vec">
              <span className="emb-bars">
                {VEC.map((v, i) => (
                  <i key={i} style={{ height: `${v}%` }} />
                ))}
              </span>
              <em>dog</em>
            </div>
            <span className="emb-arrow">&rarr;</span>
            <div className="emb-map">
              <span className="emb-map-dots">
                {DOGS.map((w) => (
                  <b key={w}>{w[0]}</b>
                ))}
                <i />
              </span>
              <span className="emb-map-far">
                {FAR.map((w) => (
                  <b key={w}>{w[0]}</b>
                ))}
              </span>
              <span className="emb-map-cap">
                <em>dog, puppy</em> close · <em>skyscraper</em> far
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={rise} className="card">
          <span className="icon-badge warn">
            <LayersIcon size={22} />
          </span>
          <h3 className="emb-title">How the numbers get learned</h3>
          <p className="emb-txt">
            The model starts with random numbers. Training reads millions of example sentences and,
            after each one, nudges the numbers: words used in the same context are pulled together,
            unrelated words are pushed apart. Repeat millions of times and a useful meaning map
            settles in.
          </p>
          <div className="emb-strip">
            <span className="chip">starts random</span>
            <span className="chip">pulled by context</span>
            <span className="chip">settles into a map</span>
          </div>
        </motion.div>
      </div>

      <motion.div variants={pop} className="emb-note">
        The Embedding Layer is just this map. It answers the simple question,
        how close is the meaning of these words to each other?
      </motion.div>
    </SlideShell>
  )
}