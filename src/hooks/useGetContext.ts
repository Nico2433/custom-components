import React from "react";

export const useGetContext = <T>(context: React.Context<T>): NonNullable<T> => {
  const getContext = React.useContext(context);

  if (!getContext) {
    throw new Error("useGetContext has to be used within context provider");
  }

  return getContext;
};
