import React from "react";
import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = React.forwardRef(({ todo, updateTodo, deleteTodo, ...props } , ref) => {
    const { id, title, completed } = todo;

    return (
        <article {...props} ref={ref} className="flex gap-4  px-4 py-4 border-b-gray-400 border-b ">
            <button
                className={`h-5 w-5  rounded-full  border-2 flex-none ${
                    completed
                        ? " bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-800 flex justify-center items-center"
                        : "inline-block "
                } `}
                onClick={() => updateTodo(id)}
            >
                {completed && <CheckIcon />}
            </button>
            <p className={`text-gray-600 grow dark:text-gray-400 ${completed && "line-through"}`}>
                {title}{" "}
            </p>
            <button onClick={() => deleteTodo(id)} className="flex-none">
                <CrossIcon />
            </button>
        </article>
    );
})
export default TodoItem;
