"use client";
import {
  Alert,
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/actions/authActions";
import Link from "next/link";
import { Dispatch } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Login() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState<any>({ email: "", password: "" });
  const dispatch: Dispatch<any> = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevUserData: any) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setSubmitting(true);
    dispatch(loginUser(userData));
    setSubmitting(false);
  };
  const isAuthenticated: boolean = useSelector(
    (state: { auth: { isAuthenticated: boolean } }) =>
      state.auth.isAuthenticated
  );
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    } else {
      toast.error("unable toroute");
    }
  }, [isAuthenticated]);
  return (
    <>
      <Alert
        variant='danger'
        show={error !== ""}
        onClose={() => setError("")}
        dismissible
      >
        {error}
      </Alert>
      <Form onSubmit={handleSubmit}>
        <InputGroup className='mb-3'>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faUser} fixedWidth />
          </InputGroup.Text>
          <FormControl
            name='email'
            required
            disabled={submitting}
            placeholder='Email'
            aria-label='email'
            onChange={handleChange}
            value={userData.email}
          />
        </InputGroup>

        <InputGroup className='mb-3'>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faLock} fixedWidth />
          </InputGroup.Text>
          <FormControl
            type='password'
            name='password'
            required
            disabled={submitting}
            placeholder='Password'
            aria-label='Password'
            onChange={handleChange}
            value={userData.password}
          />
        </InputGroup>

        <Row className='align-items-center'>
          <Col xs={6}>
            <Button
              className='px-4'
              variant='primary'
              type='submit'
              disabled={submitting}
            >
              Login
            </Button>
          </Col>
          <Col xs={6} className='text-end'>
            <Link className='px-0' href='#'>
              Forgot password?
            </Link>
          </Col>
        </Row>
      </Form>
    </>
  );
}
