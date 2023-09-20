import React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import CollectionsBookmarkTwoToneIcon from '@mui/icons-material/CollectionsBookmarkTwoTone';
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
        <>
            <Typography variant={"h2"} sx={{ padding: 2 }} textAlign={"center"} marginTop={5}>
                <CollectionsBookmarkTwoToneIcon fontSize={"large"} /> Team Todos <CollectionsBookmarkTwoToneIcon fontSize={"large"} />
            </Typography>
            <Paper sx={{ minWidth: 0, margin: 5, overflow: "hidden" }} elevation={3}>
                <Stack direction={"row"}>
                    <TeamList team={teamMembers} />
                    <Outlet />
                </Stack>
            </Paper >
        </>
    );
}

export default Root;