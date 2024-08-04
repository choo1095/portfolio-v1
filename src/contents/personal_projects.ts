import { placeholder } from "@/constants/assets";
import { Project } from "@/types/project";

const personalProjects: Project[] = [
  {
    id: "makan_apa",
    slug: "makan_apa",
    thumbnail: "/projects/makan_apa_small.jpg",
    title: "Makan Apa?",
    tags: ["Mobile"],
    tools: ["Flutter"],
    description:
      'I created this Flutter app to solve the age-old dilemma of "eh lunch eat wat?" Using the Google Maps API, it filters and fetches real-time restaurant data to discover the perfect lunch spot. This app was born from a mix of necessity and hunger.',
  },
  {
    id: "smart_mirror",
    slug: "smart_mirror",
    thumbnail: "/projects/smart_mirror_small.jpg",
    title: "Gesture Controlled Smart Mirror",
    tags: ["Misc"],
    tools: ["LeapJS", "Javascript"],
    description:
      "I developed a smart mirror using the LeapJS SDK and a Leap Motion Controller. This mirror responds to hand gestures such as circular motions, hovers, pinches, and swipes; and showcases real-time updates, including the current date, time, and weather. It also delivers the latest news, and features a gallery of images and YouTube videos on the mirror's display.",
  },
];

export default personalProjects;
