"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Menu,
  MenuItem,
  IconButton,
  Box,
  Pagination,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setEditUserId, setUserEdit } from "@/store/reducers/userSlice";
import { useDispatch } from "react-redux";
import { delete_user } from "@/api/services/user";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { GetUsersAPI } from "@/store/actions/userActions";
import { Dispatch } from "@reduxjs/toolkit";

const UserList = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const usersList = useSelector((state: any) => state.users.allUsers);
  const isLoading = useSelector((state: any) => state.users.loadingUser);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const router = useRouter();
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = (userId: number) => {
    dispatch(setUserEdit(true));
    dispatch(setEditUserId(userId));
    router.push(`/dashboard/users/${userId}/edit`);
    handleClose();
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const displayedUsers = usersList.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  const deleteAddressDetail = useMutation({
    mutationFn: (id: string) => delete_user(id),
    onMutate: (variables) => {
      return {};
    },
    onError: (error) => {
      console.log(error, `rolling back optimistic update`);
    },
    onSuccess: () => {
      toast.success("User deleted!");
      dispatch(GetUsersAPI());
    },
  });

  const handleDelete = (id: string) => {
    deleteAddressDetail.mutate(id);
  };
  return (
    <>
      {isLoading ? (
        <CircularProgress color='secondary' />
      ) : (
        <>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>S.No.</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>
                    <FontAwesomeIcon icon={faUsers} fixedWidth />
                    Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Mobile No</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedUsers?.map((item: any, index: number) => (
                  <TableRow key={item._id}>
                    <TableCell>
                      {(page - 1) * itemsPerPage + index + 1}
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Avatar>{item.firstName.charAt(0)}</Avatar>
                        {item.firstName} {item.lastName}
                      </Box>
                    </TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.phoneNumber}</TableCell>
                    <TableCell>
                      <IconButton onClick={handleClick}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <MenuItem onClick={()=>router.push(`/dashboard/users/${item._id}/view`)}>Info</MenuItem>
                        <MenuItem onClick={() => handleEdit(item._id)}>
                          Edit
                        </MenuItem>
                        <MenuItem
                          className='text-danger'
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            count={Math.ceil(usersList?.length / itemsPerPage)}
            page={page}
            onChange={handleChangePage}
          />
        </>
      )}
    </>
  );
};
export default UserList;
