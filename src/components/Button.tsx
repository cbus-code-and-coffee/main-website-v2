interface ButtonProps {
  label: string;
  href: string;
  class: string;
}

const Button = (props: ButtonProps) => {
  return (
    <a
      className={props.class}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>{props.label}</button>
    </a>
  );
};

export default Button;
