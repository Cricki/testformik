import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { withFormik, FormikProps, Form, Field, FormikErrors } from "formik";

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form>
      <h1>{message}</h1>
      <Field type="email" name="email"></Field>
      {touched.email && errors.email && <div>{errors.email}</div>}

      <Field type="password" name="password"></Field>
      {touched.password && errors.password && <div>{errors.password}</div>}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

interface MyFormProps {
  initialEmail?: string;
  message: string;
}

const FormWithHook = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      password: "",
    };
  },
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = "Required";
    }
    // else if (!isValidEmail(values.email)) {
    //   errors.email = "Invalid email address";
    // }
    return errors;
  },
  handleSubmit: async (values) => {
    console.log("Submitted", values);
    let res = await axios.post("http://localhost:5000/login", values);
    console.log("res:: -> ", res);
  },
})(InnerForm);

export default FormWithHook;
