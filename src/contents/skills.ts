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
            level: 1,
          },
        ],
      },
      {
        name: "Native",
        items: [
          {
            skillName: "Swift (iOS)",
            level: 3,
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
            level: 1,
          },
          {
            skillName: "CSS",
            level: 2,
          },
          {
            skillName: "Javascript",
            level: 2,
          },
          {
            skillName: "Typescript",
            level: 1,
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
            level: 1,
          },
          {
            skillName: "Next.js / React.js",
            level: 3,
          },
        ],
      },
      {
        name: "CSS Frameworks",
        items: [
          {
            skillName: "TailwindCSS",
            level: 1,
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
            level: 2,
          },
          {
            skillName: "Framer Motion",
            level: 2,
          },
        ],
      },
      {
        name: "3D Web Animations",
        items: [
          {
            skillName: "Three.js",
            level: 3,
          },
          {
            skillName: "React Three Fiber (R3F)",
            level: 4,
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
            level: 2,
          },
          {
            skillName: "Node.js",
            level: 2,
          },
        ],
      },
      {
        name: "Databases",
        items: [
          {
            skillName: "MySQL",
            level: 2,
          },
          {
            skillName: "Cloud Firestore",
            level: 2,
          },
          {
            skillName: "MongoDB",
            level: 4,
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
            level: 1,
          },
          {
            skillName: "App Store",
            level: 1,
          },
          {
            skillName: "Fastlane",
            level: 3,
          },
          {
            skillName: "Firebase App Distribution",
            level: 3,
          },
        ],
      },
      {
        name: "Cloud Services",
        items: [
          {
            skillName: "Digital Ocean",
            level: 3,
          },
          {
            skillName: "AWS",
            level: 3,
          },
          {
            skillName: "Vercel",
            level: 4,
          },
        ],
      },
      {
        name: "Design Tools",
        items: [
          {
            skillName: "Figma",
            level: 3,
          },
          {
            skillName: "Photoshop",
            level: 3,
          },
        ],
      },
    ],
  },
];

export default skills;
