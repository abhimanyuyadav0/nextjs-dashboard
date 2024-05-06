"use client";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@mui/material";
import UserForm from "@/components/user/userForm";
import { useSelector } from "react-redux";
import { setUserEdit } from "@/store/reducers/userSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const dispatch = useDispatch();
  const usersList = useSelector((state: any) => state.users.allUsers);
  const isEdit = useSelector((state: any) => state.users.isEdit);
  const selectedUser = useSelector((state: any) => state.users.editUserId);
  const user = usersList?.filter(
    (value: any) => value._id === selectedUser
  );
  console.log(user, "user");
  useEffect(() => {
    dispatch(setUserEdit(true));
    return () => {
      dispatch(setUserEdit(false));
    };
  }, []);

  return (
    <Card>
      <CardHeader title="Update User" />
      <CardContent>
        {isEdit && user && (
          <UserForm user={user[0]} />
        )}
      </CardContent>
    </Card>
  );
}
