import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SkillIcon } from "../utils/skillIconMap";
import { HiOutlineArrowLeft, HiOutlineExternalLink, HiOutlineCheckCircle } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";

import {
  mgSelectProject,
  type ProjectData,
  type ProjectFeature,
  type ProjectMedia,
  type ProjectPoint,
} from "../data/mgSelectProjectData";

export function MGSelectProject() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="project-detail">
      <ProjectHero project={mgSelectProject} />
      <ProjectOverview overview={mgSelectProject.overview} />
      <ProjectFeatures features={mgSelectProject.features} />
      <ProjectChallenges challenges={mgSelectProject.challenges} />
      <ProjectSkills skills={mgSelectProject.skills} />
      <ProjectImpact impact={mgSelectProject.impact} />
      <ProjectSocialProof socialProof={mgSelectProject.socialProof} />
    </main>
  );
}

function ProjectHero({ project }: { project: ProjectData }) {
  return (
    <section className="project-detail__hero" id="project-top">
      <div className="container">
        <Link to="/#projects" className="project-detail__back">
          <HiOutlineArrowLeft />
          Back to projects
        </Link>

        <div className="project-detail__hero-grid">
          <div>
            <span className="project-detail__label">{project.hero.label}</span>

            <h1>{project.hero.title}</h1>

            <p>{project.hero.description}</p>

            <div className="project-detail__actions">
              {project.hero.actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  className={`btn btn--${action.variant}`}
                >
                  {action.label}
                  {action.external && <HiOutlineExternalLink />}
                </a>
              ))}
            </div>
          </div>

          <div className="project-detail__summary-card">
            {project.hero.summary.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>

                <strong>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-detail__summary-link"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectOverview({ overview }: { overview: ProjectData["overview"] }) {
  return (
    <section
      id="project-overview"
      className="project-detail__section project-overview-premium"
    >
      <div className="container">
        <div className="project-overview-premium__grid">
          <div className="project-overview-premium__heading">
            <span className="section__label">{overview.label}</span>

            <h2>{overview.title}</h2>
          </div>

          <div className="project-overview-premium__content">
            <p>{overview.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectFeatures({ features }: { features: ProjectData["features"] }) {
  return (
    <section
      id="project-features"
      className="project-detail__section project-features-section"
    >
      <div className="container">
        <SectionHeader
          label={features.label}
          title={features.title}
          description={features.description}
        />

        {features.items.map((feature) => (
          <ProjectFeatureCard key={feature.number} feature={feature} />
        ))}
      </div>
    </section>
  );
}

function ProjectFeatureCard({ feature }: { feature: ProjectFeature }) {
  const featureClassName =
    feature.layout === "ai"
      ? "project-feature-detail project-feature-detail--ai"
      : "project-feature-detail";

  if (feature.layout === "ai") {
    return (
      <div className={featureClassName}>
        <ProjectFeatureContent feature={feature} />

        <div className="project-feature-detail__ai-grid">
          {feature.points.map((point) => (
            <div className="project-feature-detail__ai-card" key={point.title}>
              <span>{point.title}</span>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={featureClassName}>
      <div className="project-feature-detail__top">
        <ProjectFeatureContent feature={feature} />

        {feature.media && <ProjectFeatureMedia media={feature.media} />}
      </div>

      <div className="project-feature-detail__point-grid">
        {feature.points.map((point) => (
          <ProjectPointCard key={point.title} point={point} />
        ))}
      </div>
    </div>
  );
}

function ProjectFeatureContent({ feature }: { feature: ProjectFeature }) {
  return (
    <div className="project-feature-detail__content">
      <div className="project-feature-detail__eyebrow">
        <span className="project-feature-detail__number">{feature.number}</span>

        <span className="project-feature-detail__tag">{feature.tag}</span>
      </div>

      <h3>{feature.title}</h3>

      <p>{feature.description}</p>
    </div>
  );
}

function ProjectFeatureMedia({ media }: { media: ProjectMedia }) {
  const [progress, setProgress] = useState(0);

  if (media.type === "video") {
    return (
      <figure className="project-feature-detail__media project-feature-detail__media--video">
        <video
          src={media.src}
          autoPlay
          muted
          loop
          playsInline
          aria-label={media.alt}
          onLoadedMetadata={(event) => {
            if (media.playbackRate) {
              event.currentTarget.playbackRate = media.playbackRate;
            }

            setProgress(0);
          }}
          onTimeUpdate={(event) => {
            const video = event.currentTarget;

            if (!video.duration) return;

            setProgress((video.currentTime / video.duration) * 100);
          }}
        />

        <span className="project-feature-detail__seekbar" aria-hidden="true">
          <span
            className="project-feature-detail__seekbar-progress"
            style={{ width: `${progress}%` }}
          />
        </span>
      </figure>
    );
  }

  return (
    <figure className="project-feature-detail__media project-feature-detail__media--image">
      <img src={media.src} alt={media.alt} loading="lazy" />
    </figure>
  );
}

function ProjectPointCard({ point }: { point: ProjectPoint }) {
  return (
    <div className="project-feature-detail__point-card">
      <span>{point.title}</span>
      <p>{point.description}</p>
    </div>
  );
}

function ProjectChallenges({
  challenges,
}: {
  challenges: ProjectData["challenges"];
}) {
  return (
    <section
      id="project-challenges"
      className="project-detail__section project-challenges-section"
    >
      <div className="container">
        <SectionHeader
          label={challenges.label}
          title={challenges.title}
          description={challenges.description}
        />

        <div className="project-challenges">
          <article className="project-challenges__hero">
            <div className="project-challenges__metric">
              <strong>{challenges.main.metricValue}</strong>
              <span>{challenges.main.metricLabel}</span>
            </div>

            <div className="project-challenges__hero-content">
              <span className="project-challenge__number">
                {challenges.main.number}
              </span>

              <h3>{challenges.main.title}</h3>

              {challenges.main.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="project-challenges__meta">
                {challenges.main.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>

          <div className="project-challenges__grid">
            {challenges.items.map((challenge) => (
              <article className="project-challenge" key={challenge.number}>
                <span className="project-challenge__number">
                  {challenge.number}
                </span>

                <h3>{challenge.title}</h3>

                {challenge.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>

          <div className="project-challenges__closing">
            <span>{challenges.closing.label}</span>
            <p>{challenges.closing.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectSkills({ skills }: { skills: ProjectData["skills"] }) {
  return (
    <section
      id="project-skills"
      className="project-detail__section project-detail__section--soft"
    >
      <div className="container">
        <div className="project-detail__section-header">
          <span className="section__label">{skills.label}</span>
          <h2>{skills.title}</h2>
        </div>

        <div className="project-detail__tech">
          {skills.items.map((skill) => (
            <ProjectSkillTag key={skill} label={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectImpact({ impact }: { impact: ProjectData["impact"] }) {
  return (
    <section
      id="project-impact"
      className="project-detail__section project-impact-section"
    >
      <div className="container">
        <div className="project-detail__section-header">
          <span className="section__label">{impact.label}</span>
          <h2>{impact.title}</h2>
        </div>

        <div className="project-detail__impact">
          {impact.items.map((item) => (
            <div className="project-impact" key={item}>
              <HiOutlineCheckCircle />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectSocialProof({
  socialProof,
}: {
  socialProof: ProjectData["socialProof"];
}) {
  return (
    <section
      id="project-social-proof"
      className="project-detail__section project-social-section"
    >
      <div className="container">
        <SectionHeader
          label={socialProof.label}
          title={socialProof.title}
          description={socialProof.description}
        />

        <div className="project-social">
          {socialProof.posts.map((post) => (
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-social__card"
              key={post.url}
            >
              <div className="project-social__top">
                <span className="project-social__icon">
                  <FaLinkedinIn />
                </span>

                <span className="project-social__badge">{post.badge}</span>
              </div>

              <span className="project-social__source">{post.source}</span>

              <h3>{post.title}</h3>

              <p>{post.description}</p>

              <span className="project-social__link">
                View LinkedIn Post
                <HiOutlineExternalLink />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="project-detail__section-header">
      <span className="section__label">{label}</span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

function ProjectSkillTag({ label }: { label: string }) {
  return (
    <span className="tag tag--icon">
      <span className="tag__icon">
        <SkillIcon label={label} />
      </span>

      {label}
    </span>
  );
}
