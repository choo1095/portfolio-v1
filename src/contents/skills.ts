import { SkillCategory } from "@/types/skillCategory";

const skills: SkillCategory[] = [
  {
    category: "Mobile",
    subcategory: [
      {
        name: "Hybrid",
        items: [
          {
            skillName: "Flutter",
            level: 4,
          },
        ],
      },
      {
        name: "Native",
        items: [
          {
            skillName: "Swift (iOS)",
            level: 1,
          },
        ],
      },
    ],
  },
  {
    category: "Frontend",
    subcategory: [
      {
        name: "The Basics",
        items: [
          {
            skillName: "HTML",
            level: 4,
          },
          {
            skillName: "CSS",
            level: 4,
          },
          {
            skillName: "Javascript",
            level: 2,
          },
          {
            skillName: "Typescript",
            level: 4,
          },
          {
            skillName: "jQuery",
            level: 3,
          },
        ],
      },
      {
        name: "Frameworks",
        items: [
          {
            skillName: "Nuxt.js / Vue.js",
            level: 4,
          },
          {
            skillName: "Next.js / React.js",
            level: 2,
          },
        ],
      },
      {
        name: "CSS Frameworks",
        items: [
          {
            skillName: "TailwindCSS",
            level: 4,
          },
          {
            skillName: "Bootstrap",
            level: 3,
          },
        ],
      },
      {
        name: "Web Animations",
        items: [
          {
            skillName: "GSAP",
            level: 3,
          },
          {
            skillName: "Framer Motion",
            level: 3,
          },
        ],
      },
      {
        name: "3D Web Animations",
        items: [
          {
            skillName: "Three.js",
            level: 2,
          },
          {
            skillName: "React Three Fiber (R3F)",
            level: 1,
          },
        ],
      },
    ],
  },
  {
    category: "Backend",
    subcategory: [
      {
        name: "Frameworks",
        items: [
          {
            skillName: "Laravel",
            level: 3,
          },
          {
            skillName: "Node.js",
            level: 4,
          },
        ],
      },
      {
        name: "Databases",
        items: [
          {
            skillName: "MySQL",
            level: 3,
          },
          {
            skillName: "Cloud Firestore",
            level: 2,
          },
          {
            skillName: "MongoDB",
            level: 1,
          },
        ],
      },
    ],
  },
  {
    category: "Misc",
    subcategory: [
      {
        name: "Mobile App Deployment",
        items: [
          {
            skillName: "Play Store",
            level: 4,
          },
          {
            skillName: "App Store",
            level: 4,
          },
          {
            skillName: "Fastlane",
            level: 2,
          },
        ],
      },
      {
        name: "Cloud Services",
        items: [
          {
            skillName: "Digital Ocean",
            level: 2,
          },
          {
            skillName: "AWS",
            level: 2,
          },
          {
            skillName: "Vercel",
            level: 1,
          },
        ],
      },
      {
        name: "Design Tools",
        items: [
          {
            skillName: "Figma",
            level: 2,
          },
          {
            skillName: "Photoshop",
            level: 2,
          },
        ],
      },
    ],
  },
];

export default skills;
