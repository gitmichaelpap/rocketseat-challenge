import jwtDecode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

import { api } from "@/services/api";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});

  function isUserAuthenticated() {
    const user = localStorage.getItem("@challenge:user");

    if (!user) {
      return false;
    }

    const token = localStorage.getItem("@challenge:token");
    const tokenExpiration = jwtDecode(token).exp;
    const currentTime = Math.floor(Date.now() / 1000);

    if (tokenExpiration < currentTime) {
      return false;
    }

    return true;
  }

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      user.is_admin = ["admin"].includes(user.role);

      localStorage.setItem("@challenge:user", JSON.stringify(user));
      localStorage.setItem("@challenge:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@challenge:user");
    localStorage.removeItem("@challenge:token");

    setData();
  }

  useEffect(() => {
    const token = localStorage.getItem("@challenge:token");
    const user = localStorage.getItem("@challenge:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        isUserAuthenticated,
        user: data?.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
