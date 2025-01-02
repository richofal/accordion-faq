import Accordion from "./components/Accordion";
import faqs from "./data/faqs";

function App() {
  return (
    <>
      <Accordion data={faqs} />
    </>
  );
}

export default App;
