import "./App.css";
import { Button } from "antd";

const changeName = (name) => {
  localStorage.setItem("name", name);
};
const onDelete = () => {
  localStorage.removeItem("name");
};

const onClear = () => {
  localStorage.clear();
};

const App = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      Hello
      {localStorage.getItem("name")}
      <Button onClick={() => changeName("Asadbek")}>Asadbek</Button>
      <Button onClick={() => changeName("Farruxbek")}>Farruxbek</Button>
      <Button onClick={() => changeName("Dilshodbek")}>Dilshodbek</Button>
      <Button onClick={() => changeName("Azimjon")}>Azimjon</Button>
      <Button onClick={onDelete}>Delete</Button>
      <Button onClick={onClear}>Clear</Button>
    </div>
  );
};

export default App;
