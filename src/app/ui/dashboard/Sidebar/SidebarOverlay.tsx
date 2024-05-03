"use client";

import React, { useContext } from "react";
import { SidebarContext } from "@/app/ui/dashboard/sidebar-provider";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "@/store/reducers/sideMenuSlice";

export default function SidebarOverlay() {
  const isOpen = useSelector((state: any) => state.sideMenu.isOpen);
  const dispatch = useDispatch();

  return (
    <div
      tabIndex={-1}
      aria-hidden
      className={classNames(
        "sidebar-overlay position-fixed top-0 bg-dark w-100 h-100 opacity-50",
        {
          "d-none": !isOpen,
        }
      )}
      onClick={() => dispatch(closeMenu())}
    />
  );
}
