'use client'

import { useContext } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { closeMenu, openMenu } from "@/store/reducers/sideMenuSlice";

export default function HeaderSidebarToggler() {
  const isOpen = useSelector((state: any) => state.sideMenu.isOpen);
  const dispatch = useDispatch();

  return (
    <>
      <Button
        variant='link'
        className='header-toggler d-md-none px-md-0 me-md-3 rounded-0 shadow-none'
        type='button'
        onClick={() => (isOpen ? dispatch(closeMenu()) : dispatch(openMenu()))}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Button
        variant='link'
        className='header-toggler d-none d-md-inline-block px-md-0 me-md-3 rounded-0 shadow-none'
        type='button'
        onClick={() => (isOpen ? dispatch(closeMenu()) : dispatch(openMenu()))}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
    </>
  );
}
