import { useContext } from "react";
import { CvContext } from "../Context/CvContext";
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";
const PersonalDetails = function () {
  const CvCtx = useContext(CvContext);

  const nameHandler = (e) => CvCtx.pDetails.setName(e.target.value);
  const jobHandler = (e) => CvCtx.pDetails.setJob(e.target.value);
  const numberHandler = (e) => CvCtx.pDetails.setNumber(e.target.value);
  const emailHandler = (e) => CvCtx.pDetails.setEmail(e.target.value);
  const locationHandler = (e) => CvCtx.pDetails.setLocation(e.target.value);
  const describeYourselfHandler = (e) =>
    CvCtx.pDetails.setYourself(e.target.value);

  const details = [
    { title: "Name", placeholder: CvCtx.pDetails.name, handler: nameHandler },
    {
      title: "Job Position",
      placeholder: CvCtx.pDetails.job,
      handler: jobHandler,
    },
    {
      title: "Phone Number",
      placeholder: CvCtx.pDetails.number,
      handler: numberHandler,
    },
    {
      title: "Email",
      placeholder: CvCtx.pDetails.email,
      handler: emailHandler,
    },
    {
      title: "Location",
      placeholder: CvCtx.pDetails.location,
      handler: locationHandler,
    },
  ];
  const inputs = details.map((inp, index) => (
    <Input
      key={"p" + index}
      title={inp.title}
      placeholder={inp.placeholder}
      onChange={inp.handler}
    />
  ));

  return (
    <section className="personal-ifo">
      <h2>Personal Details</h2>
      {inputs}
      <Textarea
        title="Describe Yourself"
        placeholder={CvCtx.pDetails.yourself}
        onChange={describeYourselfHandler}
      />
    </section>
  );
};

export default PersonalDetails;
