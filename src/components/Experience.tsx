import { motion } from "framer-motion";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import { experiences } from "../data/portfolio";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="section experience">
      <div className="container">
        <AnimatedItem>
          <div className="section__header">
            <span className="section__label">Experience</span>
            <h2 className="section__title">Professional Journey</h2>
            <p className="section__desc">
              A timeline of my frontend development experience, from internship
              to professional work and freelance projects.
            </p>
          </div>
        </AnimatedItem>

        <div className="experience__timeline">
          {experiences.map((item, index) => (
            <motion.div
              key={`${item.period}-${item.role}`}
              className="experience-item"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="experience-item__date">
                <span>{item.period}</span>
              </div>

              <div className="experience-item__marker">
                <span />
              </div>

              <div className="experience-item__content">
                <div className="experience-item__top">
                  <h3>{item.role}</h3>
                  <span>{item.location}</span>
                </div>

                <p className="experience-item__company">{item.company}</p>

                <p className="experience-item__desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
