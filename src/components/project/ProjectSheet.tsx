import { SheetContent } from "@/components/ui/sheet";
import clsx from "clsx";

interface Props {
  className?: string;
  slug: string;
}

const ProjectSheet = (props: Props) => {
  return (
    <SheetContent className={clsx(props.className, "bg-stone-300 ")}>
      <div className="absolute top-0 left-0 right-0 bottom-0 p-6 overflow-y-scroll"></div>
    </SheetContent>
  );
};

export default ProjectSheet;
