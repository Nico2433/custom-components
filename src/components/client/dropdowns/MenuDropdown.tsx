import type { DropdownMenuComponent } from "@/@types";
import { cloneComponent } from "@/utils";
import clsx from "clsx/lite";
import React, { useRef } from "react";

export const MenuDropdown: React.FC<Readonly<DropdownMenuComponent>> = ({
  renderTrigger,
  renderContent,
  className,
  autoClose,
  blockScroll,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const listenerActive = useRef<boolean>(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      event.target &&
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    )
      setIsOpen(false);
  };

  React.useEffect(() => {
    if (autoClose && !listenerActive.current) {
      document.addEventListener("click", handleClickOutside);
      listenerActive.current = true;
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }

    if (blockScroll) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }, [isOpen, blockScroll, autoClose]);

  const triggerProps = {
    onClick: () => setIsOpen((prev) => !prev),
  };

  const containerClassName = clsx(className);

  const trigger = renderTrigger(isOpen);
  const content = renderContent(isOpen, setIsOpen);

  return (
    <div ref={containerRef} className={containerClassName}>
      {cloneComponent(trigger, triggerProps)}
      {content}
    </div>
  );
};
