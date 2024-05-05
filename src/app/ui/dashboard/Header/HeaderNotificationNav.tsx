import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  IconDefinition,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBasketShopping,
  faChartBar,
  faGaugeHigh,
  faList,
  faUserMinus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
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
  NavLink,
  ProgressBar,
} from "react-bootstrap";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import Image from "next/image";
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

export default function HeaderNotificationNav() {
  return (
    <Nav>
      <NavItem>
        <Dropdown>
          <DropdownToggle
            as={NavLink}
            bsPrefix='hide-caret'
            id='dropdown-notification'
          >
            <FontAwesomeIcon icon={faBell} size='lg' />
            <Badge pill bg='danger' className='position-absolute top-0 right-0'>
              5
            </Badge>
          </DropdownToggle>
          <DropdownMenu className='pt-0' align='end'>
            <DropdownHeader className='bg-light fw-bold rounded-top'>
              You have 5 notifications
            </DropdownHeader>
            <Link href='#' passHref legacyBehavior>
              <DropdownItem>
                <ItemWithIcon icon={faUserPlus}>
                  New user registered
                </ItemWithIcon>
              </DropdownItem>
            </Link>
            <DropdownHeader className='bg-light fw-bold'>Server</DropdownHeader>
            <Link href='#' passHref legacyBehavior>
              <DropdownItem>
                <small>
                  <div className='text-uppercase'>
                    <b>Site uses</b>
                  </div>
                </small>
                <small>
                  <div className='text-muted'>348 Processes. 1/4 Cores.</div>
                </small>
              </DropdownItem>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </NavItem>
      <NavItem>
        <Dropdown>
          <DropdownToggle as={NavLink} bsPrefix='hide-caret' id='dropdown-mail'>
            <FontAwesomeIcon icon={faEnvelope} size='lg' />
            <Badge
              pill
              bg='primary'
              className='position-absolute top-0 right-0'
            >
              7
            </Badge>
          </DropdownToggle>
          <DropdownMenu className='pt-0' align='end'>
            <DropdownHeader className='bg-light fw-bold rounded-top'>
              You have 4 messages
            </DropdownHeader>
            <Link href='#' passHref legacyBehavior>
              <DropdownItem>
                <div className='message d-flex'>
                  <div className='py-3 me-3 float-start mr-3'>
                    <div className='avatar d-inline-flex position-relative'>
                      <Avatar>A</Avatar>
                      <span className='avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white' />
                    </div>
                  </div>
                  <div>
                    <div>
                      <small className='text-muted'>John Doe</small>
                      <small className='text-muted float-end mt-1'>
                        Just now
                      </small>
                    </div>
                    <div className='text-truncate font-weight-bold'>
                      <span className='text-danger'>!</span> New Notification
                    </div>
                    <div className='small text-truncate text-muted'>
                      Lorem ipsum dolor sit amet.
                    </div>
                  </div>
                </div>
              </DropdownItem>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </NavItem>
    </Nav>
  );
}
