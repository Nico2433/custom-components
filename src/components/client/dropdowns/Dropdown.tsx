import type { DropdownComponent, DropdownPosition } from "@/@types";
import { cloneComponent } from "@/utils";
import clsx from "clsx/lite";
import React from "react";

interface Props extends DropdownComponent {
  renderContent: (isOpen: boolean) => React.ReactNode;
  position?: DropdownPosition;
}

export const Dropdown: React.FC<Readonly<Props>> = ({
  renderTrigger,
  renderContent,
  className,
  autoClose,
  position = "bottom",
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      event.target &&
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    )
      setIsOpen(false);
  };

  React.useEffect(() => {
    if (autoClose) {
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [autoClose]);

  const triggerProps = {
    onClick: () => setIsOpen((prev) => !prev),
  };

  const contentProps = {
    className: clsx(
      "absolute",
      position === "bottom" || position === "top"
        ? position === "bottom"
          ? "top-full"
          : "bottom-full"
        : position === "right"
          ? "left-full"
          : "right-full"
    ),
  };

  const containerClassName = clsx(
    "flex items-center relative",
    position === "bottom" || position === "top"
      ? position === "bottom"
        ? "flex-col"
        : "flex-col-reverse"
      : position === "right"
        ? "flex-row"
        : "flex-row-reverse",
    className
  );

  const trigger = renderTrigger(isOpen);
  const content = renderContent(isOpen);

  return (
    <div ref={containerRef} className={containerClassName}>
      {cloneComponent(trigger, triggerProps)}
      {cloneComponent(content, contentProps)}
    </div>
  );
};
