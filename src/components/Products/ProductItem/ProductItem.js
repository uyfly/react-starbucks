import classes from "./ProductItem.module.css";
import ProductItemForm from "./ProductItemForm";

const ProductItem = (props) => {
  return (
    <li className={classes.product}>
      <div>
        <h3>
          {props.name}
          <span>{props.name_en}</span>
        </h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <ProductItemForm id={props.id} />
      </div>
    </li>
  );
};

export default ProductItem;
