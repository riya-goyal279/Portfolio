import { HiOutlineArrowUp } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const footerSocials = [
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

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#home" className="footer__brand" aria-label="Back to home">
          Riya <span>Goyal</span>
        </a>

        <p className="footer__copyright">
          © {year} Riya Goyal. Crafted with care.
        </p>

        <div className="footer__right">
          <div className="footer__socials">
            {footerSocials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          <a href="#home" className="footer__top-link">
            <span>Top</span>
            <HiOutlineArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
