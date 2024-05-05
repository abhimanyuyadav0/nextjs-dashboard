import {
  faCode,
  faGauge,
  faLocationArrow,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
const dashboard = {
  id: "group-dashboard",
  title: "Navigation",
  type: "group",
  url:'/dashboard',
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/",
      icon: faGauge,
      breadcrumbs: false,
    },
    {
      id: "user",
      title: "User",
      type: "item",
      url: "/users",
      icon: faCode,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
