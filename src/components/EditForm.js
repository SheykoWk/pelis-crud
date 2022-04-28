import { useForm } from "react-hook-form";

const EditForm = ({ defValues, onEdit }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (res) => {
    console.log("funciona", res);
    onEdit(res)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        required={true}
        defaultValue={defValues.name}
        {...register("name")}
      />
      <br />
      <label htmlFor="category">Category</label>
      <input
        id="category"
        required={true}
        defaultValue={defValues.category}
        {...register("category")}
      />
      <br />
      <label htmlFor="price">Price</label>
      <input
        id="price"
        required={true}
        defaultValue={defValues.price}
        {...register("price")}
      />
      <br />
      <label htmlFor="is_available">Is Available</label>
      <input
        id="is_available"
        defaultChecked={defValues.isAvailable}
        type="checkbox"
        {...register("isAvailable")}
      />
      <br />
      <input type="submit" value="Editar" />
    </form>
  );
};

const objDataBase = {
  category: "fast food",
  isAvailable: false,
  name: "maruchan",
  price: "18.00",
};

const objFormEditWithPut = {
    category: "fast food",
    isAvailable: true,
    name: "maruchan",
    price: "18.00",
  };
  const objFormEditWithPatch = {
    isAvailable: true,
  };

export default EditForm;
