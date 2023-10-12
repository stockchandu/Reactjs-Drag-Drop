import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { useState } from "react";
import { handleModal } from "../../store/modalSlice";
import { addTask } from "../../store/taskSlice";
import "./modal.css";
const initialTask = {
  taskName: "",
  taskDes: "",
  priority: "high",
  date: new Date().toLocaleDateString(),
  status: "todo",
};
export const ModalContent = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((store) => store.modal);
  const [task, setTask] = useState(initialTask);

  const handleChange = (ev) => {
    setTask({
      ...task,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleCreateTask = () => {
    let newTask = { id: nanoid(), ...task };
    dispatch(addTask(newTask));
    if (modal) dispatch(handleModal(false));
  };
  const handleCancelTask = () => {
    if (modal) dispatch(handleModal(false));
  };
  return (
    <>
      <div className="modal p-5 h-auto w-3/12">
        <h1 className="text-center font-bold underline mb-5">Create Task</h1>
        <div>
          {/* TODO : make input box re-usable */}
          <label>Task Name</label>
          <input
            type="text"
            className="border-2 w-full h-10"
            placeholder="Enter the task name"
            name="taskName"
            onChange={(ev) => {
              handleChange(ev);
            }}
          />
        </div>
        <div className="mt-3">
          <label>Task Priority</label>
          {/* TODO : Change onChange method to other methods as default value is not taking */}
          <select
            className="border-2 w-full h-10"
            name="priority"
            onChange={(ev) => {
              handleChange(ev);
            }}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="mt-3">
          <label>Task Status</label>
          <select
            className="border-2 w-full h-10"
            name="status"
            onChange={(ev) => {
              handleChange(ev);
            }}
          >
            <option value="todo">Todo</option>
            <option value="inprogress">In Progress</option>
            <option value="complete">Complete</option>
          </select>
        </div>
        <div className="mt-3">
          <label>Task Description</label>
          <input
            type="text"
            className="border-2 w-full h-40"
            name="taskDes"
            onChange={(ev) => {
              handleChange(ev);
            }}
          />
        </div>

        <div className=" mt-2 flex justify-end">
          <button className="border p-2" onClick={handleCancelTask}>
            Cancel
          </button>
          <button
            className="border p-2 ml-2 bg-[#0050C5] text-white font-semibold"
            onClick={handleCreateTask}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};
