import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import { skillCategories } from "../data/portfolio";
import { SkillIcon } from "../utils/skillIconMap";

export function Skills() {
  return (
    <AnimatedSection id="skills" className="section skills">
      <div className="container">
        <AnimatedItem>
          <div className="section__header">
            <span className="section__label">Expertise</span>
            <h2 className="section__title">Skills & Tools</h2>
            <p className="section__desc">
              Technologies, tools, and frontend practices I use to build
              responsive, scalable, and user-friendly interfaces.
            </p>
          </div>
        </AnimatedItem>

        <div className="skills__groups">
          {skillCategories.map((category, index) => (
            <AnimatedItem key={category.name}>
              <div className="skills__group">
                <div className="skills__group-info">
                  <span className="skills__group-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="skills__group-title">{category.name}</h3>
                    <p className="skills__group-desc">{category.description}</p>
                  </div>
                </div>

                <div className="skills__list">
                  {category.skills.map((skill) => (
                    <span className="skills__item" key={skill}>
                      <span className="skills__item-icon">
                        <SkillIcon label={skill} />
                      </span>

                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
