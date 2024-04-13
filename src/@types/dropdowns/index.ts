export type DropdownPosition = "top" | "right" | "bottom" | "left";

interface Dropdown {
  renderTrigger: (isOpen: boolean) => React.ReactNode;
  className?: string;
  autoClose?: boolean;
}

export interface DropdownComponent extends Dropdown {
  renderContent: (isOpen: boolean) => React.ReactNode;
  position?: DropdownPosition;
  noAbsolute?: boolean;
}

export interface DropdownMenuComponent extends Dropdown {
  renderContent: (
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => React.ReactNode;
  blockScroll?: boolean;
}
