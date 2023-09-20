import React from "react";

import { Typography, Avatar, Stack } from "@mui/material";


function TeamMemberDetail({ teamMember }) {
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