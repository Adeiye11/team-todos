import React from "react";
import { Stack, Divider } from "@mui/material";
import TeamItem from "./TeamItem";

function TeamList({ team, onclick }) {
    return (
        <Stack divider={<Divider />} sx={{ minWidth: 0 }} p={3}>
            {team.map((teamMember) => (
                <TeamItem key={teamMember.id} teamMember={teamMember} onclick={onclick} />
            ))}
        </Stack>
    )
}


export default TeamList;
