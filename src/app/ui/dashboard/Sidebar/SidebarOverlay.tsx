"use client";

import React, { useContext } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "@/store/reducers/sideMenuSlice";
import { Box } from "@mui/material";

export default function SidebarOverlay() {
  const isOpen = useSelector((state: any) => state.sideMenu.isOpen);
  const dispatch = useDispatch();

  return (
    <Box
      tabIndex={-1}
      aria-hidden
      className={classNames(
        "sidebar-overlay position-fixed top-0 w-100 h-100 opacity-50",
        {
          "d-none": !isOpen,
        }
      )}
      onClick={() => dispatch(closeMenu())}
    />
  );
}
