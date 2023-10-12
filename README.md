# react_drag_drop
Complete solution about React Drag and drop features

# Requirements
  - User can create a new task
  - User can drag and drop the task 

# Scoping priotize
 - Create a Task
 - drag and drop the task between todo,in progress and complete

 # Tech stack
 - React.js , Tailwind , Redux-toolkit and HTML drag & drop features

 # Componenet Architecture
  - Modal component
  - Task Header
  - Task Board
  - Task Description

# Data Api , Implementation 

 - Using the client side data 
 - Data Model 
    ```
    {
      id : Number,
      taskName: String,
      taskDes: String,
      priority: String,
      date: Date,
      status: String,
    }
    ```
- Implementation
     - addTask() -  adding newly created Task into task array
     - updateTask() - Basically update the task state , when drag and drop a specific element to specific location
     - onDragStart() - Basically add the id to event object by dataTransfer.setData() method
     - onDrop() - Get the set data id from dataTransfer event object by using getData() method
     - getTask() - Separate the task on the basis of status todo , in progress and complete and put those to the respective array


Gif of working application



