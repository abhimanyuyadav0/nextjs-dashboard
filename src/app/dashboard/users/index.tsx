"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Box, Button, Card, CardContent } from "@mui/material";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import UserList from "@/components/user/userTable";
import { GetUsersAPI } from "@/store/actions/userActions";
import { useSelector } from "react-redux";

export default function UserPage() {
  const dispatch: Dispatch<any> = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  // const loginedUser=useSelector((state: any) => state.auth.user);
  // console.log(loginedUser,'loginedUser')
  useEffect(() => {
    setIsLoading(true);
    dispatch(GetUsersAPI());
    setIsLoading(false);
  }, []);

  return (
    <Card variant='outlined'>
      <CardContent>
        <h5>Users List</h5>
        <div className='mb-3 text-end'>
          <Button
            variant='contained'
            color='success'
            onClick={() => router.push("/dashboard/users/create")}
            disabled={isLoading}
          >
            <FontAwesomeIcon icon={faPlus} fixedWidth />
            Add new
          </Button>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <UserList />
          </>
        )}
      </CardContent>
    </Card>
  );
}
