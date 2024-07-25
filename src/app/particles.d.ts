// types/particles.d.ts
declare module "particles.js" {
  export function load(
    tagId: string,
    pathConfigJson: string,
    callback?: () => void
  ): void;
  export function init(tagId: string, options: any): void;
}
