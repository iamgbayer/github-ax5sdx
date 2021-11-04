import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "@poc/common";

export const WithAuthorization = ({ children }) => {
  const { user, initializing } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const isAlreadyLoadedAndIsUnauthenticated = !initializing && !user;

    isAlreadyLoadedAndIsUnauthenticated && history.push("/signin");
  }, [user, initializing]);

  if (initializing) {
    return <div>loading</div>;
  }

  return <>{children}</>;
};
