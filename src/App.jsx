import Form from "./Components/CvInputs/Form";
import Cv from "./Components/Cv/Cv";
import classes from "./App.module.css";
import CvProvider, { CvContext } from "./Components/Context/CvContext";

function App() {
  return (
    <CvProvider>
      <div className={classes.app}>
        <Form />
        <Cv />
      </div>
    </CvProvider>
  );
}

export default App;
