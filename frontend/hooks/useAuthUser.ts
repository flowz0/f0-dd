import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { User } from "@/types/user";

export default function useAuthUser(redirectToLogin = true) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/auth/check", {
          withCredentials: true,
        });
        setUser(res.data.user);
      } catch (err) {
        console.error("Authentication failed:", err);
        setUser(null);
        if (
          redirectToLogin &&
          axios.isAxiosError(err) &&
          [400, 401].includes(err.response?.status || 0)
        ) {
          router.push("/login");
        }
      }
    };

    fetchUser();
  }, [router, redirectToLogin]);

  return user;
}