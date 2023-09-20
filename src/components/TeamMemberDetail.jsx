import React from "react";
import { useLoaderData } from "react-router-dom";
import { Typography, Avatar, Stack, List } from "@mui/material";
import TodoItem from "./TodoItem";


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
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                {teamMember.todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </List>
        </Stack>
    );
}

export default TeamMemberDetail;