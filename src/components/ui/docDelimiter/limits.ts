export type DocDelimiterLimits = "6xl" | "7xl" | "8xl";

export const getDocDelimiterLimits = (limit: DocDelimiterLimits) => {
  switch (limit) {
    case "6xl": {
      return "max-w-6xl";
    }

    case "7xl": {
      return "max-w-7xl";
    }

    default: {
      return "max-w-8xl";
    }
  }
};
