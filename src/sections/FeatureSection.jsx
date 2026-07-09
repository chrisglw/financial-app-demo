import PhoneFrame from '../components/PhoneFrame'
import './FeatureSection.css'

function FeatureSection({ title, copy, mockup }) {
  return (
    <section className="section section-feature">
      <div className="section-feature-inner">
        <div className="section-feature-copy">
          <h2>{title || 'Feature Section'}</h2>
          <p>{copy || 'TODO: text copy + phone-framed mockup, alternating layout'}</p>
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
