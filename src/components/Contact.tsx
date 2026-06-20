import { motion } from "framer-motion";
import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineSparkles,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

const GOOGLE_SHEET_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwma8ojeixqv97ln8X6n4UbM9A-WePH16_vZfHVxpNa1lJfQ6FC7741R0XLFmirYjQy/exec";

const contactInfo = [
  {
    label: "Email",
    value: "riya.goyal.dev@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=riya.goyal.dev@gmail.com&su=Project%20Inquiry%20from%20Portfolio",
    icon: HiOutlineMail,
  },
  {
    label: "Phone",
    value: "+91 992776279",
    href: "tel:+91992776279",
    icon: HiOutlinePhone,
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/riyagoyal279/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/riya-goyal279",
    icon: FaGithub,
  },
];

const quickPoints = [
  "Share your design, website link, or idea",
  "Mention what you want to build, fix, or improve",
  "Add your expected timeline if you have one",
];

export function Contact() {
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const submitToGoogleSheet = async (form: HTMLFormElement) => {
    if (GOOGLE_SHEET_SCRIPT_URL.includes("PASTE_YOUR")) {
      setStatus("error");
      setStatusMessage("Google Sheet script URL is not added yet.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    const formData = new FormData(form);
    const payload = new URLSearchParams();

    formData.forEach((value, key) => {
      payload.append(key, String(value));
    });

    try {
      await fetch(GOOGLE_SHEET_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });

      setStatus("success");
      setStatusMessage(
        "Thanks! Your project details were submitted successfully.",
      );
      form.reset();

      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    } catch {
      setStatus("error");
      setStatusMessage("Unable to submit right now. Please email me directly.");
    }
  };

  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";

  return (
    <AnimatedSection id="contact" className="section contact">
      <div className="container">
        <AnimatedItem>
          <div className="section__header section__header--center">
            <span className="section__label">Get in Touch</span>
            <h2 className="section__title">
              Let’s build something your users will love
            </h2>
            <p className="section__desc">
              Share your project idea, design, or website issue. I’ll help you
              turn it into a clean, responsive, and polished frontend
              experience.
            </p>
          </div>
        </AnimatedItem>

        <div className="contact__grid">
          <AnimatedItem>
            <div className="contact__side-card">
              <span className="contact__side-icon">
                <HiOutlineSparkles />
              </span>

              <h3>Ready to improve your frontend?</h3>

              <div className="contact__quick-list">
                {quickPoints.map((point) => (
                  <div className="contact__quick-item" key={point}>
                    <span />
                    <p>{point}</p>
                  </div>
                ))}
              </div>

              <div className="contact__info-list">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const isExternal = item.href.startsWith("http");

                  return (
                    <a
                      className="contact__info-card"
                      href={item.href}
                      key={item.label}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      <span className="contact__info-icon">
                        <Icon />
                      </span>

                      <span>
                        <small>{item.label}</small>
                        {item.value}
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="contact__socials">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__social-link"
                      aria-label={social.label}
                    >
                      <Icon size={17} />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <form
              className="contact__form"
              onSubmit={(e) => {
                e.preventDefault();
                void submitToGoogleSheet(e.currentTarget);
              }}
            >
              <div className="contact__form-top">
                <span className="contact__form-label">Project Inquiry</span>
                <h3>Tell me what you need built.</h3>
                <p>
                  Add your project type, timeline, and any reference link if
                  available.
                </p>
              </div>

              <input
                type="text"
                name="company"
                className="contact__botcheck"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="projectType">Project type</label>
                <input
                  type="text"
                  id="projectType"
                  name="project_type"
                  placeholder="Landing page, React UI, frontend fixes..."
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message">Project details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me what you want to build, fix, or improve..."
                  required
                />
              </div>

              {statusMessage && (
                <p
                  className={`contact__status ${
                    isSuccess ? "contact__status--success" : ""
                  } ${isError ? "contact__status--error" : ""}`}
                >
                  {isSuccess && <HiOutlineCheckCircle />}
                  {isError && <HiOutlineExclamationCircle />}
                  <span>{statusMessage}</span>
                </p>
              )}

              <motion.button
                type="submit"
                className="btn btn--primary btn--lg contact__submit"
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                <span>
                  {isLoading
                    ? "Submitting..."
                    : isSuccess
                      ? "Details Submitted"
                      : "Start the Conversation"}
                </span>

                {isSuccess ? <HiOutlineCheckCircle /> : <HiOutlineArrowRight />}
              </motion.button>
            </form>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
