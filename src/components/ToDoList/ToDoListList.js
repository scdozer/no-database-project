import React from 'react';

function ToDoListList(props){
  return(
    <div>
      {props.individualToDo.map((toDo, index) => {
        return (
          <div className="row individualToDo">
            <div className="col-sm-8">
              <h3> {toDo.content} </h3>
              <p> DUE: {toDo.dueDate} </p>
            </div>
            <div className="col-sm-4"><button onClick={() => {props.completeToDo(index)}}>complete</button></div>
          </div>
        )
      })}
    </div>
  )
}

export default ToDoListList;
