import { cloneComponent } from "@/utils";
import { clsx } from "clsx/lite";
import React from "react";
import { getDocLimits, type DocDelLimit } from "./limits";

// *-------- THIS COMPONENT LIMITS PAGE BORDERS AND CENTERS CONTENT --------* //

interface Props {
  as?: React.ElementType;
  ref?: React.MutableRefObject<any>;
  className?: string;
  hide?: boolean;
  hideMobile?: boolean;
  hideDesktop?: boolean;
  limits?: DocDelLimit;
  children: React.ReactNode;
}

export const DocDelimiter: React.FC<Readonly<Props>> = ({
  as: Element = "div",
  ref,
  className,
  hide,
  hideMobile,
  hideDesktop,
  limits = "full",
  children,
}) => {
  const childProps = {
    className: "container",
  };

  const elementClassNames = clsx(
    hide
      ? "hidden"
      : hideMobile || hideDesktop
        ? hideMobile
          ? "hidden lg:flex"
          : "flex lg:hidden"
        : "flex",
    `flex-col items-center mx-auto w-full ${getDocLimits(limits)}`,
    className
  );

  return (
    <Element ref={ref} className={elementClassNames}>
      {React.Children.map(children, (child) =>
        cloneComponent(child, childProps)
      )}
    </Element>
  );
};
