import classes from "./CvWork.module.css";
const CvWork = (props) => {
  return (
    <section>
      <h3>{props.title}</h3>
      <h4>{props.company}</h4>
      <span>
        <p>{props.job}</p>
        <p>
          {props.entry}-{props.last}
        </p>
      </span>
      <p className={classes.text}>{props.exp}</p>
    </section>
  );
};

export default CvWork;
