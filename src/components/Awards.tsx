import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import awardCertificate from "../assets/passionate-performer-award.png";

const clientProofs = [
  "Recognized twice for exceptional performance",
  "Trusted for consistent ownership and delivery",
  "Appreciated for skills, knowledge, and continuous efforts",
];

export function Awards() {
  return (
    <AnimatedSection id="awards" className="section awards">
      <div className="container">
        <div className="awards__grid">
          <AnimatedItem>
            <div className="awards__content">
              <span className="section__label">Recognition</span>

              <h2 className="section__title awards__title">
                Recognized for performance, ownership, and consistent delivery.
              </h2>

              <p className="awards__text">
                I’ve received the Passionate Performer Award twice at Axeno
                Consulting, recognizing my commitment to quality work,
                continuous effort, and contribution to successful project
                delivery.
              </p>

              <p className="awards__text">
                For clients, this reflects how I approach work: clear ownership,
                reliable execution, attention to detail, and a strong focus on
                delivering polished frontend experiences.
              </p>
            </div>
            <div className="awards__proofs">
              {clientProofs.map((proof) => (
                <div className="awards__proof" key={proof}>
                  <span />
                  <p>{proof}</p>
                </div>
              ))}
            </div>
          </AnimatedItem>

          <AnimatedItem className="awards__right">
            <div className="awards__card">
              <div className="awards__card-header">
                <span className="awards__badge">Awarded Twice</span>
                <span className="awards__count">2x</span>
              </div>

              <div className="awards__certificate">
                <img
                  src={awardCertificate}
                  alt="Passionate Performer Award certificate awarded to Riya Goyal by Axeno Consulting"
                />
              </div>

              <div className="awards__main">

                <div>
                  <h3>Passionate Performer Award</h3>
                  <span>Axeno Consulting</span>
                  <p>
                    Awarded for exceptional performance, continuous efforts, and
                    meaningful contribution to organizational success.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
