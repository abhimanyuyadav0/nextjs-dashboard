import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope, IconDefinition } from '@fortawesome/free-regular-svg-icons'
import {
  faBasketShopping,
  faChartBar,
  faGaugeHigh,
  faList,
  faUserMinus,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import {
  Badge,
  Dropdown, DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  ProgressBar,
} from 'react-bootstrap'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import Image from 'next/image'

type ItemWithIconProps = {
  icon: IconDefinition;
} & PropsWithChildren

const ItemWithIcon = (props: ItemWithIconProps) => {
  const { icon, children } = props

  return (
    <>
      <FontAwesomeIcon className="me-2" icon={icon} fixedWidth />
      {children}
    </>
  )
}

export default function HeaderNotificationNav() {
  return (
    <Nav>
      <NavItem>
        <Dropdown>
          <DropdownToggle as={NavLink} bsPrefix="hide-caret" id="dropdown-notification">
            <FontAwesomeIcon icon={faBell} size="lg" />
            <Badge pill bg="danger" className="position-absolute top-0 right-0">
              5
            </Badge>
          </DropdownToggle>
          <DropdownMenu className="pt-0" align="end">
            <DropdownHeader className="bg-light fw-bold rounded-top">You have 5 notifications</DropdownHeader>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <ItemWithIcon icon={faUserPlus}>
                  New user registered
                </ItemWithIcon>
              </DropdownItem>
            </Link>
            <DropdownHeader className="bg-light fw-bold">Server</DropdownHeader>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <small><div className="text-uppercase"><b>CPU Usage</b></div></small>
                <ProgressBar
                  className="progress-thin mt-2"
                  variant="primary"
                  now={25}
                />
                <small>
                  <div className="text-muted">348 Processes. 1/4 Cores.</div>
                </small>
              </DropdownItem>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </NavItem>
      <NavItem>
        <Dropdown>
          <DropdownToggle as={NavLink} bsPrefix="hide-caret" id="dropdown-mail">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <Badge pill bg="primary" className="position-absolute top-0 right-0">
              7
            </Badge>
          </DropdownToggle>
          <DropdownMenu className="pt-0" align="end">
            <DropdownHeader className="bg-light fw-bold rounded-top">You have 4 messages</DropdownHeader>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <div className="message">
                  <div className="py-3 me-3 float-start">
                    <div className="avatar d-inline-flex position-relative">
                      <Image
                        fill
                        className="rounded-circle"
                        src="/assets/img/avatars/1.jpg"
                        alt="user@email.com"
                      />
                      <span
                        className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                      />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted">John Doe</small>
                    <small className="text-muted float-end mt-1">Just now</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    <span className="text-danger">!</span>
                    {' '}
                    Pet Pikachu
                  </div>
                  <div className="small text-truncate text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt
                  </div>
                </div>
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <div className="message">
                  <div className="py-3 me-3 float-start">
                    <div className="avatar d-inline-flex position-relative">
                      <Image
                        fill
                        className="rounded-circle"
                        src="/assets/img/avatars/2.jpg"
                        alt="user@email.com"
                      />
                      <span
                        className="avatar-status position-absolute d-block bottom-0 end-0 bg-warning rounded-circle border border-white"
                      />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted">John Doe</small>
                    <small className="text-muted float-end mt-1">5 mins ago</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    Dress Eevee
                  </div>
                  <div className="small text-truncate text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt
                  </div>
                </div>
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <div className="message">
                  <div className="py-3 me-3 float-start">
                    <div className="avatar d-inline-flex position-relative">
                      <Image
                        fill
                        className="rounded-circle"
                        src="/assets/img/avatars/3.jpg"
                        alt="user@email.com"
                      />
                      <span
                        className="avatar-status position-absolute d-block bottom-0 end-0 bg-danger rounded-circle border border-white"
                      />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted">John Doe</small>
                    <small className="text-muted float-end mt-1">1:52 PM</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    Team up training
                  </div>
                  <div className="small text-truncate text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt
                  </div>
                </div>
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <div className="message">
                  <div className="py-3 me-3 float-start">
                    <div className="avatar d-inline-flex position-relative">
                      <Image
                        fill
                        className="rounded-circle"
                        src="/assets/img/avatars/4.jpg"
                        alt="user@email.com"
                      />
                      <span
                        className="avatar-status position-absolute d-block bottom-0 end-0 bg-primary rounded-circle border border-white"
                      />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted">John Doe</small>
                    <small className="text-muted float-end mt-1">4:03 PM</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    Go to Safari Zone
                  </div>
                  <div className="small text-truncate text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt
                  </div>
                </div>
              </DropdownItem>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </NavItem>
    </Nav>
  )
}
