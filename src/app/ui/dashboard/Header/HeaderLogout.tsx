'use client'

import { logoutUser } from "@/store/actions/authActions";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function HeaderLogout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const logout = async () => {
    dispatch(logoutUser());
    router.push("/login");
  };

  return (
    <div onClick={logout} onKeyDown={logout} role='button' tabIndex={0}>
      {children}
    </div>
  );
}
