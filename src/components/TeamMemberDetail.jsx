import React from "react";
import { useLoaderData } from "react-router-dom";

import { Typography, Avatar, Stack } from "@mui/material";

export async function loader({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.teamMemberId}`);
    const data = await response.json();
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
        </Stack>
    );
}

export default TeamMemberDetail;