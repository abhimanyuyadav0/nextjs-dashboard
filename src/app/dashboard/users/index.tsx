"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Box, Button, Card, CardContent } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "@/api/services/user";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { fetchUsersSuccess } from "@/store/reducers/userSlice";
import { useRouter } from "next/navigation";
import UserList from "@/components/user/userTable";

export default function UserPage() {
  const dispatch: Dispatch<any> = useDispatch();
  const router = useRouter();

  const { isPending, isLoading } = useQuery({
    queryKey: ["USERS"],
    queryFn: async () => {
      try {
        let response = await getAllUsers();
        console.log(response,'response')
        dispatch(fetchUsersSuccess(response));
      } catch (error) {
        console.log("ERROR", error);
      }
    },
  });
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
            {/* <Pagination meta={resource.meta} /> */}
            <UserList />
            {/* <Pagination meta={resource.meta} /> */}
          </>
        )}
      </CardContent>
    </Card>
  );
}
