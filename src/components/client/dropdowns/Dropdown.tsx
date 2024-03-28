import type { DropdownPosition } from "@/@types";
import { cloneComponent } from "@/utils";
import clsx from "clsx/lite";
import React from "react";

interface Props {
  renderTrigger: (isOpen: boolean) => React.ReactNode;
  children: React.ReactNode;
  className?: string;
  hideChildren?: boolean;
  autoClose?: boolean;
  position?: DropdownPosition;
}

export const Dropdown: React.FC<Readonly<Props>> = ({
  renderTrigger,
  children,
  className,
  hideChildren,
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

  const childProps = {
    className: clsx(
      "absolute",
      hideChildren && !isOpen && "hidden",
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

  return (
    <div ref={containerRef} className={containerClassName}>
      {cloneComponent(trigger, triggerProps)}
      {hideChildren
        ? React.Children.map(children, (child) =>
            cloneComponent(child, childProps)
          )
        : isOpen &&
          React.Children.map(children, (child) =>
            cloneComponent(child, childProps)
          )}
    </div>
  );
};
