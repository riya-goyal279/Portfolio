import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import { clientValues } from "../data/portfolio";

export function About() {
  return (
    <AnimatedSection id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <AnimatedItem>
            <div className="about__content">
              <span className="section__label">About Me</span>

              <h2 className="section__title about__title">
                I turn frontend ideas into clean, reliable web experiences.
              </h2>

              <div className="about__text-wrap">
                <p className="about__text">
                  I’m Riya Goyal, a Frontend Developer with 3+ years of
                  experience building responsive, scalable, and user-friendly
                  web interfaces.
                </p>

                <p className="about__text">
                  I enjoy working closely with businesses, startups, and
                  agencies to convert designs, ideas, and product requirements
                  into polished frontend experiences that are easy to use and
                  easy to maintain.
                </p>

                <p className="about__text">
                  My goal is to make the frontend side of your project feel
                  clear, smooth, and dependable, from the first section to the
                  final responsive detail.
                </p>
              </div>
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <div className="about__client-box">

              <h3 className="about__client-title">
                What you can expect while working with me
              </h3>

              <div className="about__client-list">
                {clientValues.map((item, index) => (
                  <div className="about__client-item" key={item.title}>
                    <span className="about__client-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
