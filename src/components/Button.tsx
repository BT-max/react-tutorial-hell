export type ButtonType =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

interface Props {
  button_type?: ButtonType;
  children: string;
  onClick: () => void;
}

const Button = ({ button_type = "primary", children, onClick }: Props) => {
  return (
    <>
      <button
        className={`btn btn-${button_type}`}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
