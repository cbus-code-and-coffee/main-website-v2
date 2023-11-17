import * as Yup from "yup";
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";
import Button from "./Button";
import buttonColorClasses from "../ui/buttonColorClasses";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface OtherProps {
  title: string;
  subtitle: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, title, subtitle } = props;
  return (
    <Form>
      <div className="form-wrapper flex flex-col gap-7 px-6">
        <div className="form-header flex flex-col gap-3 pb-5">
          <h4 className="text-4xl">{title}</h4>
          <h5>{subtitle}</h5>
        </div>

        <div className="field-container flex gap-8">
          <div className="w-1/2 flex flex-col gap-3">
            <label htmlFor="firstName">First Name</label>
            <Field
              className="formLightBorder block border rounded w-full h-10 pl-1"
              type="text"
              name="firstName"
            />
            {touched.firstName && errors.firstName && (
              <div>{errors.firstName}</div>
            )}
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <label htmlFor="lastName">Last Name</label>
            <Field
              className="formLightBorder block border rounded w-full h-10 pl-1"
              type="text"
              name="lastName"
            />
            {touched.lastName && errors.email && <div>{errors.lastName}</div>}
          </div>
        </div>

        <div className="field-container flex gap-8">
          <div className="w-1/2 flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <Field
              className="formLightBorder block border rounded w-full h-10 pl-1"
              type="email"
              name="email"
            />
            {touched.email && errors.email && <div>{errors.email}</div>}
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <label htmlFor="subject">Subject</label>
            <Field
              className="formLightBorder block border rounded w-full h-10 pl-1"
              type="text"
              name="subject"
            />
            {touched.subject && errors.subject && <div>{errors.subject}</div>}
          </div>
        </div>
        <div className="field-container h-48">
          <label htmlFor="message">Message</label>
          <Field
            className="formLightBorder block border rounded w-full pl-1 h-full"
            type="text"
            name="message"
          />
          {touched.message && errors.message && <div>{errors.message}</div>}
        </div>
        <div>
          <Button label="Submit" href="" class={buttonColorClasses.blueBgBtn} />
        </div>
      </div>
    </Form>
  );
};

// The type of props MyForm receives
interface SiteFormProps {
  initialFirstName?: string;
  initialLastName?: string;
  initialEmail?: string;
  subject?: string;
  message?: string;
  title: string; // if this passed all the way through you might do this or make a union type
  subtitle: string; // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the withFormik HoC
const SiteForm = withFormik<SiteFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      firstName: props.initialFirstName || "",
      lastName: props.initialLastName || "",
      email: props.initialEmail || "",
      subject: props.subject || "",
      message: props.message || "",

      title: props.title || "",
      subtitle: props.subtitle || "",
    };
  },

  // Add a custom validation function (this can be async too!)
  // validate: (values: FormValues) => {
  //   let errors: FormikErrors<FormValues> = {};
  //   if (!values.email) {
  //     errors.email = 'Required';
  //   } else if (!isValidEmail(values.email)) {
  //     errors.email = 'Invalid email address';
  //   }
  //   return errors;
  // },

  handleSubmit: (values) => {},
})(InnerForm);

export default SiteForm;
