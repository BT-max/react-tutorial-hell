import { ReactNode } from "react";

export type AlertType =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

interface Props {
  alert_type: AlertType;
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ alert_type, children, onClose }: Props) => {
  return (
    <>
      <div
        className={`alert alert-${alert_type} alert-dismissible fade show`}
        role="alert"
      >
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
};

export default Alert;
