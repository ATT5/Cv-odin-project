import classes from "./Textarea.module.css";

const Textarea = (props) => {
  return (
    <>
      <h4>{props.title}</h4>
      <textarea
        className={classes.text}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
};

export default Textarea;
