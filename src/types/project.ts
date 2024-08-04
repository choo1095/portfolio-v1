export interface Project {
  id: string;
  slug: string;
  thumbnail: string;
  title: string;
  tags: string[];
  tools: string[];
  links?: {
    title: string;
    url: string;
  }[];
  description: string;
}
