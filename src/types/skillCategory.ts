export interface SkillCategory {
  category: string;
  subcategory: {
    name?: string;
    items: {
      skillName: string;
      level: 1 | 2 | 3 | 4;
    }[];
  }[];
}
