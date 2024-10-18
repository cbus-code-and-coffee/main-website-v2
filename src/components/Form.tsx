// import { useForm, SubmitHandler } from "react-hook-form";

// interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
//   subject: string;
//   message: string;
// }

const Form = () => {
  return (
    <form>
      <div className="form-wrapper flex flex-col gap-7 px-6">
        <div className="form-header flex flex-col gap-3 pb-5"></div>

        <div className="field-container flex gap-8">
          <div className="w-1/2 flex flex-col gap-3">
            <label htmlFor="firstName">First Name</label>
            <input
              className="formLightBorder block border rounded w-full h-10 pl-1"
              type="text"
              name="firstName"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="formLightBorder block border rounded w-full h-10 pl-1"
              type="text"
              name="lastName"
            />
          </div>
        </div>

        <div className="field-container flex gap-8">
          <div className="w-1/2 flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <input
              className="formLightBorder block border rounded w-full h-10 pl-1"
              type="email"
              name="email"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <label htmlFor="subject">Subject</label>
            <input
              className="formLightBorder block border rounded w-full h-10 pl-1"
              type="text"
              name="subject"
            />
          </div>
        </div>
        <div className="field-container h-48">
          <label htmlFor="message">Message</label>
          <input
            className="formLightBorder block border rounded w-full pl-1 h-full"
            type="text"
            name="message"
          />
        </div>
        <div>
          <button className="btn-blue-bg">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
