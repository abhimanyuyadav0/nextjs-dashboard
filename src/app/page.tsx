"use client";
import { useSelector } from "react-redux";
import Login from "./(authentication)/login/page";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "./dashboard/layout";

export default function Home({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated]);
  return (
    <div>
      {isAuthenticated ? (
        <Dashboard>{children}</Dashboard>
      ) : (
        <div className='bg-light min-vh-100 d-flex flex-row align-items-center dark:bg-transparent'>
          <Login />
        </div>
      )}
    </div>
  );
}
