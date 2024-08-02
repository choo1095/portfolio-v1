import { placeholder } from "@/constants/assets";
import { Project } from "@/types/project";

const personalProjects: Project[] = [
  {
    id: "makan_apa",
    slug: "makan_apa",
    thumbnail: placeholder,
    title: "Makan Apa?",
    tags: ["Mobile"],
    tools: ["Flutter"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "smart_mirror",
    slug: "smart_mirror",
    thumbnail: placeholder,
    title: "Gesture Controlled Smart Mirror",
    tags: ["Misc"],
    tools: ["LeapJS", "Javascript"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default personalProjects;
