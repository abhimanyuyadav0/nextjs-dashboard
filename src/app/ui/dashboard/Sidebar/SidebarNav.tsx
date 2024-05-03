import {
  faAddressCard,
  faBell,
  faFileLines,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBug,
  faCalculator,
  faChartPie,
  faCode,
  faDroplet,
  faGauge,
  faLayerGroup,
  faLocationArrow,
  faPencil,
  faPuzzlePiece,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import React, { PropsWithChildren } from "react";
import { Badge } from "react-bootstrap";
import SidebarNavGroup from "@/app/ui/dashboard/Sidebar/SidebarNavGroup";
import SidebarNavItem from "@/app/ui/dashboard/Sidebar/SidebarNavItem";

const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <li className='nav-title px-3 py-2 mt-3 text-uppercase fw-bold'>
      {children}
    </li>
  );
};

export default function SidebarNav() {
  return (
    <ul className='list-unstyled'>
      <SidebarNavTitle>Main</SidebarNavTitle>
      <SidebarNavItem icon={faGauge} href='/'>
        Dashboard
      </SidebarNavItem>
      <SidebarNavItem icon={faCode} href='/pokemons'>
        Sample
      </SidebarNavItem>
      <SidebarNavGroup toggleIcon={faLocationArrow} toggleText='Buttons'>
        <SidebarNavItem href='#'>Buttons</SidebarNavItem>
        <SidebarNavItem href='#'>Buttons Group</SidebarNavItem>
        <SidebarNavItem href='#'>Dropdowns</SidebarNavItem>
      </SidebarNavGroup>
      <SidebarNavTitle>Authentication</SidebarNavTitle>

      <SidebarNavGroup toggleIcon={faStar} toggleText='Pages'>
        <SidebarNavItem icon={faRightToBracket} href='login'>
          Login
        </SidebarNavItem>
        <SidebarNavItem icon={faAddressCard} href='register'>
          Register
        </SidebarNavItem>
        <SidebarNavItem icon={faBug} href='#'>
          Error 404
        </SidebarNavItem>
        <SidebarNavItem icon={faBug} href='#'>
          Error 500
        </SidebarNavItem>
      </SidebarNavGroup>
    </ul>
  );
}
