import Input from "../../UI/Input";
import classes from "./ProductItemForm.module.css";

const ProductItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="수량"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>담기</button>
    </form>
  );
};

export default ProductItemForm;
