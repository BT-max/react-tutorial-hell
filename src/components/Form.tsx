import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(10, { message: "Description should be more than 10 characters" })
    .max(100, { message: "Description should be less than 100 characters" }),
  amount: z.number({ invalid_type_error: "Amount is required" }).positive(),
  category: z.enum(["Groceries", "Utilities", "Entertainment"]),
});

const categoryValues = ["Groceries", "Utilities", "Entertainment"];

export type FormData = z.infer<typeof schema>;

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form = ({ onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({ mode: "onChange", resolver: zodResolver(schema) });

  const submitHandler = (data: FormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          id="description"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          className="form-control"
          id="amount"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          id="category"
          className="form-select"
          aria-label="Category"
        >
          {/* <option disabled value="" selected>
            Select a category
          </option> */}
          {categoryValues.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default Form;
