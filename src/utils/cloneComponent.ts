import clsx from "clsx/lite";
import React from "react";

export const cloneComponent = (
  component: React.ReactNode,
  props: React.HTMLProps<HTMLElement>
) => {
  if (React.isValidElement(component)) {
    const componentProps = component.props;

    const { className, ...newProps } = props;

    const classNames = className
      ? clsx(className, componentProps.className)
      : componentProps.className;

    return React.cloneElement(component, {
      ...componentProps,
      className: classNames,
      ...newProps,
    });
  } else {
    return component;
  }
};
