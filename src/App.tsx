import { useState } from "react";
import Alert, { AlertType } from "./components/Alert";
import Button, { ButtonType } from "./components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const type: ButtonType | AlertType = "primary";
  return (
    <>
      {showAlert && (
        <Alert
          alert_type={type}
          onClose={() => {
            setShowAlert(false);
            console.log(`${type} alert closed!`);
          }}
        >
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </Alert>
      )}
      <Button
        button_type={type}
        onClick={() => {
          console.log(`${type} button clicked!`);
          setShowAlert(true);
        }}
      >
        {type}
      </Button>
    </>
  );
}

export default App;
