import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { TaskDescription } from "./components/TaskDescription";
import { TaskBoard } from "./components/TaskBoard";
import { Portal } from "./components/modal/Portal";
function App() {
  return (
    <>
      <Portal />
      <Header />
      <Routes>
        <Route element={<TaskBoard />} path="/" />
        <Route element={<TaskDescription />} path="task-description/:id" />
      </Routes>
    </>
  );
}

export default App;
