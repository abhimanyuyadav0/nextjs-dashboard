"use client";
import { useSelector } from "react-redux";
import Login from "./(authentication)/login/page";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router =useRouter()
  const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [isAuthenticated]);
  return <div>{isAuthenticated ? "dashboard" : <Login />}</div>;
}
