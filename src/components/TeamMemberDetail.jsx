import React from "react";
import { useLoaderData } from "react-router-dom";
import { Typography, Avatar, Stack, List, Paper, Fab, Modal, TextField, Button, Container } from "@mui/material";
import TodoItem from "./TodoItem";
import AddIcon from '@mui/icons-material/Add';

export async function loader({ params }) {
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${params.teamMemberId}`);
    const TodosResponse = await fetch(`https://team-todos-backend.onrender.com/todos`);
    const userData = await userResponse.json();
    const todosData = await TodosResponse.json();
    const data = {
        ...userData,
        todos: todosData.filter((todo) => todo.userId === userData.id),
    };
    return data;
}

function TeamMemberDetail() {
    const teamMember = useLoaderData();

    const [open, setOpen] = React.useState(false);
    const [newTodo, setNewTodo] = React.useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNewTodoChange = (event) => {
        setNewTodo(event.target.value);
    };

    async function handleAddTodo() {
        await fetch(`https://team-todos-backend.onrender.com/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: teamMember.id,
                title: newTodo,
                completed: false
            })
        })
            .then(response => response.json())
            .then(data => {
                teamMember.todos.push(data);
            });
        setNewTodo('');
        handleClose();
    };

    return (
        <Stack sx={{ minWidth: 0, padding: 10, margin: "auto", alignItems: "center", justifyContent: "center", display: "flex" }}>
            <Avatar src={`https://picsum.photos/seed/${teamMember.id}/500/300`} sx={{ width: 150, height: 150 }} />
            <Typography variant={"h4"} sx={{ padding: 2 }}>
                {teamMember.name}
            </Typography>
            <Typography variant={"body1"} sx={{ padding: 2 }}>
                {teamMember.email}
            </Typography>
            <Typography variant={"body1"} sx={{ padding: 2 }}>
                {teamMember.phone}
            </Typography>
            <Typography variant={"body1"} sx={{ padding: 2 }}>
                {teamMember.website}
            </Typography>
            <Typography variant={"body1"} sx={{ padding: 2 }}>
                {teamMember.company.name}
            </Typography>
            <Typography variant={"body1"} sx={{ padding: 2 }}>
                {teamMember.company.catchPhrase}
            </Typography>
            <Paper sx={{ backgroundColor: "#bfb192", margin: 3 }} elevation={10}>
                <Typography variant={"h4"} sx={{ padding: 2 }} textAlign={"center"} color={"white"}>
                    Todos
                </Typography>
                <List sx={{ width: "100%", backgroundColor: "#f7f7f7" }}>
                    {teamMember.todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </List>
            </Paper>

            {/* Modal */}
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Paper sx={{
                    position: 'absolute',
                    width: 400,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: 2
                }}>
                    <Typography variant={"h6"} sx={{ padding: 2 }} textAlign={"center"}>
                        Add New Todo Item for {teamMember.name}
                    </Typography>
                    <TextField
                        fullWidth
                        label="New Todo"
                        variant="outlined"
                        value={newTodo}
                        onChange={handleNewTodoChange}
                        sx={{ marginBottom: 2 }}
                    />
                    <Container sx={{ display: "flex", justifyContent: "center" }}>
                        <Button variant="contained" color="primary" onClick={handleAddTodo}>
                            Add
                        </Button>
                    </Container>
                </Paper>
            </Modal>

            {/* Floating Action Button */}
            <Fab color="primary" variant={"extended"} onClick={handleOpen} sx={{ position: "fixed", bottom: 15, right: 15 }}>
                <AddIcon sx={{ mr: 1 }} />
                New Todo
            </Fab>
        </Stack>
    );
}

export default TeamMemberDetail;
