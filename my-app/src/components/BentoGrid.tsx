import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
  rowHeight = "18rem", // Default value for row height
}: {
  className?: string;
  children?: React.ReactNode;
  rowHeight?: string; // Prop to adjust row height
}) => {
  return (
    <div
      className={cn(
        `grid md:auto-rows-[${rowHeight}] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto`,
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  size,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  size?: string | undefined; // Define different sizes here
}) => {
  let itemClasses =
    "rounded-lg group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-gray-50 border border-transparent justify-between flex flex-col space-y-4";

  // Adjust size based on the prop passed
  if (size === "small") {
    itemClasses += " md:col-span-1";
  } else if (size === "medium") {
    itemClasses += " md:col-span-2 hidden md:display md:block";
  } else if (size === "large") {
    itemClasses += " md:col-span-3 ";
  }

  return (
    <div className={cn(itemClasses, className)}>
      {header}
      {description && (
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="text-2xl md:text-lg font-sans font-bold text-bg-custom dark:text-neutral-200 mb-3 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-bg-custom text-md md:text-sm dark:text-neutral-300 whitespace-pre-line">
            {description}
          </div>
        </div>
      )}
    </div>
  );
};
