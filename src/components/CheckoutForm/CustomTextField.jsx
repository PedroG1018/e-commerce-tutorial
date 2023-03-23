import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const CustomTextField = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) => (
          <TextField {...field} name={name} label={label} required fullWidth />
        )}
        defaultValue=""
        name={name}
        control={control}
        error={isError}
      />
    </Grid>
  );
};

export default CustomTextField;
