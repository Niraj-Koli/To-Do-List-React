import React, { useState } from "react";

import List from "./components/List";
import Form from "./components/Form";

function App() {
    const [items, setItems] = useState([]);

    function handleSubmit(todo) {
        if (todo === "") {
            return;
        }

        setItems((prevItems) => {
            return [...prevItems, todo];
        });
    }

    function deleteItem(id) {
        setItems((prevItems) => {
            return prevItems.filter((item, index) => index !== id);
        });
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <Form onClick={handleSubmit} />
            <div>
                <ul>
                    {items.map((item, index) => (
                        <List
                            key={index}
                            id={index}
                            todoItem={item}
                            onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
