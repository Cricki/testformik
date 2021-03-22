import React from "react";
import {
  withFormik,
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import { isArrayLiteralExpression } from "typescript";

interface MyFormValues {
  firstName: string;
  lastName: string;
}

interface OtherProps {
  message: string;
}

const Formtest: React.FC<{}> = () => {
  const initialValues: MyFormValues = { firstName: "", lastName: "" };
  return (
    <div>
      <h1>Form Example</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field
            id="firstName"
            name="firstName"
            placeholder="First Name"
          ></Field>
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Last Name"></Field>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Formtest;
