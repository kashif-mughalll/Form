import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./form.style";
import { FormControl, InputLabel, Select } from "@material-ui/core";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
  firstname: yup
    .string("Enter your first name")
    .min(4, "name should be greater then 4")
    .required("First name is required"),
  lastname: yup
    .string("Enter your last name")
    .min(4, "name should be greater then 4")
    .required("Last name is required"),
  gender: yup
    .string("Select gender")
    .required("Gender is required"),
  bday : yup
   .date("Select birthday")
   .required("Birthday is required"),

});

const Form = ({ classes }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      gender: "1",
      bday : ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="size">
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <TextField
              variant="outlined"
              className={classes.inputClass}
              fullWidth
              id="firstname"
              name="firstname"
              label="First name"
              type="text"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              variant="outlined"
              className={classes.inputClass}
              fullWidth
              id="lastname"
              name="lastname"
              label="Last Name"
              type="text"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />
          </Grid>
        </Grid>

        <TextField
          variant="outlined"
          className={classes.marginBottom1}
          fullWidth
          autoFocus
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <FormControl
              variant="outlined"
              className={classes.inputClass}
              fullWidth
            >
              <InputLabel htmlFor="outlined-age-native-simple">
                Gender
              </InputLabel>
              <Select
                id="gender"
                name="gender"
                label="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
                helperText={formik.touched.gender && formik.errors.gender}
              >
                <option value={1}>Male</option>
                <option value={2}>Female</option>
                <option value={3}>Others</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              variant="outlined"
              className={classes.inputClass}
              fullWidth
              id="bday"
              name="bday"
              value={formik.values.bday}
              onChange={formik.handleChange}
              error={formik.touched.bday && Boolean(formik.errors.bday)}
              helperText={formik.touched.bday && formik.errors.bday}
              label="Birthday"
              type="date"
              // defaultValue="1999-05-24"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>

        <TextField
          variant="outlined"
          className={classes.inputClass}
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button className={classes.btn} color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default withStyles(useStyles)(Form);
