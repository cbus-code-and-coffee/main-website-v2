import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return <section className="container mx-auto px-3">{children}</section>;
};

export default Section;
