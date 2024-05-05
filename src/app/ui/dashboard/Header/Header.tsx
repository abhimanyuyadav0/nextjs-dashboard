import Link from "next/link";
import HeaderSidebarToggler from "@/app/ui/dashboard/Header/HeaderSidebarToggler";
import HeaderFeaturedNav from "@/app/ui/dashboard/Header/HeaderFeaturedNav";
import HeaderNotificationNav from "@/app/ui/dashboard/Header/HeaderNotificationNav";
import HeaderProfileNav from "@/app/ui/dashboard/Header/HeaderProfileNav";
import Breadcrumb from "@/app/ui/dashboard/Breadcrumb/Breadcrumb";
import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <header className='header sticky-top mb-4 py-2 px-sm-2 border-bottom '>
      <Container
        fluid
        className='header-navbar d-flex align-items-center justify-content-between'
      >
        <div className='d-flex align-items-center'>
          <HeaderSidebarToggler />
          <Link href='/' className='header-brand d-md-none'>
            <h6 className='mb-0'>CMG</h6>
          </Link>
          <div className='header-nav d-none d-md-flex'>
            <HeaderFeaturedNav />
          </div>
        </div>
        <div className='d-flex'>
          <div className='header-nav ms-auto'>
            <HeaderNotificationNav />
          </div>
          <div className='header-nav ms-2'>
            <HeaderProfileNav />
          </div>
        </div>
      </Container>
      {/* <div className='header-divider border-top my-2 mx-sm-n2'>
        <Container fluid>
          <Breadcrumb />
        </Container>
      </div> */}
    </header>
  );
}
