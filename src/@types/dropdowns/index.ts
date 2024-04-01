export type DropdownPosition = "top" | "right" | "bottom" | "left";

export interface DropdownComponent {
  renderTrigger: (isOpen: boolean) => React.ReactNode;
  className?: string;
  autoClose?: boolean;
}
