import React, { useState } from "react";
import { Stack, Divider, TextField } from "@mui/material";
import TeamItem from "./TeamItem";

function TeamList({ team, onclick }) {
    const [filteredTeam, setFilteredTeam] = useState(team);

    const handleTextChange = (text) => {
        const newTeam = team.filter((teamMember) => teamMember.name.toLowerCase().includes(text.toLowerCase()));
        setFilteredTeam(newTeam);
    };
    return (
        <Stack divider={<Divider />} p={3} bgcolor={"#f7f7f7"} borderRight={"solid 1px #e3e3e3"}>
            {/* search input */}
            <TextField id="outlined-basic" label="Search" variant="outlined" sx={{ background: "white" }} margin={"normal"} onChange={(event) => handleTextChange(event.target.value)} />
            {filteredTeam.map((teamMember) => (
                <TeamItem key={teamMember.id} teamMember={teamMember} onclick={onclick} />
            ))}
        </Stack>
    )
}


export default TeamList;
