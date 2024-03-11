import Form from "./components/Form";
import "./components/style.css";

function App() {
  return (
    <div>
      <Form status={status} key={status} />
    </div>
  );
}

export default App;
