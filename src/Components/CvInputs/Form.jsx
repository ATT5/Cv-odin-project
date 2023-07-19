import PersonalDetails from "./PersonalDetails";
import classes from "./Form.module.css";
import { useContext } from "react";
import WorkExperience from "./WorkEx/WorkExperience";
import Buttons from "../UI/Buttons";
import { CvContext } from "../Context/CvContext";

const Form = function () {
  const CvCtx = useContext(CvContext);

  const hiddenHandler = () => {
    if (CvCtx.contoler.secondWork) {
      CvCtx.contoler.setSecondWork(false);
    } else {
      CvCtx.contoler.setFirstWork(false);
    }
  };
  const addHandler = () => {
    if (CvCtx.contoler.firstWork) {
      CvCtx.contoler.setSecondWork(true);
    } else {
      CvCtx.contoler.setFirstWork(true);
    }
  };

  const hiddenEducationHandler = () => {
    if (CvCtx.contoler.secondEducation) {
      CvCtx.contoler.setSecondEducation(false);
    } else {
      CvCtx.contoler.setFirstEducation(false);
    }
  };

  const addEducationHandler = () => {
    if (CvCtx.contoler.firstEducation) {
      CvCtx.contoler.setSecondEducation(true);
    } else {
      CvCtx.contoler.setFirstEducation(true);
    }
  };
  return (
    <div className={classes.form}>
      <PersonalDetails />
      <hr />
      {CvCtx.contoler.firstWork && (
        <WorkExperience
          title={"Work Expereince"}
          company={CvCtx.wExperience.setCompany}
          job={CvCtx.wExperience.setJobW}
          entry={CvCtx.wExperience.setFistDay}
          last={CvCtx.wExperience.setLastDay}
          text={CvCtx.wExperience.setExperience}
          tOne="Company"
          tTwo="Job"
          tThree="Entry Date"
          tFour="Resign Date"
        />
      )}
      {CvCtx.contoler.secondWork && (
        <WorkExperience
          title={"Work Expereince 2"}
          company={CvCtx.wExperienceTwo.setCompany2}
          job={CvCtx.wExperienceTwo.setJobW2}
          entry={CvCtx.wExperienceTwo.setFistDay2}
          last={CvCtx.wExperienceTwo.setLastDay2}
          text={CvCtx.wExperienceTwo.setExperience2}
          tOne="Company"
          tTwo="Job"
          tThree="Entry Date"
          tFour="Resign Date"
        />
      )}
      <Buttons
        onDelete={hiddenHandler}
        onAdd={addHandler}
        hideAdd={CvCtx.contoler.secondWork}
        hideDelete={CvCtx.contoler.firstWork}
      />
      <hr />
      {CvCtx.contoler.firstEducation && (
        <WorkExperience
          title={"Education"}
          company={CvCtx.education.setUniversity}
          job={CvCtx.education.setTutor}
          entry={CvCtx.education.setFirst}
          last={CvCtx.education.setLast}
          text={CvCtx.education.setEducation}
          tOne="University"
          tTwo="Tutor"
          tThree="Entry Date"
          tFour="Last day"
        />
      )}
      {CvCtx.contoler.secondEducation && (
        <WorkExperience
          title={"Education 2"}
          company={CvCtx.education.setUniversity2}
          job={CvCtx.education.setTutor2}
          entry={CvCtx.education.setFirst2}
          last={CvCtx.education.setLast2}
          text={CvCtx.education.setEducation2}
          tOne="University"
          tTwo="Tutor"
          tThree="Entry Date"
          tFour="Last day"
        />
      )}
      <Buttons
        onDelete={hiddenEducationHandler}
        onAdd={addEducationHandler}
        hideAdd={CvCtx.contoler.secondEducation}
        hideDelete={CvCtx.contoler.firstEducation}
      />
    </div>
  );
};
export default Form;
