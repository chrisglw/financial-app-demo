import PhoneFrame from '../components/PhoneFrame'
import './FeatureSection.css'

function FeatureSection({ eyebrow, title, copy, mockup, reverse = false }) {
  return (
    <section className={`section section-feature${reverse ? ' section-feature--reverse' : ''}`}>
      <div className="section-feature-inner">
        <div className="section-feature-copy">
          {eyebrow && <span className="section-feature-eyebrow">{eyebrow}</span>}
          <h2 className="section-feature-title">{title}</h2>
          <p className="section-feature-text">{copy}</p>
        </div>
        {mockup && (
          <div className="section-feature-mockup">
            <PhoneFrame>{mockup}</PhoneFrame>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeatureSection
