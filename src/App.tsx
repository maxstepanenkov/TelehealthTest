import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import "./styles.css";
import QuestionsForm from "./components/QuestionsForm";
import Layout from "./layouts";

registerCoreBlocks();

const App = () => {
  return (
    <Layout>
      <QuestionsForm />
    </Layout>
  );
};

export default App;
