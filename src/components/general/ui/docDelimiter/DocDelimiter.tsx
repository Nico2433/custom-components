import { cloneComponent } from "@/utils";
import { clsx } from "clsx/lite";
import React from "react";
import { getDocLimits, type DocDelLimit } from "./limits";

// *-------- THIS COMPONENT LIMITS PAGE BORDERS AND CENTERS CONTENT --------* //

interface Props<T = React.ElementType>
  extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<T>, T>, "ref"> {
  as?: T;
  limits?: DocDelLimit;
  innerRef?: React.RefObject<T>;
}

export const DocDelimiter: React.FC<Readonly<Props>> = ({
  as: Element = "div",
  limits = "full",
  innerRef,
  className,
  children,
  ...rest
}) => {
  const childProps = {
    className: "container",
  };

  const elementClassNames = clsx(
    `flex flex-col items-center mx-auto w-full ${getDocLimits(limits)}`,
    className
  );

  return (
    <Element ref={innerRef} className={elementClassNames} {...rest}>
      {React.Children.map(children, (child) =>
        cloneComponent(child, childProps)
      )}
    </Element>
  );
};
