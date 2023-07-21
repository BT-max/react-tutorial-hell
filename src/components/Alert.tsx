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
}

const Alert = ({ alert_type, children }: Props) => {
  return (
    <>
      <div className={`alert alert-${alert_type}`} role="alert">
        {children}
      </div>
    </>
  );
};

export default Alert;
