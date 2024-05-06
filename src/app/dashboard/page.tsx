"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faUsers } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ProgressBar,
} from "react-bootstrap";
import { faCcAmex } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect } from "react";
import UserPage from "./users";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Page() {
  const usersList = useSelector((state: any) => state.users.allUsers);
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated]);
  return (
    <>
      <div className='row'>
        <div className='col-md-12'>
          <Card>
            <CardBody>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className='border-start border-4 border-info px-3 mb-3'>
                        <small className='text-black-50'>Total Users</small>
                        <div className='fs-5 fw-semibold'>
                          {usersList.length}
                        </div>
                      </div>
                    </div>

                    <div className='col-6'>
                      <div className='border-start border-4 border-danger px-3 mb-3'>
                        <small className='text-black-50'>
                          Recurring Clients
                        </small>
                        <div className='fs-5 fw-semibold'>22,643</div>
                      </div>
                    </div>
                  </div>

                  <hr className='mt-0' />
                </div>

                <div className='col-sm-6'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className='border-start border-4 border-warning px-3 mb-3'>
                        <small className='text-black-50'>Pageviews</small>
                        <div className='fs-5 fw-semibold'>78,623</div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='border-start border-4 border-success px-3 mb-3'>
                        <small className='text-black-50'>Organic</small>
                        <div className='fs-5 fw-semibold'>49,123</div>
                      </div>
                    </div>
                  </div>
                  <hr className='mt-0' />
                </div>
              </div>
              <br />
              <UserPage />
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
