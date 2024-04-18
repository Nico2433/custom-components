import React from "react";

export const useIsVisible = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  oneTime?: boolean
) => {
  const [intersecting, setIntersecting] = React.useState(false);
  const observe = React.useRef<boolean>(true);

  React.useEffect(() => {
    if (!ref.current) throw new Error("ref cannot be null");

    const observer = new IntersectionObserver(([entry]) => {
      if (
        oneTime &&
        entry.isIntersecting === true &&
        observe.current === true
      ) {
        observe.current = false;
        setIntersecting(true);
        observer.disconnect();
      } else {
        setIntersecting(entry.isIntersecting);
      }
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, oneTime]);

  return intersecting;
};
