import type { IconType } from "react-icons";

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
  SiBabel,
  SiNpm,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiSwiper,
  SiZod,
  SiGooglemaps,
} from "react-icons/si";

import {
  MdDevices,
  MdOutlineIntegrationInstructions,
  MdSpeed,
  MdApi,
  MdPayment,
  MdAnimation,
  MdKeyboardVoice,
  MdOndemandVideo,
  MdOutlineSettingsInputComposite,
  MdRecordVoiceOver,
  MdSmartToy,
  MdViewCarousel,
} from "react-icons/md";

import {
  FaCode,
  FaUniversalAccess,
  FaWpforms,
  FaMapMarkerAlt,
  FaVideo,
} from "react-icons/fa";

import { TbSeo, TbRobot, TbTimeline, TbBrandThreejs } from "react-icons/tb";
import { LuPackage } from "react-icons/lu";

import {
  HiOutlineCube,
  HiOutlineRefresh,
  HiOutlineSparkles,
} from "react-icons/hi";

export const skillIcons: Record<string, IconType> = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  SCSS: SiSass,
  JavaScript: SiJavascript,
  React: SiReact,
  "Redux Toolkit": SiRedux,
  jQuery: SiJquery,
  Bootstrap: SiBootstrap,
  "Tailwind CSS": SiTailwindcss,

  "Responsive Design": MdDevices,
  "Reusable Components": FaCode,
  "Cross-Browser Compatibility": MdOutlineIntegrationInstructions,
  Accessibility: FaUniversalAccess,
  SEO: TbSeo,
  "Performance Optimization": MdSpeed,

  "API Integration": MdApi,
  "Form Development": FaWpforms,
  "OTP Workflows": MdOutlineIntegrationInstructions,
  "Payment Gateway Integration": MdPayment,
  "Payment Gateway": MdPayment,
  "Map Integration": FaMapMarkerAlt,
  "Video Player Integration": FaVideo,
  "Real-Time Data Rendering": MdSpeed,
  "LLM API Integration": TbRobot,

  Webpack: SiWebpack,
  Vite: SiVite,
  Parcel: LuPackage,
  Babel: SiBabel,
  npm: SiNpm,

  Git: SiGit,
  GitHub: SiGithub,
  Bitbucket: SiBitbucket,

  GSAP: MdAnimation,
  ScrollTrigger: TbTimeline,
  "Three.js": TbBrandThreejs,
  "Swiper.js": SiSwiper,
  "Plyr.js": FaVideo,
  Zod: SiZod,
  "Google Maps API": SiGooglemaps,
  "PayU Integration": MdPayment,

  "AI Implementation": MdSmartToy,
  "LLM APIs": HiOutlineSparkles,
  "Streaming Responses": HiOutlineRefresh,
  "Speech Input": MdKeyboardVoice,
  "Text-to-Speech": MdRecordVoiceOver,
  "CMS-driven Components": HiOutlineCube,
  "Custom Scroll Interactions": MdOutlineSettingsInputComposite,
  "Carousel Development": MdViewCarousel,
  "Video Integration": MdOndemandVideo,
};

export const skillIconColors: Record<string, string> = {
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  SCSS: "#CC6699",
  JavaScript: "#F7DF1E",
  React: "#61DAFB",
  "Redux Toolkit": "#764ABC",
  jQuery: "#0769AD",
  Bootstrap: "#7952B3",
  "Tailwind CSS": "#06B6D4",

  "Responsive Design": "#2563EB",
  "Reusable Components": "#7C3AED",
  "Cross-Browser Compatibility": "#F59E0B",
  Accessibility: "#22C55E",
  SEO: "#0EA5E9",
  "Performance Optimization": "#EF4444",

  "API Integration": "#14B8A6",
  "Form Development": "#6366F1",
  "OTP Workflows": "#8B5CF6",
  "Payment Gateway Integration": "#0F766E",
  "Payment Gateway": "#0F766E",
  "Map Integration": "#EA4335",
  "Video Player Integration": "#DC2626",
  "Real-Time Data Rendering": "#0284C7",
  "LLM API Integration": "#9333EA",

  Webpack: "#8DD6F9",
  Vite: "#646CFF",
  Parcel: "#D97706",
  Babel: "#F9DC3E",
  npm: "#CB3837",

  Git: "#F05032",
  GitHub: "#181717",
  Bitbucket: "#0052CC",

  GSAP: "#88CE02",
  ScrollTrigger: "#88CE02",
  "Three.js": "#000000",
  "Swiper.js": "#6332F6",
  "Plyr.js": "#00B3FF",
  Zod: "#3068B7",
  "Google Maps API": "#4285F4",
  "PayU Integration": "#00AEEF",

  "AI Implementation": "#9333EA",
  "LLM APIs": "#7C3AED",
  "Streaming Responses": "#0284C7",
  "Speech Input": "#2563EB",
  "Text-to-Speech": "#DC2626",
  "CMS-driven Components": "#0F766E",
  "Custom Scroll Interactions": "#EA580C",
  "Carousel Development": "#6332F6",
  "Video Integration": "#DC2626",
};

export function SkillIcon({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const Icon = skillIcons[label];

  if (!Icon) {
    return null;
  }

  return (
    <Icon
      className={className}
      style={{ color: skillIconColors[label] || "currentColor" }}
    />
  );
}

export function getSkillIconColor(label: string) {
  return skillIconColors[label] || "currentColor";
}
