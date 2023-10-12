import { useSelector, useDispatch } from "react-redux";
import { updateTask } from "../store/taskSlice";
export const TaskBoard = () => {
  const { task } = useSelector((store) => store.task);
  const dispatch = useDispatch();
  const textStyleClass = "text-center border-b font-bold";
  const applyBgColor = (status) => {
    const bgColor = {
      red: "bg-red-400",
      yellow: "bg-yellow-400",
      green: "bg-green-400",
    };
    switch (status) {
      case "todo":
        return bgColor.red;
      case "inprogress":
        return bgColor.yellow;
      case "complete":
        return bgColor.green;
      default:
        return;
    }
  };
  // when i drag the element i basically fire the onDragStart function
  // where i store the id in event
  const onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };
  // when I take element from source and just before placing to the drop container this fun invoked
  // here we can do something rocket science
  const onDrop = (ev, status) => {
    // Get id from event
    const id = ev.dataTransfer.getData("id");
    dispatch(updateTask({ id, status }));
  };

  const getTask = () => {
    // Basically we are separating all the status here by array
    const taskObj = {
      todo: [],
      inprogress: [],
      complete: [],
    };

    task?.forEach((tsk) => {
      if (taskObj[tsk.status]) {
        taskObj[tsk.status].push(
          <div
            onDragStart={(ev) => onDragStart(ev, tsk.id)}
            draggable
            key={tsk.id}
            className={`w-7/12 border p-2 h-20  mb-2 ${applyBgColor(
              tsk.status
            )}`}
          >
            {tsk.taskName}
          </div>
        );
      }
    });
    return taskObj;
  };

  return (
    <>
      <div className=" flex h-auto mt-10 border p-2  scroll">
        <div
          className="border w-3/12 ml-36"
          onDragOver={(ev) => ev.preventDefault()}
          onDrop={(ev) => onDrop(ev, "todo")}
        >
          <h1 className={textStyleClass}>TODO</h1>
          <div className="mt-2 ml-2">{getTask().todo}</div>
        </div>
        <div
          className="border w-3/12 ml-10"
          onDragOver={(ev) => ev.preventDefault()}
          onDrop={(ev) => onDrop(ev, "inprogress")}
        >
          <h1 className={textStyleClass}>IN PROGRESS</h1>
          <div className="mt-2 ml-2">{getTask().inprogress}</div>
        </div>
        <div
          className="border w-3/12  ml-10"
          onDrop={(ev) => onDrop(ev, "complete")}
          onDragOver={(ev) => ev.preventDefault()}
        >
          <h1 className={textStyleClass}>COMPLETE</h1>
          <div className="mt-2 ml-2">{getTask().complete}</div>
        </div>
      </div>
    </>
  );
};
