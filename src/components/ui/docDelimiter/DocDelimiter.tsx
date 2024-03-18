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
  limits = "8xl",
  children,
}) => {
  const childProps = (child: React.ReactElement) => {
    const childClasses = child.props.className;
    const totalClasses = clsx("container", childClasses);

    return { className: totalClasses };
  };

  const elementClasses = clsx(
    hide
      ? "hidden"
      : hideMobile || hideDesktop
      ? hideMobile
        ? "hidden lg:flex"
        : "flex lg:hidden"
      : "flex",
    "justify-center mx-auto w-full",
    className,
    getDocLimits(limits)
  );

  return (
    <Element className={elementClasses}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, childProps(child))
          : child
      )}
    </Element>
  );
};
