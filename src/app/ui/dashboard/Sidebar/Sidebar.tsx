'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import classNames from 'classnames'
import { Button } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { closeMenu, openMenu } from '@/store/reducers/sideMenuSlice'

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const isOpen = useSelector((state: any) => state.sideMenu.isOpen);
  const dispatch = useDispatch();

  return (
    <div
      className={classNames('sidebar d-flex flex-column position-fixed h-100', {
        'sidebar-narrow': !isOpen,
        show: isOpen,
        'md-hide': !isOpen,
      })}
      id="sidebar"
    >
      <div className="sidebar-brand d-none d-md-flex align-items-center justify-content-center">
        <h5>CMG</h5>
      </div>

      <div className="sidebar-nav flex-fill">
        {children}
      </div>

      <Button
        variant="link"
        className="sidebar-toggler d-none d-md-inline-block rounded-0 text-end pe-4 fw-bold shadow-none"
        onClick={()=> (isOpen ? dispatch(closeMenu()) : dispatch(openMenu()))}
        type="button"
        aria-label="sidebar toggler"
      >
        <FontAwesomeIcon className="sidebar-toggler-chevron" icon={faAngleLeft} fontSize={24} />
      </Button>
    </div>
  )
}
