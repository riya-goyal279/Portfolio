import { AnimatedSection, AnimatedItem } from './AnimatedSection';
import { featuredWork } from '../data/portfolio';

export function FeaturedWork() {
  return (
    <AnimatedSection id="featured-work" className="section featured-work">
      <div className="container">
        <AnimatedItem>
          <div className="section__header">
            <span className="section__label">Portfolio</span>
            <h2 className="section__title">Featured work</h2>
            <p className="section__desc">
              Selected projects where strong UX and solid engineering came together.
            </p>
          </div>
        </AnimatedItem>

        <div className="featured-work__grid">
          {featuredWork.map((project) => (
            <AnimatedItem key={project.id}>
              <article className="project-card">
                <div
                  className="project-card__visual"
                  style={{ background: project.color }}
                >
                  <span className="project-card__year">{project.year}</span>
                </div>
                <div className="project-card__body">
                  <span className="project-card__category">{project.category}</span>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <div className="project-card__tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
