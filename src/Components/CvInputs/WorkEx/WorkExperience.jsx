import Input from "../../UI/Input";
import { CvContext } from "../../Context/CvContext";
import { useContext } from "react";
import Textarea from "../../UI/Textarea";

const WorkExperience = (props) => {
  const CvCtx = useContext(CvContext);

  const comapnyHandler = (e) => props.company(e.target.value);
  const jobHandler = (e) => props.job(e.target.value);
  const entryHandler = (e) => props.entry(e.target.value);
  const lastHandler = (e) => props.last(e.target.value);
  const textareaHandler = (e) => props.text(e.target.value);
  const details = [
    {
      title: props.tOne,
      placeholder: CvCtx.wExperience.company,
      handler: comapnyHandler,
    },
    {
      title: props.tTwo,
      placeholder: CvCtx.wExperience.jobW,
      handler: jobHandler,
    },
    {
      title: props.tThree,
      placeholder: CvCtx.wExperience.fistDay,
      handler: entryHandler,
    },
    {
      title: props.tFour,
      placeholder: CvCtx.wExperience.lastDay,
      handler: lastHandler,
    },
  ];

  const inputs = details.map((inp, index) => (
    <Input
      key={"w" + index}
      title={inp.title}
      placeholder={inp.placeholder}
      onChange={inp.handler}
    />
  ));
  return (
    <section className="work-experience">
      <h2>{props.title}</h2>
      {inputs}
      <Textarea
        title="Experience"
        placeholder={CvCtx.wExperience.experience}
        onChange={textareaHandler}
      />
    </section>
  );
};

export default WorkExperience;
