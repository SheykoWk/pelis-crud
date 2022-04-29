import { useEffect } from "react";
import { useForm } from "react-hook-form";

const EditForm = ({ defValues, onEdit }) => {
  const { register, handleSubmit, reset } = useForm();

  const emptyValues = {
    category: "",
    isAvailable: false,
    name: "",
    price: ""
  }

  useEffect(() => {
    if(defValues){
      reset(defValues)
    }
  }, [reset, defValues])

  const onSubmit = (res) => {
    console.log("funciona", res);
    onEdit(res)
    reset(emptyValues)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        required={true}
        {...register("name")}
      />
      <br />
      <label htmlFor="category">Category</label>
      <input
        id="category"
        required={true}
        {...register("category")}
      />
      <br />
      <label htmlFor="price">Price</label>
      <input
        id="price"
        required={true}
        {...register("price")}
      />
      <br />
      <label htmlFor="is_available">Is Available</label>
      <input
        id="is_available"
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
