"use client";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@mui/material";
import UserForm from "@/components/user/userForm";
import { useSelector } from "react-redux";
import { setUserEdit } from "@/store/reducers/userSlice";
import { useDispatch } from "react-redux";

export default function Page({ params }: { params: { id: string } }) {
  const [form, setForm] = useState();
  const usersList = useSelector((state: any) => state.users.allUsers);
  const isEdit = useSelector((state: any) => state.users.isEdit); // Get isEdit from state
  const user = usersList?.result?.find((user: any) => user._id === params.id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserEdit(true));
    return () => { 
      dispatch(setUserEdit(false));
    };
  }, []);

  return (
    <Card>
      <CardHeader title={isEdit ? 'Update User' : 'Create User'} /> {/* Change title based on isEdit */}
      <CardContent>
        {isEdit && user && <UserForm form={form} setForm={setForm} user={user} />} {/* Render UserForm only if isEdit is true */}
      </CardContent>
    </Card>
  );
}
