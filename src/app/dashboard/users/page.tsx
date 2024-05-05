// "use client"
import React from 'react'
import Index from '@/app/dashboard/users/index'
import { useSelector } from 'react-redux';

export default async function Page() {
  // const users = useSelector((state:any) => state.auth.user);
  // console.log(users,'user')
  return (
    <Index  />
  )
}
