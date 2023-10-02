// AuthContext.tsx
import { client } from "@/lib/axios";
import { Employee } from "@/lib/types";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  user: Employee | null;
  isAuthenticated: boolean;
  // ... otros campos y métodos que necesites
}

async function getData(token: string) {
  const { data, status } = await client.get("/api/auth/profile", {
    headers: {
      Authorization: token,
    },
  });
  console.log(data, status);
  return { data, status };
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);
//@ts-ignore
export const AuthProvider: React.FC<{ initialCookies?: string }> = ({
  children,
  initialCookies,
}) => {
  const [user, setUserData] = useState<Employee | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter()
  let i = 0;
  const token = initialCookies?.replace("auth=", "Bearer ");
  useEffect(() => {
    if (token && !user) {
      getData(token)
        .then((res) => {
          if (res.status === 401) {
            setUserData(null);
            setIsAuthenticated(false);
            router.push("/login");
            return;
          }
          setUserData(res.data.employee);
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.log(e);
          setUserData(null);
          setIsAuthenticated(false);
        });
    }
  }, [token, user]);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
