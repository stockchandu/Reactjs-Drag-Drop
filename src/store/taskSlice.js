import { createSlice } from "@reduxjs/toolkit";
export const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload);
    },
    updateTask: (state, action) => {
      // just matching the id with main task if match just changing the status
      // shallow cloning the each object by using map methods
      // filtering based on id and changing the status value
      let filterTask = state.task
        .map((task) => ({ ...task }))
        .filter((tsk) => {
          if (tsk.id === action.payload.id) {
            tsk.status = action.payload.status;
          }
          return tsk;
        });
      state.task = [...filterTask];
    },
  },
});
export const { addTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;

// {
//   id: 0,
//   taskName: "Create a task for node.js",
//   taskDes: "create clustor",
//   priority: "medium",
//   status: "complete",
// },
// {
//   id: 1,
//   taskName: "Create a task vue.js",
//   taskDes: "create clustor",
//   priority: "medium",
//   status: "inprogress",
// },
// {
//   id: 2,
//   taskName: "Create a task for react.js",
//   taskDes: "create clustor",
//   priority: "medium",
//   status: "todo",
// },
// {
//   id: 3,
//   taskName: "Create a task for vue.js",
//   taskDes: "create clustor",
//   priority: "medium",
//   status: "todo",
// },
