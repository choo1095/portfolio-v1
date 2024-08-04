import { placeholder } from "@/constants/assets";
import { Project } from "@/types/project";

const professionalProjects: Project[] = [
  {
    id: "mobius_website",
    slug: "mobius_website",
    thumbnail: "/projects/mobius_small.jpg",
    title: "Mobius Digital Systems",
    tags: ["Mobile", "Web"],
    tools: ["React.js", "GSAP", "React Three Fiber"],
    description:
      "This is a website that I built, featuring a bee and hexagon theme, with animations to provide a more engaging user experience. The site includes a project showcase and a blog to display the company's achievements and insights.",
  },
  {
    id: "vivavalet",
    slug: "vivavalet",
    thumbnail: "/projects/vivavalet_small.jpeg",
    title: "Vivavalet",
    tags: ["Mobile", "Web"],
    tools: ["Flutter", "Nuxt.js"],
    description:
      "VivaValet is an app that provides services for the elderly. Services include ordering rides, food, housekeeping, home repairs, etc. The project includes a website and mobile app that serves the customers, a mobile app for service providers, and an admin dashboard.",
  },
  {
    id: "sp2s",
    slug: "sp2s",
    thumbnail: "/projects/sp2s_small.jpg",
    title: "SP2S",
    tags: ["Web"],
    tools: ["Nuxt.js", "Digital Ocean"],
    description:
      "This is a revamp of the original SP2S site. The project comprises a customer-facing website and a point-of-sales system. This project serves customers in Malaysia and Indonesia, providing a streamlined shopping experience and improved point-of-sale operations for both countries.",
  },
  {
    id: "tealive",
    slug: "tealive",
    thumbnail: "/projects/tealive_small.jpg",
    title: "Tealive",
    tags: ["Mobile"],
    tools: ["Flutter"],
    description:
      "Revamped Tealive's mobile app, allowing users to easily purchase bubble tea from the app and manage their reward points effortlessly. The revamped app serves both customers in Malaysia and the Phillipines. The Malaysian app boasts a 4.8-star rating on the Play Store and over a million downloads.",
  },
  {
    id: "heyjom",
    slug: "heyjom",
    thumbnail: "/projects/heyjom_small.jpg",
    title: "HeyJom",
    tags: ["Mobile"],
    tools: ["Flutter"],
    description:
      "HeyJom is an app for users to purchase entries for various sports events such as marathon runs. The app features a leaderboard system to track performance and image galleries for each race event for users to view and purchase race photos. ",
  },
  {
    id: "psrt",
    slug: "psrt",
    thumbnail: "/projects/psrt_small.jpg",
    title: "Petronas Sepang Racing Team (PSRT)",
    tags: ["Mobile"],
    tools: ["Flutter"],
    description:
      "PSRT is a private app that digitalizes the motorsports experience for race attendees. It allows users to check in for attendance, view detailed event itineraries and race track information, and access an official photo galleries for each race event. The app was utilized at every MotoGP event worldwide until PSRT's conclusion in 2021.",
  },
  {
    id: "tourplus",
    slug: "tourplus",
    thumbnail: "/projects/tourplus_small.jpg",
    title: "Tourplus",
    tags: ["Mobile"],
    tools: ["Swift", "Flutter"],
    description:
      "Tourplus connects users with tour guides for booking personalized services and provides ticketing for a range of attractions and events. The app features a hotel booking service integrated with Ctrip APIs. This project includes both a customer-facing app and a provider app to connect travelers to local guides and vice versa.",
  },
];

export default professionalProjects;
