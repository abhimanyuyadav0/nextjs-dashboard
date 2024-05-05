"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { FormTextField } from "../common";
import { create_user, update_user } from "@/api/services/user";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { setUserEdit } from "@/store/reducers/userSlice";

export default function UserForm(props: any) {
  const dispatch = useDispatch();
  const isEdit: boolean = useSelector((state: any) => state.users.isEdit);
  const router = useRouter();
  const { user } = props;
  const defaultValues = user
    ? {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
      }
    : {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>({
    defaultValues: defaultValues,
  });

  const [submitting, setSubmitting] = useState(false);

  const updateUser = useMutation({
    mutationFn: (data) => update_user(data, user?._id),
    onMutate: (variables) => {
      return {};
    },
    onError: (error, variables, context) => {
      console.log(error, `rolling back optimistic update`);
    },
    onSuccess: (data: any, variables, context) => {
      if (data?.success) {
        toast.success("Detail Updated Successfully!");
        router.push("/dashboard/users");
        dispatch(setUserEdit(false));
      }
    },
  });
  const createNewUser = useMutation({
    mutationFn: (val) => create_user(val),
    onMutate: (variables) => {
      return {};
    },
    onError: (error: any, variables, context) => {
      toast.error(error.result.message);
    },
    onSuccess: async (data: any, variables, context) => {
      if (data?.success) {
        toast.success("User created");
        router.push("/dashboard/users");
      }
    },
  });
  const onSubmit = async (data: any) => {
    setSubmitting(true);
    console.log(data, "vvvvvvvvvvv");
    if (isEdit) {
      updateUser.mutate(data);
    } else {
      createNewUser.mutate(data);
    }
    setSubmitting(false);
  };

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate>
      {user && (
        <Box
          className='position-relative mx-auto'
          sx={{
            width: 150,
            height: 150,
          }}
        >
          <Image
            fill
            style={{ objectFit: "contain" }}
            alt={user.pokemondb_identifier}
            sizes='5vw'
            src={`/assets/img/avatars/1.jpg`}
          />
        </Box>
      )}

      <FormTextField
        label='First Name'
        name='firstName'
        control={control}
        rules={{ required: "This field is required" }}
        errors={errors}
      />

      <FormTextField
        label='Last Name'
        name='lastName'
        control={control}
        rules={{ required: "This field is required" }}
        errors={errors}
      />

      <FormTextField
        label='Email'
        name='email'
        control={control}
        rules={{ required: "This field is required" }}
        errors={errors}
      />

      <FormTextField
        label='Phone No'
        name='phoneNumber'
        control={control}
        rules={{ required: "This field is required" }}
        errors={errors}
      />

      {!isEdit && (
        <FormTextField
          label='Password'
          name='password'
          control={control}
          rules={{ required: "This field is required" }}
          errors={errors}
        />
      )}

      <Box sx={{ display: "flex", flex: "wrap", gap: 1 }}>
        <Button
          className='me-3'
          type='submit'
          variant='contained'
          color='success'
          disabled={submitting}
        >
          {isEdit ? "Update" : "Submit"}
        </Button>
        <Button variant='contained' color='secondary' onClick={() => reset()}>
          Reset
        </Button>
      </Box>
    </Box>
  );
}
