import { useEffect, useState } from "react";
import Form, { FormData } from "./components/Form";
import FormView, { FormViewData } from "./components/FormView";

export interface Transaction {
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <>
      <Form
        onSubmit={(data: FormData) => {
          console.log(data);
          setTransactions([...transactions, data]);
        }}
      ></Form>
      <FormView
        transactions={transactions}
        onSubmit={(data: FormViewData) => {
          console.log(data);
        }}
      ></FormView>
    </>
  );
}

export default App;
