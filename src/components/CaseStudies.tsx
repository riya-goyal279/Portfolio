import { AnimatedSection, AnimatedItem } from './AnimatedSection';
import { caseStudies } from '../data/portfolio';

export function CaseStudies() {
  return (
    <AnimatedSection id="case-studies" className="section case-studies">
      <div className="container">
        <AnimatedItem>
          <div className="section__header">
            <span className="section__label">Deep Dives</span>
            <h2 className="section__title">Case studies</h2>
            <p className="section__desc">
              Real problems, clear solutions, and outcomes that matter to the business.
            </p>
          </div>
        </AnimatedItem>

        <div className="case-studies__list">
          {caseStudies.map((study) => (
            <AnimatedItem key={study.id}>
              <div className="case-card">
                <div className="case-card__content">
                  <div className="case-card__header">
                    <h3 className="case-card__client">{study.client}</h3>
                    <p className="case-card__tagline">{study.tagline}</p>
                  </div>

                  <div className="case-card__body">
                    <div className="case-card__block">
                      <h4>The Challenge</h4>
                      <p>{study.challenge}</p>
                    </div>
                    <div className="case-card__block">
                      <h4>The Solution</h4>
                      <p>{study.solution}</p>
                    </div>
                  </div>

                  <div className="case-card__results">
                    {study.results.map((result) => (
                      <div key={result.label} className="case-card__metric">
                        <span className="case-card__metric-value">{result.metric}</span>
                        <span className="case-card__metric-label">{result.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
