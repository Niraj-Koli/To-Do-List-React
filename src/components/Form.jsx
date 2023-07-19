import React, { useState } from "react";

function Form(props) {
    const [todo, setTodo] = useState("");

    function handleChange(event) {
        setTodo(event.target.value);
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={todo} />
            <button
                onClick={() => {
                    props.onClick(todo);
                    setTodo("");
                }}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default Form;
