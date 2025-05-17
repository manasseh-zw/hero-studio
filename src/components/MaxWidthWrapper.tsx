import { cn } from "@heroui/react";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 md:px-10 lg:px-32 xl:px-36",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
