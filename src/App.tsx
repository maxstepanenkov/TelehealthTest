import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import "./styles.css";
import QuestionsForm from "./components/QuestionsForm";

registerCoreBlocks();

const App = () => {
  return (
    <QuestionsForm />
  );
};

export default App;
