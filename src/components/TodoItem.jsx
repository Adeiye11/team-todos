import React, { useState, useEffect } from "react";
import { ListItem, ListItemButton, ListItemText, Checkbox } from "@mui/material";



function TodoItem({ todo }) {
    const [completed, setCompleted] = useState(todo.completed);
    async function handleTodoUpdate(value, id) {
        await fetch(`https://team-todos-backend.onrender.com/todos/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                completed: !completed,
            }),
        }).then(() => {
            setCompleted(!completed);
        });
    }
    useEffect(() => {
        setCompleted(todo.completed);
    }, [todo.completed]);

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={(event) => handleTodoUpdate(event.target.value, todo.id)}>
                <Checkbox checked={Boolean(completed)} onChange={(event) => handleTodoUpdate(event.target.value, todo.id)} />
                <ListItemText primary={todo.title} />
            </ListItemButton>
        </ListItem>
    );
}

export default TodoItem;