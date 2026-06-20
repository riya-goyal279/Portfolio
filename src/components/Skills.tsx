import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import { skillCategories } from "../data/portfolio";
import type { ReactNode } from "react";

import {
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
  SiReact,
  SiRedux,
  SiJquery,
  SiBootstrap,
  SiTailwindcss,
  SiWebpack,
  SiVite,
  SiNpm,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiBabel,
  SiSwiper,
  SiZod,
  SiGooglemaps,
} from "react-icons/si";

import {
  FaCode,
  FaUniversalAccess,
  FaMapMarkerAlt,
  FaWpforms,
  FaVideo,
} from "react-icons/fa";

import {
  MdApi,
  MdPayment,
  MdSpeed,
  MdDevices,
  MdOutlineIntegrationInstructions,
  MdAnimation,
} from "react-icons/md";

import { TbBrandThreejs, TbSeo, TbRobot, TbTimeline } from "react-icons/tb";

import { LuPackage } from "react-icons/lu";

const skillIcons: Record<string, ReactNode> = {
  HTML5: <SiHtml5 />,
  CSS3: <SiCss />,
  SCSS: <SiSass />,
  JavaScript: <SiJavascript />,
  React: <SiReact />,
  "Redux Toolkit": <SiRedux />,
  jQuery: <SiJquery />,
  Bootstrap: <SiBootstrap />,
  "Tailwind CSS": <SiTailwindcss />,

  "Responsive Design": <MdDevices />,
  "Reusable Components": <FaCode />,
  "Cross-Browser Compatibility": <MdOutlineIntegrationInstructions />,
  Accessibility: <FaUniversalAccess />,
  SEO: <TbSeo />,
  "Performance Optimization": <MdSpeed />,

  "API Integration": <MdApi />,
  "Form Development": <FaWpforms />,
  "OTP Workflows": <MdOutlineIntegrationInstructions />,
  "Payment Gateway Integration": <MdPayment />,
  "Map Integration": <FaMapMarkerAlt />,
  "Video Player Integration": <FaVideo />,
  "Real-Time Data Rendering": <MdSpeed />,
  "LLM API Integration": <TbRobot />,

  Webpack: <SiWebpack />,
  Vite: <SiVite />,
  Parcel: <LuPackage />,
  Babel: <SiBabel />,
  npm: <SiNpm />,

  Git: <SiGit />,
  GitHub: <SiGithub />,
  Bitbucket: <SiBitbucket />,

  GSAP: <MdAnimation />,
  ScrollTrigger: <TbTimeline />,
  "Three.js": <TbBrandThreejs />,
  "Swiper.js": <SiSwiper />,
  "Plyr.js": <FaVideo />,
  Zod: <SiZod />,
  "Google Maps API": <SiGooglemaps />,
  "PayU Integration": <MdPayment />,
};

const skillIconColors: Record<string, string> = {
  // Frontend Core
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  SCSS: "#CC6699",
  JavaScript: "#F7DF1E",
  React: "#61DAFB",
  "Redux Toolkit": "#764ABC",
  jQuery: "#0769AD",
  Bootstrap: "#7952B3",
  "Tailwind CSS": "#06B6D4",

  // UI Development
  "Responsive Design": "#2563EB",
  "Reusable Components": "#7C3AED",
  "Cross-Browser Compatibility": "#F59E0B",
  Accessibility: "#22C55E",
  SEO: "#0EA5E9",
  "Performance Optimization": "#EF4444",

  // Frontend Features
  "API Integration": "#14B8A6",
  "Form Development": "#6366F1",
  "OTP Workflows": "#8B5CF6",
  "Payment Gateway Integration": "#0F766E",
  "Map Integration": "#EA4335",
  "Video Player Integration": "#DC2626",
  "Real-Time Data Rendering": "#0284C7",
  "LLM API Integration": "#9333EA",

  // Build Tools & Workflow
  Webpack: "#8DD6F9",
  Vite: "#646CFF",
  Parcel: "#D97706",
  Babel: "#F9DC3E",
  npm: "#CB3837",

  // Version Control
  Git: "#F05032",
  GitHub: "#181717",
  Bitbucket: "#0052CC",

  // Other Libraries & Integrations
  GSAP: "#88CE02",
  ScrollTrigger: "#88CE02",
  "Three.js": "#000000",
  "Swiper.js": "#6332F6",
  "Plyr.js": "#00B3FF",
  Zod: "#3068B7",
  "Google Maps API": "#4285F4",
  "PayU Integration": "#00AEEF",
};

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
                      {skillIcons[skill] && (
                        <span
                          className="skills__item-icon"
                          style={{
                            color: skillIconColors[skill] || "var(--accent)",
                          }}
                        >
                          {skillIcons[skill]}
                        </span>
                      )}

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
