import React from "react";
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
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { setUserEdit } from "@/store/reducers/userSlice";
import { useDispatch } from "react-redux";

export default function UserList() {
  const dispatch = useDispatch();
  const usersList = useSelector((state: any) => state.users.allUsers);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = (id: number) => {
    dispatch(setUserEdit(false));
    router.push(`/dashboard/users/${id}/edit`);
    handleClose();
  };
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.No.</TableCell>
            <TableCell>
              <FontAwesomeIcon icon={faUsers} fixedWidth />
              Name
            </TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile No</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList?.result?.data?.map((item: any, index: number) => (
            <TableRow key={item._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <div className='avatar avatar-md d-inline-flex position-relative'>
                    <Image
                      fill
                      sizes='40px'
                      className='rounded-circle'
                      src='/assets/img/avatars/1.jpg'
                      alt='user@email.com'
                    />
                    <span className='avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white' />
                  </div>
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
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem>Info</MenuItem>
                  <MenuItem onClick={() => handleEdit(item._id)}>Edit</MenuItem>
                  <MenuItem className='text-danger'>Delete</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
