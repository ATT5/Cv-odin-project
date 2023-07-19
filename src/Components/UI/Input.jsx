import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <>
      <h4 className={classes.title}>{props.title}</h4>
      <input
        type="text"
        placeholder={props.placeholder}
        className={classes.inp}
        onChange={props.onChange}
      />
    </>
  );
};

export default Input;
