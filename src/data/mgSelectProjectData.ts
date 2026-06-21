import ebookingForm from "../assets/mgselect/ebooking-form.png";
import showroomLocator from "../assets/mgselect/showroom-locator.png";
import sectionWiseScrollingVideo from "../assets/mgselect/section-wise-scrolling.mp4";
import galleryLoadMore from "../assets/mgselect/gallery-load-more.mp4";
import scrollVideoBanner from "../assets/mgselect/scroll-video-banner.mp4";
import carouselComponents from "../assets/mgselect/carousel-components.png";
import customBanner from "../assets/mgselect/custom-banner.png";
import dayNightCarousel from "../assets/mgselect/mg-selectday-night-carousel.mp4";
import headerFooterComponents from "../assets/mgselect/header-footer-components.mp4";

export type ProjectAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  external?: boolean;
};

export type ProjectSummaryItem = {
  label: string;
  value: string;
  href?: string;
};

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  playbackRate?: number;
};

export type ProjectPoint = {
  title: string;
  description: string;
};

export type ProjectFeature = {
  number: string;
  tag: string;
  title: string;
  description: string;
  layout: "ai" | "media";
  media?: ProjectMedia;
  points: ProjectPoint[];
};

export type ProjectChallenge = {
  number: string;
  title: string;
  paragraphs: string[];
};

export type ProjectData = {
  hero: {
    label: string;
    title: string;
    description: string;
    actions: ProjectAction[];
    summary: ProjectSummaryItem[];
  };
  overview: {
    label: string;
    title: string;
    description: string;
  };
  features: {
    label: string;
    title: string;
    description: string;
    items: ProjectFeature[];
  };
  challenges: {
    label: string;
    title: string;
    description: string;
    main: {
      number: string;
      metricValue: string;
      metricLabel: string;
      title: string;
      paragraphs: string[];
      tags: string[];
    };
    items: ProjectChallenge[];
    closing: {
      label: string;
      description: string;
    };
  };
  skills: {
    label: string;
    title: string;
    items: string[];
  };
  impact: {
    label: string;
    title: string;
    items: string[];
  };
  socialProof: {
    label: string;
    title: string;
    description: string;
    posts: {
      source: string;
      title: string;
      description: string;
      badge: string;
      url: string;
    }[];
  };
};

export const mgSelectProject: ProjectData = {
  hero: {
    label: "Automotive Website",
    title: "MG Select",
    description:
      "A premium automotive website where I developed reusable, responsive frontend components, complex booking flows, AI-powered assistance, showroom discovery, API-driven forms, galleries, carousels, and advanced scroll-based interactions.",
    actions: [
      {
        label: "Visit Live Website",
        href: "https://mgselect.co.in",
        variant: "primary",
        external: true,
      },
      {
        label: "View Features",
        href: "#project-features",
        variant: "secondary",
      },
    ],
    summary: [
      {
        label: "Role",
        value: "UI/Frontend Developer",
      },
      {
        label: "Project Type",
        value: "Automotive Website",
      },
      {
        label: "Focus",
        value: "Reusable Frontend Components",
      },
      {
        label: "Website",
        value: "mgselect.co.in",
        href: "https://mgselect.co.in",
      },
    ],
  },

  overview: {
    label: "Overview",
    title: "Building scalable frontend experiences for a premium automotive brand.",
    description:
      "I worked as a UI Developer on the MG Select website, developing scalable and reusable frontend components for multiple business flows. The work included multi-step e-booking, OTP handling, API integrations, payment gateway support, customizable forms, banners, carousel components, gallery, footer, header navigation, showroom locator, AI Assist, and custom scroll-based user experiences.",
  },

  features: {
    label: "Key Features",
    title: "Complex frontend features built for real user journeys",
    description:
      "A closer look at the major frontend flows, integrations, and interaction-heavy components I developed for MG Select.",
    items: [
      {
        number: "01",
        tag: "AI Experience",
        title: "MG AI Assist",
        layout: "ai",
        description:
          "Built an AI-powered frontend assistant for MG Select with a smooth conversational experience across desktop and mobile. The assistant opens through a floating bottom-right button and supports typed queries, voice input, voice responses, formatted answers, and media-rich responses for a more engaging user journey.",
        points: [
          {
            title: "Real-time AI Responses",
            description:
              "Integrated LLM APIs with streaming responses, partial response handling, and incremental text rendering for a natural chat experience.",
          },
          {
            title: "Voice Interaction",
            description:
              "Added speech input and text-to-speech output so users can ask questions and listen to AI-generated responses.",
          },
          {
            title: "Media Handling",
            description:
              "Supported formatted AI responses along with media-based outputs, including images and videos when returned by the assistant.",
          },
          {
            title: "Responsive AI Interface",
            description:
              "Created separate desktop and mobile UI treatments with a floating trigger button for opening and closing the AI assistant.",
          },
        ],
      },
      {
        number: "02",
        tag: "Booking Flow",
        title: "Multi-step E-booking Form",
        layout: "media",
        description:
          "Built a reusable multi-screen e-booking flow for one of the most important conversion journeys on the MG Select website. The form handled user validation, OTP verification, API-driven steps, payment support, loading states, response handling, and a final thank-you screen.",
        media: {
          type: "image",
          src: ebookingForm,
          alt: "MG Select multi-step e-booking form screens",
        },
        points: [
          {
            title: "Validation & Feedback",
            description:
              "Created a reusable booking journey with validations, warnings, OTP, loaders, and clear user feedback.",
          },
          {
            title: "API Integration",
            description:
              "Integrated 6–7 APIs across the flow with proper success, error, and response-state handling.",
          },
          {
            title: "Payment Flow",
            description:
              "Added payment gateway support with a final confirmation and thank-you screen after completion.",
          },
          {
            title: "Launch Impact",
            description:
              "The initial pre-booking version successfully handled 100+ transactions on the first launch day.",
          },
        ],
      },
      {
        number: "03",
        tag: "Locator Experience",
        title: "Showroom Locator",
        layout: "media",
        description:
          "Built a showroom locator with Google Maps integration, city search, map markers, popups, and dealer details for selected locations. The feature helps users quickly find nearby MG Select showrooms with both map-based and list-based browsing.",
        media: {
          type: "image",
          src: showroomLocator,
          alt: "MG Select showroom locator with Google Maps, list view, markers, and dealer details",
        },
        points: [
          {
            title: "Google Maps",
            description:
              "Integrated Google Maps with custom markers, popup cards, showroom details, and selected location states.",
          },
          {
            title: "City Search",
            description:
              "Added city, showroom, and pin-code search so users can quickly discover relevant showroom locations.",
          },
          {
            title: "Map & List Views",
            description:
              "Built two browsing modes: one with map interaction and another list-only view for simpler showroom discovery.",
          },
          {
            title: "Auto Selection",
            description:
              "Clicking a showroom from the list automatically selects and highlights that location on the map, with current location selected by default.",
          },
        ],
      },
      {
        number: "04",
        tag: "Scroll Experience",
        title: "Section-wise Scrolling",
        layout: "media",
        description:
          "Built a custom section-wise scrolling experience for MG Select using mouse wheel, arrow keys, mobile touch gestures, and side pagination for direct section jumps. The interaction was implemented using Three.js and carefully handled across different section sizes and scroll behaviors.",
        media: {
          type: "video",
          src: sectionWiseScrollingVideo,
          alt: "MG Select section-wise scrolling demo",
          playbackRate: 1.25,
        },
        points: [
          {
            title: "Multiple Inputs",
            description:
              "Supported mouse wheel, keyboard arrow keys, and mobile touch gestures for smooth section navigation.",
          },
          {
            title: "Side Pagination",
            description:
              "Added side pagination so users can directly jump between sections without manually scrolling through the full page.",
          },
          {
            title: "Flexible Heights",
            description:
              "Handled full-screen sections, smaller-height sections, and layouts where each component had different content height.",
          },
          {
            title: "Inner Scroll Handling",
            description:
              "Managed sections with inner scroll areas so page-level scrolling and component-level scrolling worked without breaking the experience.",
          },
        ],
      },
      {
        number: "05",
        tag: "Gallery Experience",
        title: "Gallery with Load More API",
        layout: "media",
        description:
          "Created a responsive gallery component for MG Select where users can browse curated vehicle images and download wallpapers. The gallery uses API-based loading, where every Load More action fetches and displays 6 additional images without refreshing the page.",
        media: {
          type: "video",
          src: galleryLoadMore,
          alt: "MG Select gallery with responsive image grid and Load More button",
          playbackRate: 1.25,
        },
        points: [
          {
            title: "API-based Loading",
            description:
              "Integrated the gallery with an API so additional images are fetched dynamically when the user clicks Load More.",
          },
          {
            title: "6 Images Per Call",
            description:
              "Each Load More interaction fetches and renders 6 new images, keeping the initial page load lighter and faster.",
          },
          {
            title: "Responsive Grid",
            description:
              "Built a clean image grid that adjusts smoothly across desktop, tablet, and mobile screen sizes.",
          },
          {
            title: "Smooth Browsing",
            description:
              "Created a simple browsing experience where users can explore more vehicle images without leaving or refreshing the page.",
          },
        ],
      },
      {
        number: "06",
        tag: "Scroll Animation",
        title: "Scroll-controlled Video Banner",
        layout: "media",
        description:
          "Implemented a scroll-controlled video-frame banner where vehicle frames play forward or reverse based on mouse wheel and mobile touch interactions. The experience was built using Three.js to create a smooth vehicle animation effect driven by user scroll behavior.",
        media: {
          type: "video",
          src: scrollVideoBanner,
          alt: "MG Select scroll-controlled video banner demo",
          playbackRate: 1.5,
        },
        points: [
          {
            title: "Frame-by-frame Scroll",
            description:
              "Changed video frames smoothly on every scroll interaction to create a controlled animation effect.",
          },
          {
            title: "Forward & Reverse",
            description:
              "Played frames forward or backward depending on the user’s scroll direction.",
          },
          {
            title: "Three.js Based",
            description:
              "Used Three.js to manage the scroll-driven visual experience and create a smoother animated banner.",
          },
          {
            title: "Desktop & Mobile",
            description:
              "Handled both mouse wheel and mobile touch interactions for a consistent responsive experience.",
          },
        ],
      },
      {
        number: "07",
        tag: "Carousel System",
        title: "Carousel Components",
        layout: "media",
        description:
          "Developed multiple customizable carousel variations for different MG Select sections, supporting images, videos, autoplay, loop, flexible content management, and several carousel-specific configuration options.",
        media: {
          type: "image",
          src: carouselComponents,
          alt: "MG Select reusable carousel component with image and video support",
        },
        points: [
          {
            title: "Media Support",
            description:
              "Built carousel variations that support both image and video slides across different website sections.",
          },
          {
            title: "Carousel Controls",
            description:
              "Added support for autoplay, loop, slide behavior, and multiple configuration options.",
          },
          {
            title: "Flexible Content",
            description:
              "Created reusable layouts where carousel content can be managed and adjusted based on section requirements.",
          },
          {
            title: "Header Theme",
            description:
              "Updated the header theme based on slide brightness, switching to white on dark slides and black on light slides.",
          },
        ],
      },
      {
        number: "08",
        tag: "Banner System",
        title: "Custom Banner Components",
        layout: "media",
        description:
          "Built reusable banner components supporting images, videos, carousel mode, headings, text, CTAs, theme variations, and flexible content placement so content can be positioned wherever needed inside the banner.",
        media: {
          type: "image",
          src: customBanner,
          alt: "MG Select customizable banner component with flexible content placement",
        },
        points: [
          {
            title: "Flexible Layout",
            description:
              "Supported flexible placement for headings, text, CTAs, and content blocks inside the banner.",
          },
          {
            title: "Media Options",
            description:
              "Built banner support for images, videos, and carousel mode depending on the content requirement.",
          },
          {
            title: "Theme Variations",
            description:
              "Added dark and light theme options so banner content remains readable on different backgrounds.",
          },
          {
            title: "CTA Variants",
            description:
              "Supported different CTA styles and placement options for better campaign and section flexibility.",
          },
        ],
      },
      {
        number: "09",
        tag: "Theme Interaction",
        title: "Day and Night Theme Carousel",
        layout: "media",
        description:
          "Built a themed carousel using fixed backgrounds to create a smooth parallax-like day and night visual experience, with a bottom-left theme switcher that changes the visual mood smoothly and updates the header color for better visibility.",
        media: {
          type: "video",
          src: dayNightCarousel,
          alt: "MG Select day and night theme carousel with theme switch interaction",
          playbackRate: 1,
        },
        points: [
          {
            title: "Theme Switch",
            description:
              "Added a bottom-left control to switch between day and night themes smoothly.",
          },
          {
            title: "Parallax Feel",
            description:
              "Used fixed backgrounds to create a smooth parallax-like visual experience while the carousel changes.",
          },
          {
            title: "Realistic Experience",
            description:
              "Designed the theme transition to feel natural and visually connected to the vehicle experience.",
          },
          {
            title: "Header Visibility",
            description:
              "Changed the header color with the active theme so navigation stays visible in both day and night modes.",
          },
        ],
      },
      {
        number: "10",
        tag: "Navigation System",
        title: "Header and Footer Components",
        layout: "media",
        description:
          "Built reusable header and footer components for MG Select, including nested header tabs for ride selection and services, footer navigation, and a newsletter subscription form with validations and API integration. The header was designed with multiple behavior and theme variations to support different page requirements.",
        media: {
          type: "video",
          src: headerFooterComponents,
          alt: "MG Select header and footer components with navigation, tabs, and newsletter form",
          playbackRate: 1.5,
        },
        points: [
          {
            title: "Nested Header Tabs",
            description:
              "Built nested navigation tabs for ride selection and services, helping users move across vehicles, booking, locator, and service-related pages.",
          },
          {
            title: "Header Variations",
            description:
              "Developed 4 header variations: transparent disappearing, transparent fixed, white-background disappearing, and white-background fixed.",
          },
          {
            title: "Scroll & Theme Behavior",
            description:
              "Added scroll-aware behavior where the header hides on scroll down, appears on scroll up, and changes black or white based on the background.",
          },
          {
            title: "Footer Newsletter",
            description:
              "Built footer navigation with copyright details and a newsletter subscription form using validations and API integration.",
          },
        ],
      },
    ],
  },

  challenges: {
    label: "Challenges & Solutions",
    title: "Solving real frontend challenges under launch pressure",
    description:
      "MG Select pushed me to handle tight timelines, evolving designs, advanced interactions, reusable systems, and client-requested changes while keeping the frontend stable and scalable.",
    main: {
      number: "01 · Main Challenge",
      metricValue: "45",
      metricLabel: "days to launch",
      title: "Building a brand-launch website from scratch in 45 days",
      paragraphs: [
        "Our team had only 45 days to build the MG Select website from scratch because it had to go live on the brand launch day at Auto Expo. At the same time, Figma designs were still being prepared in parallel, which led to inconsistencies, frequent changes, and rework during development.",
        "Even with the pressure, we stayed focused and kept moving as a team. In the final days before Auto Expo, I worked extended hours, including 16-hour workdays, to complete critical frontend flows, fixes, and launch-ready refinements. With strong coordination and ownership, we successfully made the website live on the morning of Auto Expo.",
      ],
      tags: [
        "Scratch Development",
        "Parallel Figma Updates",
        "Launch-day Delivery",
      ],
    },
    items: [
      {
        number: "02",
        title: "Making section-wise scrolling scalable",
        paragraphs: [
          "Section-wise scrolling was one of the toughest and most interesting features because the whole website experience depended on it. The logic had to support mouse wheel, mobile touch, full-screen sections, small-height sections, and components with inner scroll.",
          "Later, the client requested arrow-key support and side pagination for direct jumps. Since the logic was structured in a scalable way, I was able to extend it quickly without rebuilding the feature from scratch.",
        ],
      },
      {
        number: "03",
        title: "Handling multiple header variations",
        paragraphs: [
          "The header had different visual requirements across pages. In some sections it needed to be black, in some it needed to be white, and in others it needed a white background. During implementation, it sometimes overlapped with components or became less visible.",
          "After discussion with my leads, we created four header variations: transparent disappearing, transparent fixed, white-background disappearing, and white-background fixed. We also switched black and white logo assets based on active section classes.",
        ],
      },
      {
        number: "04",
        title: "Customizing libraries for real project needs",
        paragraphs: [
          "Several components required library customization beyond default behavior. Swiper.js, for example, had to support multiple carousel variations with images, videos, autoplay, loop, theme changes, header color switching, and flexible content management.",
          "To increase reusability, I wrote custom logic and carefully overrode default behavior so the same carousel system could work across different sections and content requirements.",
        ],
      },
    ],
    closing: {
      label: "What I learned",
      description:
        "This project helped me grow a lot as a frontend developer. It taught me how to stay calm under pressure, solve complex UI problems, build scalable systems, collaborate better with my team, and stay open to even bigger challenges in the future.",
    },
  },

  skills: {
    label: "Skills & Deliverables",
    title: "Technologies and work delivered",
    items: [
      "jQuery",
      "JavaScript",
      "Bootstrap",
      "Three.js",
      "Swiper.js",
      "API Integration",
      "Form Development",
      "OTP Workflows",
      "Payment Gateway",
      "Google Maps API",
      "AI Implementation",
      "LLM APIs",
      "Streaming Responses",
      "Speech Input",
      "Text-to-Speech",
      "CMS-driven Components",
      "Reusable Components",
      "Responsive UI",
      "Custom Scroll Interactions",
      "Carousel Development",
      "Video Integration",
    ],
  },

  impact: {
    label: "Impact",
    title: "Project outcomes",
    items: [
      "Built a scalable frontend system with reusable components for booking, banners, carousels, galleries, showroom locator, AI Assist, and navigation flows.",
      "Delivered business-critical user journeys with validations, OTP handling, API integrations, payment gateway support, loaders, and proper response handling.",
      "Supported 100+ successful pre-booking transactions on the first launch day through a stable and user-friendly pre-booking flow.",
      "Improved the website experience with premium interactions including AI-powered assistance, Google Maps showroom discovery, scroll-based animations, and responsive media-rich components.",
    ],
  },

  socialProof: {
  label: "LinkedIn Highlights",
  title: "Recognized by the team behind the project",
  description:
    "A few public LinkedIn posts from Axeno that highlight the MG Select launch journey, delivery speed, design quality, and recognition received by the project.",
  posts: [
    {
      source: "Axeno Consulting",
      title: "A luxe digital experience delivered in 45 days",
      description:
        "Axeno highlighted the MG Select digital experience, the 45-day delivery timeline, luxury UX, and pre-booking functionality.",
      badge: "Launch Story",
      url: "https://www.linkedin.com/posts/digitalluxury-mgselect-uxdesign-ugcPost-7308727221794349057-7RPo/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADYAc24B89TTjGdazGDGPQfUpNelHgIBdto",
    },
    {
      source: "Axeno Consulting",
      title: "Best Design Projects of the Year Award",
      description:
        "Axeno shared that MG Select won the Best Design Projects of the Year Award at the Economic Times Award for Design & Creativity 2026.",
      badge: "Award Recognition",
      url: "https://www.linkedin.com/posts/axeno-etdesignandcreativity-mgselect-ugcPost-7443240628253028352-5IEv/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYAc24B89TTjGdazGDGPQfUpNelHgIBdto",
    },
  ],
},
};