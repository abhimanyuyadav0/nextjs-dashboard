"use client";
import { Alert, Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { deleteCookie, getCookie } from "cookies-next";
import InputGroupText from "react-bootstrap/InputGroupText";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { create_user } from "@/api/services/user";
import { useSelector } from "react-redux";

export default function Signup() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    password_repeat: "",
  });
  const isAuthenticated: boolean = useSelector(
    (state: { auth: { isAuthenticated: boolean } }) => state.auth.isAuthenticated
  );
  const getRedirect = () => {
    const redirect = getCookie("redirect");
    if (redirect) {
      deleteCookie("redirect");
      return redirect.toString();
    }
    return "/";
  };
console.log(isAuthenticated,'isAuthenticated')
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
      if (error?.result?.error === "Something went wrong.") {
        toast.error("Please fill all the detail", { autoClose: 2000 });
      }
    },
    onSuccess: async (data: any, variables, context: any) => {
      console.log(data,'data');
      toast.success("user created successfully", { autoClose: 2000 });
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
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

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

        <InputGroup className='mb-3'>
          <InputGroupText>
            <FontAwesomeIcon icon={faLock} fixedWidth />
          </InputGroupText>
          <FormControl
            type='password'
            name='password_repeat'
            required
            disabled={submitting}
            placeholder='Repeat password'
            aria-label='Repeat password'
            onChange={handleChange}
            value={userData.password_repeat}
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
    </>
  );
}
