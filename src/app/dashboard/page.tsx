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
import React from "react";
import UserPage from "./users";

export default function Page() {
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
                        <small className='text-black-50'>New Clients</small>
                        <div className='fs-5 fw-semibold'>9,123</div>
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
              <div className='table-responsive'>
                <table className='table border mb-0'>
                  <thead className='table-light fw-semibold'>
                    <tr className='align-middle'>
                      <th className='text-center' aria-label='icon'>
                        <FontAwesomeIcon icon={faUsers} fixedWidth />
                      </th>
                      <th>User</th>
                      <th>Usage</th>
                      <th className='text-center'>Payment Method</th>
                      <th>Activity</th>
                      <th aria-label='Action' />
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='align-middle'>
                      <td className='text-center'>
                        <div className='avatar avatar-md d-inline-flex position-relative'>
                          <Image
                            fill
                            sizes='40px'
                            className='rounded-circle'
                            src='/assets/img/avatars/1.jpg'
                            alt='user@email.com'
                          />
                          <span className='avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white' />
                        </div>
                      </td>
                      <td>
                        <div>Yiorgos Avraamu</div>
                        <div className='small text-black-50'>
                          <span>New</span> | Registered: Jan 1, 2020
                        </div>
                      </td>
                      <td>
                        <div className='clearfix'>
                          <div className='float-start'>
                            <div className='fw-semibold'>50%</div>
                          </div>
                          <div className='float-end'>
                            <small className='text-black-50'>
                              Jun 11, 2020 - Jul 10, 2020
                            </small>
                          </div>
                        </div>
                        <ProgressBar
                          className='progress-thin'
                          variant='success'
                          now={50}
                        />
                      </td>
                      <td className='text-center' aria-label='icon'>
                        <FontAwesomeIcon icon={faCcAmex} size='lg' fixedWidth />
                      </td>
                      <td>
                        <div className='small text-black-50'>Last login</div>
                        <div className='fw-semibold'>10 sec ago</div>
                      </td>
                      <td>
                        <Dropdown align='end'>
                          <DropdownToggle
                            as='button'
                            bsPrefix='btn'
                            className='btn-link rounded-0 text-black-50 shadow-none p-0'
                            id='action-user1'
                          >
                            <FontAwesomeIcon
                              fixedWidth
                              icon={faEllipsisVertical}
                            />
                          </DropdownToggle>

                          <DropdownMenu>
                            <DropdownItem href='#/action-1'>Info</DropdownItem>
                            <DropdownItem href='#/action-2'>Edit</DropdownItem>
                            <DropdownItem
                              className='text-danger'
                              href='#/action-3'
                            >
                              Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
