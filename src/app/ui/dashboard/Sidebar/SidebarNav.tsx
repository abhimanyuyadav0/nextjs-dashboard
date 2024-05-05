import { faAddressCard, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCode,
  faGauge,
  faLocationArrow,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import React, { PropsWithChildren } from "react";
import SidebarNavGroup from "@/app/ui/dashboard/Sidebar/SidebarNavGroup";
import SidebarNavItem from "@/app/ui/dashboard/Sidebar/SidebarNavItem";
import menuItems from "@/menu-items";

const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <li className='nav-title px-3 py-2 mt-3 text-uppercase fw-bold'>
      {children}
    </li>
  );
};
const navGroups = menuItems.items.map((item: any) => {
  switch (item.type) {
    case "group":
      return (
        <>
          <SidebarNavTitle>{item?.title}</SidebarNavTitle>
          {item.children.map((childs: any) => (
            <SidebarNavItem icon={childs?.icon} href={`${item.url}/${childs.url}`}>
              {childs.title}
            </SidebarNavItem>
          ))}
        </>
      );
      case "pages":
        return (
          <>
            <SidebarNavTitle>{item?.title}</SidebarNavTitle>
            {item.children.map((childs: any) => (
              <SidebarNavItem icon={childs?.icon} href={`${childs.url}`}>
                {childs.title}
              </SidebarNavItem>
            ))}
          </>
        );
    case "menu":
      return (
        <SidebarNavGroup toggleIcon={item?.icon} toggleText={item.title}>
          {item.children.map((childs: any) => (
            <SidebarNavItem href={`${item.url}/${childs.url}`}>{childs.title}</SidebarNavItem>
          ))}
        </SidebarNavGroup>
      );
    default:
      return (
        <SidebarNavItem icon={item?.icon} href={item.url}>
          Dashboard
        </SidebarNavItem>
      );
  }
});
export default function SidebarNav() {
  return (
    <ul className='list-unstyled'>
      {navGroups}
    </ul>
  );
}
