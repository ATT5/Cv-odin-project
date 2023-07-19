import { createContext, useState, useReducer } from "react";

export const CvContext = createContext();
const textarea =
  " Lorem elit irure. Aliquip quis  Cillum reprehenderit est magna minim. Nostrud ex aute adffegrhgszvw laborum ea irure amet ea oit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea";

const CvProvider = (props) => {
  ///////////////personal details/////////////
  const [name, setName] = useState("Andres Hernadez");
  const [job, setJob] = useState("Software Developer");
  const [number, setNumber] = useState(5561383147);
  const [email, setEmail] = useState("ahernadez@email.com");
  const [location, setLocation] = useState("Cdmx, Mexico");
  const [yourself, setYourself] = useState(textarea);
  /////////////work experience//////////////
  const [company, setCompany] = useState("A Software Company");
  const [jobW, setJobW] = useState("Software Developer");
  const [fistDay, setFistDay] = useState(2018);
  const [lastDay, setLastDay] = useState(2022);
  const [experience, setExperience] = useState(textarea);
  //////////////////////
  const [company2, setCompany2] = useState("A Software Company");
  const [jobW2, setJobW2] = useState("Software Developer");
  const [fistDay2, setFistDay2] = useState(2018);
  const [lastDay2, setLastDay2] = useState(2022);
  const [experience2, setExperience2] = useState(textarea);
  /////////////education//////////////
  const [university, setUniversity] = useState("University of Toronto");
  const [tutor, setTutor] = useState("Computer science");
  const [first, setFirst] = useState(2018);
  const [last, setLast] = useState(2022);
  const [educationExperience, setEducation] = useState(textarea);
  //////////////////////
  const [university2, setUniversity2] = useState("University of Toronto");
  const [tutor2, setTutor2] = useState("Computer science");
  const [first2, setFirst2] = useState(2018);
  const [last2, setLast2] = useState(2022);
  const [educationExperience2, setEducation2] = useState(textarea);
  /////////////experience controler//////////////
  const [firstWork, setFirstWork] = useState(true);
  const [secondWork, setSecondWork] = useState(false);
  const [firstEducation, setFirstEducation] = useState(true);
  const [secondEducation, setSecondEducation] = useState(false);

  const CvInfo = {
    pDetails: {
      name,
      setName,
      job,
      setJob,
      number,
      setNumber,
      email,
      setEmail,
      location,
      setLocation,
      yourself,
      setYourself,
    },
    wExperience: {
      company,
      setCompany,
      jobW,
      setJobW,
      fistDay,
      setFistDay,
      lastDay,
      setLastDay,
      experience,
      setExperience,
    },
    wExperienceTwo: {
      company2,
      setCompany2,
      jobW2,
      setJobW2,
      fistDay2,
      setFistDay2,
      lastDay2,
      setLastDay2,
      experience2,
      setExperience2,
    },
    education: {
      university,
      setUniversity,
      tutor,
      setTutor,
      first,
      setFirst,
      last,
      setLast,
      educationExperience,
      setEducation,
      university2,
      setUniversity2,
      tutor2,
      setTutor2,
      first2,
      setFirst2,
      last2,
      setLast2,
      educationExperience2,
      setEducation2,
    },
    contoler: {
      firstWork,
      setFirstWork,
      secondWork,
      setSecondWork,
      firstEducation,
      setFirstEducation,
      secondEducation,
      setSecondEducation,
    },
  };

  return (
    <CvContext.Provider value={CvInfo}>{props.children}</CvContext.Provider>
  );
};
export default CvProvider;
