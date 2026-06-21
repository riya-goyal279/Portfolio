import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiOutlineArrowRight, HiX } from "react-icons/hi";
import { navLinks } from "../data/portfolio";

const projectNavLinks = [
  {
    label: "Intro",
    href: "#project-top",
  },
  {
    label: "Overview",
    href: "#project-overview",
  },
  {
    label: "Features",
    href: "#project-features",
  },
  {
    label: "Challenges",
    href: "#project-challenges",
  },
  {
    label: "Skills",
    href: "#project-skills",
  },
  {
    label: "Impact",
    href: "#project-impact",
  },
  {
    label: "Social",
    href: "#project-social-proof",
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  const location = useLocation();

  const isProjectPage = location.pathname.startsWith("/projects/");

  const currentNavLinks = useMemo(() => {
    return isProjectPage ? projectNavLinks : navLinks;
  }, [isProjectPage]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);

    if (!isProjectPage && latest < 160) {
      setActiveSection("");
    }
  });

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;

      if (!isProjectPage && window.scrollY < 160) {
        setActiveSection("");
        return;
      }

      if (!isProjectPage) {
        const contactSection = document.querySelector(
          "#contact",
        ) as HTMLElement | null;

        if (
          contactSection &&
          scrollPosition >= contactSection.offsetTop - 120
        ) {
          setActiveSection("");
          return;
        }
      }

      let currentSection = isProjectPage ? "#project-top" : "";

      currentNavLinks.forEach((link) => {
        if (
          !isProjectPage &&
          (link.href === "#home" || link.href === "#contact")
        ) {
          return;
        }

        const section = document.querySelector(link.href) as HTMLElement | null;

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = link.href;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isProjectPage, location.pathname, currentNavLinks]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    if (!isProjectPage && (href === "#home" || href === "#contact")) {
      setActiveSection("");
    } else {
      setActiveSection(href);
    }

    setMenuOpen(false);
  };

  const contactHref = isProjectPage ? "/#contact" : "#contact";

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <nav className="navbar__inner container">
        <Link
          to="/"
          className="navbar__logo"
          onClick={() => {
            setActiveSection("");
            setMenuOpen(false);
          }}
        >
          <span className="navbar__logo-text">
            Riya <span>Goyal</span>
          </span>
        </Link>

        <ul className="navbar__links">
          {currentNavLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link ${
                  activeSection === link.href ? "navbar__link--active" : ""
                }`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Link
          to={isProjectPage ? "/#contact" : "#contact"}
          className="navbar__cta"
          onClick={() => {
            setActiveSection("");
            setMenuOpen(false);
          }}
        >
          <span>Contact</span>
          <HiOutlineArrowRight />
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </nav>

      <motion.div
        className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}
        initial={false}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <div className="container">
          <ul>
            {currentNavLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar__mobile-link ${
                    activeSection === link.href
                      ? "navbar__mobile-link--active"
                      : ""
                  }`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <Link
                to={isProjectPage ? "/#contact" : "#contact"}
                className="navbar__mobile-cta"
                onClick={() => {
                  setActiveSection("");
                  setMenuOpen(false);
                }}
              >
                <span>Contact</span>
                <HiOutlineArrowRight />
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.header>
  );
}
