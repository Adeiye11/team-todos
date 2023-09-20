import React from "react";
import { Paper, Stack } from "@mui/material";
import TeamList from "../components/TeamList";
import { Outlet, useLoaderData } from "react-router-dom";

export async function loader() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data
}

function Root() {
    const teamMembers = useLoaderData();

    return (
        <Paper sx={{ minWidth: 0, margin: 5, overflow: "hidden" }} elevation={3}>
            <Stack direction={"row"}>
                <TeamList team={teamMembers} />
                <Outlet />
            </Stack>
        </Paper >
    );
}

export default Root;