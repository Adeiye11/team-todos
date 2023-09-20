import React from "react";
import { Stack, Divider } from "@mui/material";
import TeamItem from "./TeamItem";

function TeamList({ team, onclick }) {
    return (
        <Stack divider={<Divider />} p={3} bgcolor={"#f7f7f7"} borderRight={"solid 1px #e3e3e3"}>
            {team.map((teamMember) => (
                <TeamItem key={teamMember.id} teamMember={teamMember} onclick={onclick} />
            ))}
        </Stack>
    )
}


export default TeamList;
