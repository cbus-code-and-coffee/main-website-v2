import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { SubmitHandler } from "react-hook-form";
import { FormValues } from "../types";

export const submitContactForm: SubmitHandler<FormValues> = async (data) => {
  try {
    await addDoc(collection(db, "submissions"), data);
    alert("Form submitted successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Error submitting form. Please try again.");
  }
};
