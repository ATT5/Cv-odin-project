import classes from "./Buttons.module.css";

const Buttons = (props) => {
  return (
    <div>
      {props.hideDelete && (
        <button onClick={props.onDelete} className={classes.delete}>
          Delete
        </button>
      )}
      {!props.hideAdd && (
        <button onClick={props.onAdd} className={classes.add}>
          Add
        </button>
      )}
    </div>
  );
};
export default Buttons;
