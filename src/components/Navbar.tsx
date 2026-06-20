import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiOutlineArrowRight, HiX } from "react-icons/hi";
import { navLinks } from "../data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);

    if (latest < 160) {
      setActiveSection("");
    }
  });

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;

      if (window.scrollY < 160) {
        setActiveSection("");
        return;
      }

      const contactSection = document.querySelector(
        "#contact",
      ) as HTMLElement | null;

      if (contactSection && scrollPosition >= contactSection.offsetTop - 120) {
        setActiveSection("");
        return;
      }

      let currentSection = "";

      navLinks.forEach((link) => {
        if (link.href === "#home" || link.href === "#contact") return;

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
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    if (href === "#home" || href === "#contact") {
      setActiveSection("");
    } else {
      setActiveSection(href);
    }

    setMenuOpen(false);
  };

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <nav className="navbar__inner container">
        <a
          href="#home"
          className="navbar__logo"
          onClick={() => handleNavClick("#home")}
        >
          <span className="navbar__logo-text">
            Riya <span>Goyal</span>
          </span>
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
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

        <a
          href="#contact"
          className="navbar__cta"
          onClick={() => handleNavClick("#contact")}
        >
          <span>Contact</span>
          <HiOutlineArrowRight />
        </a>

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
            {navLinks.map((link) => (
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
              <a
                href="#contact"
                className="navbar__mobile-cta"
                onClick={() => handleNavClick("#contact")}
              >
                <span>Contact</span>
                <HiOutlineArrowRight />
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.header>
  );
}
