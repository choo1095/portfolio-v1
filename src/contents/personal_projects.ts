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
    links: [
      {
        title: "GitHub",
        url: "https://github.com/choo1095/makan",
      },
    ],
    description:
      'This app was born from a mix of necessity and hunger. I created this Flutter app to solve the age-old dilemma of "eh lunch eat wat?" Using the Google Maps API, it filters and fetches real-time restaurant data to discover the perfect lunch spot.',
  },
  {
    id: "smart_mirror",
    slug: "smart_mirror",
    thumbnail: "/projects/smart_mirror_small.jpg",
    title: "Gesture Controlled Smart Mirror",
    tags: ["Misc"],
    tools: ["LeapJS", "Javascript"],
    links: [
      {
        title: "Demo Video",
        url: "https://drive.google.com/file/d/1TfcAZR9ZbonqJ77MpstllnyYrTfgB9ZV/view?usp=sharing",
      },
    ],
    description:
      "I developed a smart mirror using the LeapJS SDK and a Leap Motion Controller. This mirror responds to hand gestures such as circular motions, hovers, pinches, and swipes; and showcases various real-time updates such as the current date, time, weather, etc.",
  },
];

export default personalProjects;
