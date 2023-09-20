import React, { useState, useEffect } from "react";
import { Typography, Paper, Stack, Container } from "@mui/material";
import TeamMemberDetail from "../components/TeamMemberDetail";
import TeamList from "../components/TeamList";

function Root() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [selectedTeamMember, setSelectedTeamMember] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setTeamMembers(data));
    }
        , []);


    const handleTeamMemberClick = (teamMember) => {
        setSelectedTeamMember(teamMember);
    };

    return (
        <Paper sx={{ minWidth: 0, margin: 15, overflow: "hidden" }} elevation={3}>
            <Stack direction={"row"}>
                <TeamList team={teamMembers} onclick={handleTeamMemberClick} />
                {selectedTeamMember ? (
                    <TeamMemberDetail teamMember={selectedTeamMember} />
                ) : (
                    <Container sx={{ margin: "auto" }}>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Select a team member
                        </Typography>
                    </Container>
                )}
            </Stack>
        </Paper >
    );
}

export default Root;