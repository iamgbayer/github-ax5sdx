import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

export const useAuth = () => {
  const auth = getAuth();

  const [state, setState] = useState(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    return {
      initializing: !user,
      user,
    };
  });

  const onChange = (user) => {
    setState({ initializing: false, user });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(onChange);

    return () => unsubscribe();
  }, []);

  return state;
};
