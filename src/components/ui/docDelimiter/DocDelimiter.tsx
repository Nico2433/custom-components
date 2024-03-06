import React from "react";
import { getDocDelimiterLimits, type DocDelimiterLimits } from "./limits";

// *-------- THIS COMPONENT LIMITS PAGE BORDERS AND CENTERS CONTENT --------* //

interface Props {
  as?: React.ElementType;
  className?: string;
  containerClass?: string;
  limits?: DocDelimiterLimits;
  children: React.ReactNode;
}

export const DocDelimiter: React.FC<Readonly<Props>> = ({
  as: Element = "div",
  className = "flex",
  containerClass = "",
  limits,
  children,
}) => {
  return (
    <Element
      className={`justify-center mx-auto w-full ${className} ${
        limits && getDocDelimiterLimits(limits)
      }`}
    >
      <div className={`container ${containerClass}`}>{children}</div>
    </Element>
  );
};
