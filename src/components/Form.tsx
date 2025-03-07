import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormProps {
  onSubmit: SubmitHandler<FormValues>;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h3 className="text-2xl  p-7 font-bold"> Get In Touch</h3>
        <p className="p-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          veritatis totam tempore nobis itaque fugit ipsam amet, voluptatem
          pariatur, delectus perspiciatis velit accusamus deleniti! Accusantium,
          praesentium. Ex nemo eius qui.
        </p>
      </div>
      <div className="form-wrapper flex flex-col gap-7 px-6">
        <div className="form-header flex flex-col gap-3 pb-5"></div>

        <div className="field-container flex gap-8">
          <div className="w-1/2 flex flex-col gap-3">
            <label htmlFor="firstName">First Name</label>
            <input
              className="formLightBorder block border rounded w-full h-10 pl-1"
              type="text"
              data-testid="name"
              {...register("firstName", {
                required: "Please enter your first name",
              })}
            />
            <p className="text-red-500" data-testid="error-name">
              {errors.firstName?.message}
            </p>
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="formLightBorder block border rounded w-full h-10 pl-1"
              type="text"
              data-testid="last-name"
              {...register("lastName", {
                required: "Please enter your last name",
              })}
            />
            <p className="text-red-500" data-testid="error-last-name">
              {errors.lastName?.message}
            </p>
          </div>
        </div>

        <div className="field-container flex gap-8">
          <div className="w-1/2 flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <input
              className="formLightBorder block border rounded w-full h-10 pl-1"
              type="email"
              data-testid="email"
              {...register("email", { required: "Please enter your email" })}
            />
            <p className="text-red-500" data-testid="error-email">
              {errors.email?.message}
            </p>
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <label htmlFor="subject">Subject</label>
            <input
              className="formLightBorder block border rounded w-full h-10 pl-1"
              type="text"
              data-testid="subject"
              {...register("subject", {
                required: "Please enter a subject",
              })}
            />
            <p className="text-red-500" data-testid="error-subject">
              {errors.subject?.message}
            </p>
          </div>
        </div>
        <div className="field-container h-48">
          <label htmlFor="message">Message</label>
          <textarea
            className="formLightBorder block border rounded w-full p-1 h-full text-start"
            data-testid="message"
            {...register("message", { required: "Please enter a message" })}
          />
          <p className="text-red-500" data-testid="error-message">
            {errors.message?.message}
          </p>
        </div>
        <div className="p-7">
          <button className="btn-blue-bg" type="submit" data-testid="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
