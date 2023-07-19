import React from "react";

function List(props) {
    return (
        <li
            onClick={() => {
                props.onChecked(props.id);
            }}>
            {props.todoItem}
        </li>
    );
}

export default List;
