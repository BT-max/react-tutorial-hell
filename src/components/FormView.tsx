import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Transaction } from "../App";

const schema = z.object({
  category: z.enum([
    "All Categories",
    "Groceries",
    "Utilities",
    "Entertainment",
  ]),
});

export type FormViewData = z.infer<typeof schema>;

interface FormViewProps {
  transactions: Transaction[];
  onSubmit: (data: FormViewData) => void;
}

const FormView = ({ transactions, onSubmit }: FormViewProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormViewData>({ resolver: zodResolver(schema) });

  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([]);

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  const submitHandler = (data: FormViewData) => {
    onSubmit(data);
    setFilteredTransactions(
      transactions.filter((transaction) =>
        data.category === "All Categories"
          ? true
          : transaction.category === data.category
      )
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="mt-5 mb-3">
          <select
            {...register("category")}
            id="category"
            className="form-select"
            aria-label="Category"
          >
            {schema.shape.category._def.values.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
          <button
            type="submit"
            className="btn btn-primary mt-3"
            disabled={!isValid}
          >
            Submit
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          {filteredTransactions &&
            filteredTransactions.map((transaction, index) => (
              <tr key={index}>
                <th>{index}</th>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.category}</td>
              </tr>
            ))}
        </table>
      </form>
    </>
  );
};

export default FormView;
