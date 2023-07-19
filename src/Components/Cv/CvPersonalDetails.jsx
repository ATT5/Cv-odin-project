import { useContext } from "react";
import { CvContext } from "../Context/CvContext";
import classes from "./CvPersonalDetails.module.css";

const CvPersonalDetails = () => {
  const CvCtx = useContext(CvContext);

  return (
    <>
      <section className={classes.pd}>
        <section className={classes.name}>
          <h2>{CvCtx.pDetails.name}</h2>
          <h3>{CvCtx.pDetails.job}</h3>
        </section>{" "}
        <section className={classes.info}>
          <p className={classes.txtInfo}>
            <span>📞</span>
            {CvCtx.pDetails.number}
          </p>
          <p className={`${classes.txtInfo} ${classes.email}`}>
            <span>📩</span>
            {CvCtx.pDetails.email}
          </p>
          <p className={classes.txtInfo}>
            <span>📍</span>
            {CvCtx.pDetails.location}
          </p>
        </section>
      </section>
      <hr />
      <p className={classes.text}>{CvCtx.pDetails.yourself}</p>
    </>
  );
};

export default CvPersonalDetails;
