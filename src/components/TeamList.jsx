import React from "react";
import { Stack } from "@mui/material";
import TeamItem from "./TeamMemberListItem";

function TeamList({ team }) {
    return (
        <Stack padding={100} >
            {team.map((teamMember) => (
                <TeamItem key={teamMember.id} teamMember={teamMember} />
            ))}
        </Stack>
    )
}


export default TeamList;
