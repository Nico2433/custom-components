import type { DropdownComponent } from "@/@types";
import { cloneComponent } from "@/utils";
import clsx from "clsx/lite";
import React from "react";

interface Props extends DropdownComponent {
  renderContent: (
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => React.ReactNode;
}

export const MenuDropdown: React.FC<Readonly<Props>> = ({
  renderTrigger,
  renderContent,
  className,
  autoClose,
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
    className: clsx("absolute"),
  };

  const containerClassName = clsx(className);

  const trigger = renderTrigger(isOpen);
  const content = renderContent(isOpen, setIsOpen);

  return (
    <div ref={containerRef} className={containerClassName}>
      {cloneComponent(trigger, triggerProps)}
      {cloneComponent(content, contentProps)}
    </div>
  );
};
