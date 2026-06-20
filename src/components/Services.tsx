import { AnimatedSection, AnimatedItem } from './AnimatedSection';
import { services } from '../data/portfolio';

export function Services() {
  return (
    <AnimatedSection id="services" className="section services">
      <div className="container">
        <AnimatedItem>
          <div className="section__header">
            <span className="section__label">What I Do</span>
            <h2 className="section__title">Services</h2>
            <p className="section__desc">
              Frontend services focused on clean interfaces, responsive layouts, reusable components, and smooth user experiences.
            </p>
          </div>
        </AnimatedItem>

        <div className="services__grid">
          {services.map((service) => (
            <AnimatedItem key={service.title}>
              <div className="service-card">
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
