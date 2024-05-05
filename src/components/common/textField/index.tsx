import React from "react";
import { FormControl, FormLabel, TextField } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

interface FormTextFieldProps {
  label: string;
  name: string;
  control: Control<FieldValues>;
  rules?: Record<string, any>;
  errors: Record<string, any>;
  [key: string]: any; // Allows for additional props
}

const FormTextField: React.FC<FormTextFieldProps> = ({
  label,
  name,
  control,
  rules,
  errors,
  ...rest
}) => {
  return (
    <FormControl fullWidth sx={{ mb: 3 }}>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <TextField
            {...field}
            error={!!errors[name]}
            helperText={errors[name]?.message}
            {...rest}
          />
        )}
      />
    </FormControl>
  );
};

export default FormTextField;
