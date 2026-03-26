import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import type { ToDo } from "../../models/todo-items";
import "./ToDoList.scss";



export const ToDoList = (props: {
  todos: ToDo[];
  updateToDo: (item: ToDo) => void;
  deleteToDo: (item: ToDo) => void;
}) =>
 {

    const checkedList = () => {
        return props.todos
                .filter((item) => !item.isDone)
                .map((item, index) => {
                        return (<ToDoListItem
                            toDoItem={item}
                            key={index}
                            updateToDo={props.updateToDo}
                            deleteToDo={props.deleteToDo}/>
                        );
                })
    }

    const unCheckedList = () => {
        return props.todos
                .filter((item) => item.isDone)
                .map((item, index) => {
                        return (<ToDoListItem
                            toDoItem={item}
                            key={index}
                            updateToDo={props.updateToDo}
                            deleteToDo={props.deleteToDo}/>
                        );
                })
    }

    return (
        <div className="todo-container">
        <ul className="todo-list failed">
            {
                checkedList()
            }
        </ul>
        <ul className="todo-list completed">
            {
                unCheckedList()
            }
        </ul>
    </div>
    );
};