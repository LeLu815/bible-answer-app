"use client";

import { User } from "@supabase/supabase-js";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { supabase } from "./supabase.context";

type AuthContextValue = {
  isInitialized: boolean;
  isLogggedIn: boolean;
  user: User | null;
};

const initialValue: AuthContextValue = {
  isInitialized: false,
  isLogggedIn: false,
  user: null,
};

const AuthContext = createContext(initialValue);

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }: PropsWithChildren) {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [user, setUser] = useState<AuthContextValue["user"]>(null);
  const isLogggedIn = Boolean(user);

  const value = {
    isInitialized,
    user,
    isLogggedIn,
  };

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "INITIAL_SESSION") {
        // handle initial session
        setUser(session?.user || null);
      } else if (event === "SIGNED_IN") {
        // handle sign in event
        setUser(session?.user || null);
      } else if (event === "SIGNED_OUT") {
        // handle sign out event
        setUser(null);
      } else if (event === "PASSWORD_RECOVERY") {
        // handle password recovery event
      } else if (event === "TOKEN_REFRESHED") {
        // handle token refreshed event
      } else if (event === "USER_UPDATED") {
        // handle user updated event
        setUser(session!.user);
      }
      setIsInitialized(true);
    });
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
