import Alert, { AlertType } from "./components/Alert";

function App() {
  const alert_type: AlertType = "danger";
  return (
    <>
      <Alert alert_type={alert_type}>
        A simple {alert_type} alert—check it out!
      </Alert>
    </>
  );
}

export default App;
