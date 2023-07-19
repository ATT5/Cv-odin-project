import CvPersonalDetails from "./CvPersonalDetails";
import classes from "./Cv.module.css";
import CvWork from "./CvWork/CvWork";
import { useContext } from "react";
import { CvContext } from "../Context/CvContext";

const Cv = function () {
  const CvCtx = useContext(CvContext);

  return (
    <div className={classes.cv}>
      <CvPersonalDetails />
      {CvCtx.contoler.firstWork && (
        <CvWork
          title="Work Experience"
          company={CvCtx.wExperience.company}
          job={CvCtx.wExperience.jobW}
          entry={CvCtx.wExperience.fistDay}
          last={CvCtx.wExperience.lastDay}
          exp={CvCtx.wExperience.experience}
        />
      )}
      {CvCtx.contoler.secondWork && (
        <CvWork
          title="Work Experience"
          company={CvCtx.wExperienceTwo.company2}
          job={CvCtx.wExperienceTwo.jobW2}
          entry={CvCtx.wExperienceTwo.fistDay2}
          last={CvCtx.wExperienceTwo.lastDay2}
          exp={CvCtx.wExperienceTwo.experience2}
        />
      )}
      {CvCtx.contoler.firstEducation && (
        <CvWork
          title="Education"
          company={CvCtx.education.university}
          job={CvCtx.education.tutor}
          entry={CvCtx.education.first}
          last={CvCtx.education.last}
          exp={CvCtx.education.educationExperience}
        />
      )}
      {CvCtx.contoler.secondEducation && (
        <CvWork
          title="Education 2"
          company={CvCtx.education.university2}
          job={CvCtx.education.tutor2}
          entry={CvCtx.education.first2}
          last={CvCtx.education.last2}
          exp={CvCtx.education.educationExperience2}
        />
      )}
    </div>
  );
};

export default Cv;
