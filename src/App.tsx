import Button, { ButtonType } from "./components/Button";

function App() {
  const button_type: ButtonType = "danger";
  return (
    <>
      <Button
        button_type={button_type}
        onClick={() => {
          console.log(`${button_type} button has been clicked!`);
        }}
      >
        {button_type}
      </Button>
    </>
  );
}

export default App;
