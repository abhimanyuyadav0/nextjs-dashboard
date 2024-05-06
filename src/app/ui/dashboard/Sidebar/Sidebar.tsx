'use client'

import React from 'react'
import classNames from 'classnames'
import { useSelector,useDispatch } from 'react-redux'
import { Box } from '@mui/material'

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const isOpen = useSelector((state: any) => state.sideMenu.isOpen);

  return (
    <Box
      className={classNames('sidebar d-flex flex-column position-fixed h-100', {
        'sidebar-narrow': !isOpen,
        show: isOpen,
        'md-hide': !isOpen,
      })}
      id="sidebar"
    >
      <Box className="sidebar-brand d-none d-md-flex align-items-center justify-content-center">
        <h5>CMG</h5>
      </Box>

      <Box className="sidebar-nav flex-fill">
        {children}
      </Box>
    </Box>
  )
}
