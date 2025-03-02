import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const Form = () => {
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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-wrapper flex flex-col gap-7 px-6">
        <div className="form-header flex flex-col gap-3 pb-5"></div>

        <div className="field-container flex gap-8">
          <div className="w-1/2 flex flex-col gap-3">
            <label htmlFor="firstName">First Name</label>
            <input
              className="formLightBorder block border rounded w-full h-10 pl-1"
              type="text"
              {...register("firstName", {
                required: "Please enter your first name",
              })}
            />
            <p className="text-red-500">{errors.firstName?.message}</p>
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="formLightBorder block border rounded w-full h-10 pl-1"
              type="text"
              {...register("lastName", { required: "Please enter last name" })}
            />
            <p className="text-red-500">{errors.lastName?.message}</p>
          </div>
        </div>

        <div className="field-container flex gap-8">
          <div className="w-1/2 flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <input
              className="formLightBorder block border rounded w-full h-10 pl-1"
              type="email"
              {...register("email", { required: "Please enter your email" })}
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <label htmlFor="subject">Subject</label>
            <input
              className="formLightBorder block border rounded w-full h-10 pl-1"
              type="text"
              {...register("subject", {
                required: "Please enter your subject",
              })}
            />
            <p className="text-red-500">{errors.subject?.message}</p>
          </div>
        </div>
        <div className="field-container h-48">
          <label htmlFor="message">Message</label>
          <textarea
            className="formLightBorder block border rounded w-full p-1 h-full text-start"
            {...register("message", { required: "Please enter a message" })}
          />
          <p className="text-red-500">{errors.message?.message}</p>
        </div>
        <div className="p-7">
          <button className="btn-blue-bg" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
