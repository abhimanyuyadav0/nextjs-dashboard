"use client";
import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import UserForm from '@/components/user/userForm';
import { useDispatch } from 'react-redux';
import { setUserEdit } from '@/store/reducers/userSlice';

export default function Page() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setUserEdit(false))
  },[])
  return (
    <Card>
      <CardHeader title="Add new User" />
      <CardContent>
        <UserForm />
      </CardContent>
    </Card>
  );
}
