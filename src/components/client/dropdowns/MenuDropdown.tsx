import { cloneComponent } from "@/utils";
import clsx from "clsx/lite";
import React from "react";

interface Props {
  renderTrigger: (isOpen: boolean) => React.ReactNode;
  renderMenu: (
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => React.ReactNode;
  hideChildren?: boolean;
  autoClose?: boolean;
}

const MenuDropdown: React.FC<Props> = ({
  renderTrigger,
  renderMenu,
  hideChildren,
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

  const menuProps = {
    className: clsx("absolute", hideChildren && !isOpen && "hidden"),
  };

  const trigger = renderTrigger(isOpen);
  const menu = renderMenu(setIsOpen);

  return (
    <div ref={containerRef}>
      {cloneComponent(trigger, triggerProps)}
      {hideChildren
        ? cloneComponent(menu, menuProps)
        : isOpen && cloneComponent(menu, menuProps)}
    </div>
  );
};

export default MenuDropdown;
