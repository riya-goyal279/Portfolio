import { Link } from "react-router-dom";
import { HiOutlineArrowRight, HiOutlineExternalLink } from "react-icons/hi";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export function FeaturedWork() {
  return (
    <AnimatedSection id="projects" className="section featured-work">
      <div className="container">
        <AnimatedItem>
          <div className="section__header">
            <span className="section__label">Projects</span>
            <h2 className="section__title">Featured project work</h2>
            <p className="section__desc">
              Real projects where I built reusable frontend components, complex
              user flows, API integrations, and polished responsive interfaces.
            </p>
          </div>
        </AnimatedItem>

        <div className="featured-work__grid">
          <AnimatedItem>
            <article className="project-card">
              <div
                className="project-card__visual"
                style={{ background: "#E8EEF3" }}
              >
                <div className="project-card__visual-content">
                  <span>Automotive Website</span>
                  <h3>MG Select</h3>
                </div>

                <span className="project-card__year">2025</span>
              </div>

              <div className="project-card__body">
                <div className="project-card__meta">
                  <span>UI/Frontend Developer</span>
                  <span>Live Project</span>
                </div>

                <p className="project-card__desc">
                  Developed reusable, responsive frontend components for the MG
                  Select website, including e-booking, AI Assist, forms,
                  showroom locator, carousels, gallery, APIs, and advanced
                  scroll interactions.
                </p>

                <div className="project-card__highlights">
                  <div className="project-card__highlight">
                    <span />
                    <p>MG AI Assist with real-time streaming responses</p>
                  </div>

                  <div className="project-card__highlight">
                    <span />
                    <p>
                      Multi-step e-booking with OTP, APIs, and payment support
                    </p>
                  </div>

                  <div className="project-card__highlight">
                    <span />
                    <p>
                      Showroom locator with Google Maps, markers, and dealer
                      details
                    </p>
                  </div>
                </div>

                <div className="project-card__tech">
                  <span className="tag">jQuery</span>
                  <span className="tag">Bootstrap</span>
                  <span className="tag">API Integration</span>
                  <span className="tag">Google Maps API</span>
                  <span className="tag">AI Implementation</span>
                </div>

                <div className="project-card__actions">
                  <Link to="/projects/mg-select" className="project-card__link">
                    View Case Study
                    <HiOutlineArrowRight />
                  </Link>

                  <a
                    href="https://mgselect.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__external"
                    aria-label="Open MG Select live website"
                  >
                    <HiOutlineExternalLink />
                  </a>
                </div>
              </div>
            </article>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
