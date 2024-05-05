"use client";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect, useState } from "react";
import InputGroupText from "react-bootstrap/InputGroupText";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { create_user } from "@/api/services/user";
import { useSelector } from "react-redux";
import { Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });
  const isAuthenticated: boolean = useSelector(
    (state: { auth: { isAuthenticated: boolean } }) =>
      state.auth.isAuthenticated
  );
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  const addUser = useMutation({
    mutationFn: (data: any) => create_user(data),
    onMutate: (variables) => {
      return {};
    },
    onError: (error: any) => {
      toast.error(error.result.message);
    },
    onSuccess: async (data: any, variables, context: any) => {
      toast.success("user created successfully");
      router.push("/login");
    },
  });
  const signup = async (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();

    setSubmitting(true);

    try {
      const formData = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        userName: userData.userName,
        email: userData.email,
        password: userData.password,
      };

      addUser.mutate(formData);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='baseline'
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography variant='h3'>Sign up</Typography>
            <Link href={"/login"}>
              <Typography
                variant='body1'
                sx={{ textDecoration: "none" }}
                color='primary'
              >
                Already have an account?
              </Typography>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Form onSubmit={signup}>
            <InputGroup className='mb-3'>
              <InputGroupText>
                <FontAwesomeIcon icon={faUser} fixedWidth />
              </InputGroupText>
              <FormControl
                name='firstName'
                required
                disabled={submitting}
                placeholder='First Name'
                aria-label='firstName'
                onChange={handleChange}
                value={userData.firstName}
              />
            </InputGroup>
            <InputGroup className='mb-3'>
              <InputGroupText>
                <FontAwesomeIcon icon={faUser} fixedWidth />
              </InputGroupText>
              <FormControl
                name='lastName'
                required
                disabled={submitting}
                placeholder='Last Name'
                aria-label='lastName'
                onChange={handleChange}
                value={userData.lastName}
              />
            </InputGroup>
            <InputGroup className='mb-3'>
              <InputGroupText>
                <FontAwesomeIcon icon={faUser} fixedWidth />
              </InputGroupText>
              <FormControl
                name='userName'
                required
                disabled={submitting}
                placeholder='Username'
                aria-label='Username'
                onChange={handleChange}
                value={userData.userName}
              />
            </InputGroup>

            <InputGroup className='mb-3'>
              <InputGroupText>
                <FontAwesomeIcon icon={faEnvelope} fixedWidth />
              </InputGroupText>
              <FormControl
                type='email'
                name='email'
                required
                disabled={submitting}
                placeholder='Email'
                aria-label='Email'
                onChange={handleChange}
                value={userData.email}
              />
            </InputGroup>

            <InputGroup className='mb-3'>
              <InputGroupText>
                <FontAwesomeIcon icon={faLock} fixedWidth />
              </InputGroupText>
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

            <Button
              type='submit'
              className='d-block w-100'
              disabled={submitting}
              variant='success'
            >
              Create Account
            </Button>
          </Form>
        </Grid>
      </Grid>
    </>
  );
}
