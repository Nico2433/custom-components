import type { DropdownPosition } from "@/@types";
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

  const triggerProps = (trigger: React.ReactElement) => {
    const triggerClassNames = trigger.props.className;
    const totalClassNames = clsx(triggerClassNames);

    return {
      onClick: () => setIsOpen((prev) => !prev),
      className: totalClassNames,
    };
  };

  const childProps = (children: React.ReactElement) => {
    const childClassNames = children.props.className;
    const totalClassNames = clsx(
      "absolute",
      hideChildren && !isOpen && "hidden",
      position === "bottom" || position === "top"
        ? position === "bottom"
          ? "top-full"
          : "bottom-full"
        : position === "right"
          ? "left-full"
          : "right-full",
      childClassNames
    );

    return {
      className: totalClassNames,
    };
  };

  const containerClasses = clsx(
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
    <div ref={containerRef} className={containerClasses}>
      {React.isValidElement(trigger)
        ? React.cloneElement(trigger, triggerProps(trigger))
        : trigger}
      {hideChildren
        ? React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child, childProps(child))
              : child
          )
        : isOpen &&
          React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child, childProps(child))
              : child
          )}
    </div>
  );
};
