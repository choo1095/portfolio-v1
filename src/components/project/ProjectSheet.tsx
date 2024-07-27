import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import clsx from "clsx";

interface Props {
  className?: string;
  slug: string;
}

const ProjectSheet = (props: Props) => {
  return (
    <SheetContent className={clsx(props.className, "bg-stone-300")}>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>{props.slug}</SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 py-4">sheet contsnts</div>
      <SheetFooter>
        <SheetClose asChild>Footer button</SheetClose>
      </SheetFooter>
    </SheetContent>
  );
};

export default ProjectSheet;
