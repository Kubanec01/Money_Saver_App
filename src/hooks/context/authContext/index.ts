import { createContext, useState } from "react";

const AuthContext = createContext("undefined");

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [loading, setLoading] = useState(null);
};
