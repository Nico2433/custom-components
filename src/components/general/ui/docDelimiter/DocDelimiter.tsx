import { clsx } from "clsx/lite";
import React from "react";
import { getDocLimits, type DocDelLimit } from "./limits";

// *-------- THIS COMPONENT LIMITS PAGE BORDERS AND CENTERS CONTENT --------* //

interface Props {
  as?: React.ElementType;
  className?: string;
  hide?: boolean;
  hideMobile?: boolean;
  hideDesktop?: boolean;
  limits?: DocDelLimit;
  children: React.ReactNode;
}

export const DocDelimiter: React.FC<Readonly<Props>> = ({
  as: Element = "div",
  className,
  hide,
  hideMobile,
  hideDesktop,
  limits = "full",
  children,
}) => {
  const childProps = (child: React.ReactElement) => {
    const childClassNames = child.props.className;
    const totalClassNames = clsx("container", childClassNames);

    return { className: totalClassNames };
  };

  const elementClassNames = clsx(
    hide
      ? "hidden"
      : hideMobile || hideDesktop
        ? hideMobile
          ? "hidden lg:flex"
          : "flex lg:hidden"
        : "flex",
    !hide && `flex-col items-center mx-auto w-full ${getDocLimits(limits)}`,
    className
  );

  return (
    <Element className={elementClassNames}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, childProps(child))
          : child
      )}
    </Element>
  );
};
