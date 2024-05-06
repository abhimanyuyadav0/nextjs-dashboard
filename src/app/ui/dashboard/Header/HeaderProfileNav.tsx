'use client'
import {
  Badge,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
} from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCreditCard,
  faEnvelopeOpen,
  faFile,
  faMessage,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { PropsWithChildren } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGear,
  faListCheck,
  faLock,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import HeaderLogout from "@/app/ui/dashboard/Header/HeaderLogout";
import { Avatar } from "@mui/material";

type ItemWithIconProps = {
  icon: IconDefinition;
} & PropsWithChildren;

const ItemWithIcon = (props: ItemWithIconProps) => {
  const { icon, children } = props;

  return (
    <>
      <FontAwesomeIcon className='me-2' icon={icon} fixedWidth />
      {children}
    </>
  );
};

export default function HeaderProfileNav() {
  return (
    <Nav>
      <Dropdown as={NavItem}>
        <DropdownToggle
          variant='link'
          bsPrefix='hide-caret'
          className='py-0 px-2 rounded-0'
          id='dropdown-profile'
        >
          <div className='avatar position-relative'>
            <Avatar>A</Avatar>
          </div>
        </DropdownToggle>
        <DropdownMenu className='pt-0'>
          <DropdownHeader className='bg-light fw-bold rounded-top'>
            Account
          </DropdownHeader>
          <Link href='#' passHref legacyBehavior>
            <DropdownItem>
              <ItemWithIcon icon={faBell}>
                Updates
                <Badge bg='info' className='ml-2'>
                  1
                </Badge>
              </ItemWithIcon>
            </DropdownItem>
          </Link>
          <DropdownHeader className='bg-light fw-bold'>Settings</DropdownHeader>
          <Link href='#' passHref legacyBehavior>
            <DropdownItem>
              <ItemWithIcon icon={faUser}>Profile</ItemWithIcon>
            </DropdownItem>
          </Link>
          <Link href='#' passHref legacyBehavior>
            <DropdownItem>
              <ItemWithIcon icon={faGear}>Settings</ItemWithIcon>
            </DropdownItem>
          </Link>
          <DropdownDivider />
          <HeaderLogout>
            <DropdownItem>
              <ItemWithIcon icon={faPowerOff}>Logout</ItemWithIcon>
            </DropdownItem>
          </HeaderLogout>
        </DropdownMenu>
      </Dropdown>
    </Nav>
  );
}
